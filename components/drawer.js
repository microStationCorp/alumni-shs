import { Divider, List, ListItem, ListItemText } from "@mui/material";
import { useRouter } from "next/router";
import { pages } from "utils/pages";

export default function CustomDrawer({ toggle }) {
  const router = useRouter();
  return (
    <div>
      <Divider />
      <List>
        {pages.map((p) => (
          <ListItem button key={p.id}>
            <ListItemText
              style={{ textAlign: "center" }}
              primary={p.name}
              onClick={() => {
                router.push(p.link);
                toggle();
              }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
