import { List, Datagrid, TextField, DateField } from "react-admin";

export const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="username" />
      <DateField source="created" />
    </Datagrid>
  </List>
);