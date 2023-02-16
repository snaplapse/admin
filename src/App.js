import React from 'react';
import { Admin, Resource } from 'react-admin';
import drfProvider from 'ra-data-django-rest-framework';
import authProvider from './authProvider';
import Dashboard from './Dashboard';
import UserIcon from '@mui/icons-material/Group';
import { UserList } from './users';

const dataProvider = drfProvider('http://localhost:8000/api');
console.log(dataProvider)

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
      <Resource
        name="users"
        list={UserList}
        icon={UserIcon}
      />
    </Admin>
  );
}

export default App;