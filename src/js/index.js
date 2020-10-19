import Calculator from '../modules/Calculator';

; ((doc) => {

    // 获取计算器Node节点
    let elementCalculator = doc.querySelector('#Calculator');

    const init = () => {
        new Calculator(elementCalculator).init();
    }

    init();

})(document);