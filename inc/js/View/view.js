export default class ViewBuilder {
    withHtml(htmlString) {
        this.htmlString = htmlString;
        return this;
    }

    builder() {
        return new View(this);
    }
}

const Location = Object.freeze({
    APPEND: 'APPEND',
    PREPEND: 'PREPEND',
    BEFORE: 'BEFORE',
    AFTER: 'AFTER',
});

class View {
    constructor(prams) {
        this.htmlString = prams.htmlString;
    }

    updateHtmlStirng(options) {
        const { standard, location } = options;
        switch (location) {
            case Location.APPEND:
                standard.innerHTML = this.htmlString;
                break;

            default:
                break;
        }
    }
}
