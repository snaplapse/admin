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
import TagIcon from '@mui/icons-material/Tag';
import { UserList } from './Lists/users';
import { LocationList } from './Lists/locations';
import { PhotosList } from './Lists/photos';
import { CategoryList } from './Lists/categories';
import { LikeList } from './Lists/likes';
import { FlagList } from './Lists/flags';
import { TagList } from './Lists/tags';

const dataProvider = drfProvider('https://snaplapse.herokuapp.com/api');

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
        name="photos/prefixed"
        options={{ label: 'Photos' }}
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
      <Resource
        name="tags"
        list={TagList}
        icon={TagIcon}
      />
    </Admin>
  );
}

export default App;