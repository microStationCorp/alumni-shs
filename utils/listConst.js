import { GridActionsCellItem } from "@mui/x-data-grid";
import LinkIcon from "@mui/icons-material/Link";
import { useRouter } from "next/router";

export const ColumnsDataGrid = () => {
  const router = useRouter();
  return [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
    },
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
};
