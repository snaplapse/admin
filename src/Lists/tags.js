import { List, Datagrid, TextField, DateField, ReferenceField } from "react-admin";

export const TagList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <DateField source="created" />
      <ReferenceField source="category" reference="categories">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="location" reference="locations">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);