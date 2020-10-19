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

        // 定义数据状态
        this.data = {
            method: 'plus',
            fval: 0,
            sval: 0
        }
        this.activeIndex = 0;
    }

    // 初始化
    init() {
        this.render();
        this.bindEvent();
    }

    // 渲染组件
    render() {
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
        this.oButtons = this.oButtonGroup.querySelectorAll('button');

        // 事件监听
        this.oButtonGroup.addEventListener('click', this.onBtnClick.bind(this), false);
        this.oFirstInput.addEventListener('input', this.onInput.bind(this), false);
        this.oLastInput.addEventListener('input', this.onInput.bind(this), false);
    }

    // 点按按钮操作
    onBtnClick(e) {
        const event = e || window.event;
        const target = event.target || event.srcElement;
        const targetName = target.nodeName.toLowerCase();

        if (targetName === 'button') {
            const method = target.getAttribute('data-method');
            this.setMethod(method);
            this.setBtnActived(target);
            this.setResult(this.data.method, this.data.fVal, this.data.sVal);
        }
    }

    onInput(e) {
        const event = e || window.event;
        const target = event.target || event.srcElement;
        const val = target.value;
        const id = target.getAttribute('id');
        switch (id) {
            case 'FirstInput':
                this.data.fVal = digitalize(trimSpace(val));
                break;
            case 'LastInput':
                this.data.sVal = digitalize(trimSpace(val));
                break;
        }
        this.setResult(this.data.method, this.data.fVal, this.data.sVal);
    }

    setMethod(method) {
        this.data.method = method;
    }

    setBtnActived(target) {
        this.oButtons[this.activeIndex].className = '';
        this.activeIndex = [].indexOf.call(this.oButtons, target);
        this.oButtons[this.activeIndex].className = 'active';
    }

    setResult(method, fval, sval) {
        this.oResult.innerText = this[method](fval, sval);
    }

}