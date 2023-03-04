import { List, Datagrid, TextField, DateField, BooleanField, ReferenceField, ImageField } from "react-admin";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export const PhotosList = () => (  
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <Zoom>
        <ImageField source="bitmap" label="Image" />
      </Zoom>
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