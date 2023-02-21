import React from 'react';
import { Admin, Resource } from 'react-admin';
import drfProvider from 'ra-data-django-rest-framework';
import authProvider from './authProvider';
import Dashboard from './Dashboard';
import UserIcon from '@mui/icons-material/Group';
import PlaceIcon from '@mui/icons-material/Place';
import PhotoIcon from '@mui/icons-material/Photo';
import CategoryIcon from '@mui/icons-material/Category';
import { UserList } from './users';
import { LocationList } from './locations';
import { PhotosList } from './photos';
import { CategoryList } from './categories';

const dataProvider = drfProvider('http://localhost:8000/api');

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
      <Resource
        name="users"
        list={UserList}
        icon={UserIcon}
      />
      <Resource
        name="locations"
        list={LocationList}
        icon={PlaceIcon}
      />
      <Resource
        name="photos"
        list={PhotosList}
        icon={PhotoIcon}
      />
      <Resource
        name="categories"
        list={CategoryList}
        icon={CategoryIcon}
      />
    </Admin>
  );
}

export default App;