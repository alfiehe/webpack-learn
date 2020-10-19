import compute from '../lib/compute';
import { trimSpace, digitalize } from '../utils/tools';

@compute

export default class Calculator {
    constructor(el) {
        this.name = 'Calculator';
        this.oButtonGroup = el.querySelector('#ButtonGroup');
        this.oFirstInput = el.querySelector('#FirstInput');
        this.oLastInput = el.querySelector('#LastInput');
        this.oResult = el.querySelector('#Result');
    }

    // 绑定事件
    bindEvent() {
        this.oButtonGroup.addEventListener('click', this.onBtnClick.bind(this), false);
    }

    // 点按按钮事件
    onBtnClick(e) {
        const event = e || window.event;
        const target = event.target || event.srcElement;
        const targetName = target.nodeName.toLowerCase();

        if (targetName === 'button') {
            const method = target.getAttribute('data-method');
            const fValue = digitalize(trimSpace(this.oFirstInput.value));
            const sValue = digitalize(trimSpace(this.oLastInput.value));
            this.setResult(method, fValue, sValue);
        }
    }

    setResult(method, fval, sval) {
        this.oResult.innerText = this[method](fval, sval);
    }

    // 初始化
    init() {
        this.bindEvent();
    }
}