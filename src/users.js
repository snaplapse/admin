import { List, Datagrid, TextField, ImageField, ArrayField, DateField } from "react-admin";

export const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="username" />
      <ImageField source="photos" />
      <ArrayField source="likes" />
      <DateField source="created" />
    </Datagrid>
  </List>
);