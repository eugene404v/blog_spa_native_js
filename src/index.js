import {HeaderComponent} from './components/header.component';
import {NavigationComponent} from './components/navigation.component';
import {CreateComponent} from './components/create.component';
import {FavoritesComponent} from './components/favorites.component';
import {PostsComponent} from './components/posts.component';
import {LoaderComponent} from './components/loader.component';

new HeaderComponent('header');

const navigation = new NavigationComponent('navigation');
const loader = new LoaderComponent('loader');
const create = new CreateComponent('create');
const favorites = new FavoritesComponent('favorite', {loader});
const posts = new PostsComponent('posts', {loader});


navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'favorite', component: favorites},
    {name: 'posts', component: posts}
]);