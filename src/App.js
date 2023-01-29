import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import Dashboard from './Dashboard';
import UserIcon from '@mui/icons-material/Group';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
      <Resource
        name="users"
        list={ListGuesser}
        icon={UserIcon}
      />
    </Admin>
  );
}

export default App;