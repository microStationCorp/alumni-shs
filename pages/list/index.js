import CustomHead from "components/headMeta";
import { Container } from "@mui/material";
import dbConnect from "utils/dbConnect";
import alumniModel from "model/alumniModel";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import LinkIcon from "@mui/icons-material/Link";
import { useRouter } from "next/router";

export default function Lists({ alumnis }) {
  const router = useRouter();
  const column = [
    { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
    {
      field: "passoutYear",
      headerName: "Pass Out Year",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "dateOfRegister",
      headerName: "Date of Register",
      flex: 1,
      minWidth: 180,
    },
    {
      field: "admin",
      headerName: "Is Admin?",
      flex: 1,
      type: "boolean",
      minWidth: 100,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Go to",
      width: 100,
      // eslint-disable-next-line react/display-name
      getActions: (params) => [
        // eslint-disable-next-line react/jsx-key
        <GridActionsCellItem
          icon={<LinkIcon />}
          label="Go To"
          onClick={() => router.push(`/alumni/${params.id}`)}
        />,
      ],
    },
  ];
  return (
    <>
      <CustomHead
        title="List of Alumni"
        description="this page contains list of alumnis'"
      />
      <Container style={{ width: "100%" }}>
        <DataGrid autoHeight rows={alumnis} columns={column} />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  await dbConnect();
  const results = await alumniModel.find({}).select("-__v");
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
