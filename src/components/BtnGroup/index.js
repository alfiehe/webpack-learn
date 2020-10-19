import tpl from './index.tpl';
import './index.scss';

export default class BtnGroupComponent {
    constructor() {
        this.name = 'BtnGroupComponent';
    }

    tpl() {
        const oDiv = document.createElement('div');
        oDiv.id = 'ButtonGroup';
        oDiv.innerHTML = tpl();
        return oDiv;
    }
}