import Button from './Button/index.js';
import View from './View/index.js';

class Todo {
    constructor() {
        this._addBtn = document.querySelector('.todo-add');
        this._deleteBtn = document.querySelectorAll('.todo-delete');
        this._updateBtn = document.querySelectorAll('.todo-update');
        this._bindEventAddButton();
    }

    _bindEventAddButton() {
        const button = new Button()
            .withSeletor(this._addBtn)
            .withAction('click')
            .builder();
        button.setEventOnclick(this._updateView.bind(this));
    }

    _updateView(event) {
        console.log(event);
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    new Todo();
});
