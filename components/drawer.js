import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { pages } from "../utils/pages";

export default function CustomDrawer() {
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
              onClick={() => router.push(p.link)}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
