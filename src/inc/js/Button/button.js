export default class ButtonBuilder {
    withSeletor(selector) {
        this.selector = selector;
        return this;
    }

    withAction(action) {
        this.action = action;
        return this;
    }

    builder() {
        return new Button(this);
    }
}

class Button {
    constructor(prams) {
        this.selector = prams.selector;
        this.selector.addEventListener(prams.action, this._onEvent.bind(this));
    }

    setEventOnclick(eventFn) {
        this.clickEventFn = eventFn;
    }

    _onEvent(event) {
        this.clickEventFn && this.clickEventFn(event);
    }
}
