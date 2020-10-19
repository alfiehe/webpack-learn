import compute from '../lib/compute';
import { trimSpace, digitalize } from '../utils/tools';

// 导入组件
import ResultComponent from '../components/Result';
import InputGroupComponent from '../components/InputGroup';
import BtnGroupComponent from '../components/BtnGroup';

// 使用装饰器
@compute

export default class Calculator {
    constructor(el) {
        this.name = 'Calculator';
        this.el = el;

        // 实例化组件
        this.resultComponent = new ResultComponent();
        this.inputGroupComponent = new InputGroupComponent();
        this.btnGroupComponent = new BtnGroupComponent();
    }

    // 初始化
    init() {
        this.render();
        this.bindEvent();
    }

    render() {
        // 渲染组件
        const oFrag = document.createDocumentFragment();
        oFrag.appendChild(this.resultComponent.tpl());
        oFrag.appendChild(this.inputGroupComponent.tpl());
        oFrag.appendChild(this.btnGroupComponent.tpl());
        this.el.appendChild(oFrag);
    }

    // 绑定事件
    bindEvent() {
        // 获取组件Node
        const el = this.el;
        this.oButtonGroup = el.querySelector('#ButtonGroup');
        this.oFirstInput = el.querySelector('#FirstInput');
        this.oLastInput = el.querySelector('#LastInput');
        this.oResult = el.querySelector('#Result');

        // 监听按钮事件
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

}