import { Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import CustomHead from "components/headMeta";
import { ColumnsDataGrid } from "utils/listConst";
import { useEffect, useState } from "react";

export default function Lists() {
  const columns = ColumnsDataGrid();
  const [page, setPage] = useState(0);
  const [rowCount, setRowCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    let active = true;

    (async () => {
      setLoading(true);

      fetch("/api/totalAlumni").then((res) =>
        res.json().then((doc) => setRowCount(doc.count))
      );

      fetch(`/api/paginate/${page}`).then((res) =>
        res.json().then((doc) => {
          setRows(doc.data);
        })
      );

      if (!active) {
        return;
      }

      setLoading(false);
    })();

    return () => {
      active = false;
    };
  }, [page]);

  return (
    <>
      <CustomHead
        title="List of Alumni"
        description="this page contains list of alumnis'"
      />
      <Container style={{ width: "100%" }}>
        <DataGrid
          rowCount={rowCount}
          autoHeight
          disableColumnMenu
          rows={rows}
          columns={columns}
          page={page}
          onPageChange={async (newPage) => setPage(newPage)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          paginationMode="server"
          pagination
          loading={loading}
        />
      </Container>
    </>
  );
}

// export async function getStaticProps() {
//   await dbConnect();
//   const results = await alumniModel.find({}).select("-__v").skip(0).limit(2);
//   const alumnis = results.map((doc) => {
//     return {
//       admin: doc.admin,
//       name: doc.name,
//       id: doc._id.toString(),
//       passoutYear: doc.passoutYear,
//       dateOfRegister: doc.dateOfRegister.toDateString(),
//     };
//   });
//   return {
//     props: { alumnis },
//     revalidate: 1,
//   };
// }
