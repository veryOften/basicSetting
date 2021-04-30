export default class InputBuilder {
    withSeletor(selector) {
        this.selector = selector;
        return this;
    }

    withAction(action) {
        this.action = action;
        return this;
    }

    builder() {
        return new Input(this);
    }
}

class Input {
    constructor(prams) {
        this.selector = prams.selector;
        this.selector.addEventListener(prams.action, this._onEvent.bind(this));
    }

    setEventOnKeyup(eventFn) {
        this.keyupEventFn = eventFn;
    }

    _onEvent(event) {
        this.keyupEventFn && this.keyupEventFn(event);
    }
}
