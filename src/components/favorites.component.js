import {Component} from '../core/component';
import { apiService } from '../services/api.service';
import {renderPost} from '../templates/post.template';

export class FavoritesComponent extends Component {
    constructor(id, {loader}) {
        super(id);
    }

    init() {
        this.$el.addEventListener('click', linkClickHandler.bind(this));
    }

    onShow() {
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        const html = renderList(favorites);
        this.$el.innerHTML = html;
    }
}

async function linkClickHandler(event) {
    event.preventDefault();
    if (event.target.classList.contains('js-link')) {
        const postId = event.target.textContent;
        //this.loader.show();
        const post = await apiService.fetchPostById(postId);
        //this.loader.hide();
        this.$el.innerHTML = renderPost(post, {withButton: false});
    }
}

function renderList(list = []) {
    if (list.length) {
        return `
        <ul>
            ${list.map(item => `<li><a href="#" class="js-link">${item}</a></li>`).join(" ")}
        </ul>
        `;
    } 
    return `<p class="center">Вы пока ничего не добавили</p>`;
    
}

