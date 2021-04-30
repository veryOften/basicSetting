import Button from './Button/index.js';
import View from './View/index.js';
import Input from './Input/index.js';
// import { v4 as uuidv4 } from 'uuid';

function makeId() {
    let id = 0;
    const result = {
        getValue() {
            id += 1;
            return id;
        },
    };
    return result;
}

class Todo {
    constructor() {
        this._view = new View().builder();

        this._todoWrapper = document.querySelector('.todo__box');
        this._addBtn = document.querySelector('.todo-add');
        this._textInput = document.querySelector('.todo-text');
        this._deleteBtn = document.querySelectorAll('.todo-delete');
        this._updateBtn = document.querySelectorAll('.todo-update');
        this._bindEventAddButton();
        this._bindEventTextInput();
        this._makeId = makeId();
        this._textInput.focus();
    }

    _bindEventTextInput() {
        const input = new Input()
            .withSeletor(this._textInput)
            .withAction('keyup')
            .builder();
        input.setEventOnKeyup(this._updateText.bind(this));
    }

    _updateText(event) {
        this._textValue = event.target.value;
    }

    _bindEventAddButton() {
        const button = new Button()
            .withSeletor(this._addBtn)
            .withAction('click')
            .builder();
        button.setEventOnclick(this._updateView.bind(this));
    }

    _updateView(event) {
        if (!this._textValue) {
            alert('Please, write todo');
            return;
        }

        this._view.setHtmlString(this._makeLayout(this._textValue));
        this._view.updateHtmlStirng({
            parents: this._todoWrapper,
            location: 'APPEND',
        });

        this._clearInputText();
    }

    _clearInputText() {
        this._textInput.value = '';
        this._textInput.focus();
    }

    _makeLayout(textValue) {
        return `<li id=${this._makeId.getValue()}>
                    <div>
                        <input type="checkbox"/>
                        <span>${textValue}</span>
                    </div>
                    <div class="todo__buttonWrapper">
                        <button class="todo-delete">Delete</button>
                        <button class="todo-update">Update</button>
                    </div>
                </li>`;
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    new Todo();
});
