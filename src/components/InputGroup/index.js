import tpl from './index.tpl';

export default class InputGroupComponent {
    constructor() {
        this.name = 'InputGroupComponent';
    }

    tpl() {
        const oDiv = document.createElement('div');
        oDiv.innerHTML = tpl();
        return oDiv;
    }
}