import { List, Datagrid, TextField, DateField, ReferenceField } from "react-admin";

export const FlagList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <DateField source="created" />
      <ReferenceField source="photo" reference="photos">
        <TextField source="id" />
      </ReferenceField>
      <ReferenceField source="user" reference="users">
        <TextField source="username" />
      </ReferenceField>
    </Datagrid>
  </List>
);