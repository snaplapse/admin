import React from 'react';
import { Admin, Resource } from 'react-admin';
import drfProvider from 'ra-data-django-rest-framework';
import authProvider from './authProvider';
import Dashboard from './Dashboard';
import UserIcon from '@mui/icons-material/Group';
import PlaceIcon from '@mui/icons-material/Place';
import PhotoIcon from '@mui/icons-material/Photo';
import CategoryIcon from '@mui/icons-material/Category';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlagIcon from '@mui/icons-material/Flag';
import { UserList } from './users';
import { LocationList } from './locations';
import { PhotosList } from './photos';
import { CategoryList } from './categories';
import { LikeList } from './likes';
import { FlagList } from './flags';

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
      <Resource
        name="likes"
        list={LikeList}
        icon={FavoriteIcon}
      />
      <Resource
        name="flags"
        list={FlagList}
        icon={FlagIcon}
      />
    </Admin>
  );
}

export default App;