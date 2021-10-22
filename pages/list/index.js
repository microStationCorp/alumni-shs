import {
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";

import CustomHead from "components/headMeta";
import { TableDataComp } from "components/listComp";
import dbConnect from "utils/dbConnect";
import alumniModel from "model/alumniModel";
import { useEffect, useState } from "react";
import { Loader } from "components/listComp";
import { Finished } from "components/listComp";

export default function Lists({ alumnis }) {
  const [rowData, setRowData] = useState([...alumnis]);
  const [end, setEnd] = useState(false);

  const fetchData = async () => {
    window.addEventListener("scroll", function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
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
      }
    });
  };

  return (
    <>
      <CustomHead
        title="List of Alumni"
        description="this page contains list of alumnis'"
      />
      <Container style={{ width: "100%" }}>
        <InfiniteScroll
          dataLength={rowData.length}
          next={fetchData}
          hasMore={!end}
          loader={<Loader />}
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
