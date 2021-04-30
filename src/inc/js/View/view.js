export default class ViewBuilder {
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
        this.htmlString = '';
    }

    setHtmlString(htmlString) {
        const template = document.createElement('template');
        template.innerHTML = htmlString;
        this.htmlString = template.content.firstChild;
    }

    updateHtmlStirng(options) {
        const { parents, location } = options;
        switch (location) {
            case Location.APPEND:
                parents.appendChild(this.htmlString);
                break;

            default:
                break;
        }
    }
}
