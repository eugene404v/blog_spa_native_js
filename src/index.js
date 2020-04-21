import {HeaderComponent} from './components/header.component';
import {NavigationComponent} from './components/navigation.component';
import {CreateComponent} from './components/create.component';
import {FavoritesComponent} from './components/favorites.component';
import {PostsComponent} from './components/posts.component';

new HeaderComponent('header');

const navigation = new NavigationComponent('navigation');
const create = new CreateComponent('create');
const favorites = new FavoritesComponent('favorite');
const posts = new PostsComponent('posts');

navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'favorites', component: favorites},
    {name: 'posts', component: posts}
]);