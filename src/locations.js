import { List, Datagrid, TextField, DateField, NumberField } from "react-admin";

export const LocationList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <NumberField source="longitude" />
      <NumberField source="latitude" />
      <DateField source="created" />
    </Datagrid>
  </List>
);