import {
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  LinearProgress,
} from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";

import CustomHead from "components/headMeta";
import { TableDataComp } from "components/listComp";
import dbConnect from "utils/dbConnect";
import alumniModel from "model/alumniModel";
import { useState } from "react";
import { Finished } from "components/listComp";
import { LoadMore } from "components/listComp";
import { useEffect } from "react";

export default function Lists({ alumnis }) {
  const [loading, setLoading] = useState(false);
  const [rowData, setRowData] = useState([...alumnis]);
  const [end, setEnd] = useState(false);
  const [loadmore, setLoadmore] = useState(false);

  useEffect(() => {
    if (loadmore) {
      setLoading(true);
      fetch(`/api/loadList/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ skipNumber: rowData.length }),
      }).then((res) =>
        res.json().then((doc) => {
          setRowData([...rowData, ...doc.data]);
          setEnd(doc.end);
        })
      );
      setLoading(false);
    }
    setLoadmore(false);
  }, [loadmore, rowData]);

  return (
    <>
      <CustomHead
        title="List of Alumni"
        description="this page contains list of alumnis'"
      />
      <Container style={{ width: "100%" }}>
        <InfiniteScroll
          dataLength={rowData.length}
          // next={fetchData}
          hasMore={!end}
          loader={
            !loading ? (
              <LoadMore setLoad={setLoadmore} loadmore={loadmore} />
            ) : (
              <LinearProgress color="secondary" />
            )
          }
          // loader={<Loader />}
          endMessage={<Finished />}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 600 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Sl. No.</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Pass Out Year</TableCell>
                  <TableCell align="right">Date of Registration</TableCell>
                  <TableCell align="center">Is Admin?</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowData.map((data, index) => (
                  <TableDataComp
                    key={data.id}
                    index={index + 1}
                    name={data.name}
                    poy={data.passoutYear}
                    dor={data.dateOfRegister}
                    ia={
                      data.admin ? (
                        <DoneIcon color="success" sx={{ fontSize: 15 }} />
                      ) : (
                        <CloseIcon color="error" sx={{ fontSize: 15 }} />
                      )
                    }
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* {loading ? <LinearProgress color="secondary" /> : null} */}
        </InfiniteScroll>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  await dbConnect();
  const results = await alumniModel.find({}).select("-__v").skip(0).limit(10);
  const alumnis = results.map((doc) => {
    return {
      admin: doc.admin,
      name: doc.name,
      id: doc._id.toString(),
      passoutYear: doc.passoutYear,
      dateOfRegister: doc.dateOfRegister.toDateString(),
    };
  });
  return {
    props: { alumnis },
    revalidate: 1,
  };
}
