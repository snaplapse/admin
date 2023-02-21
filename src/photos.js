import { List, Datagrid, TextField, DateField, BooleanField, ReferenceField } from "react-admin";

export const PhotosList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="description" />
      <BooleanField source="visible" />
      <DateField source="created" />
      <ReferenceField source="location" reference="locations">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="user" reference="users">
        <TextField source="username" />
      </ReferenceField>
    </Datagrid>
  </List>
);