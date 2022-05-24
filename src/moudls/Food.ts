// 定义食物类
class Food {
    // 定义一个属性表示食物对应的元素
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('food')!
    }

    // 定义一个食物x轴坐标的方法
    get X() {
        return this.element.offsetLeft
    }

    get Y() {
        return this.element.offsetTop
    }

    // 修改食物位置
    change() {
        // 生成随机位置
        // 食物最小0最大290
        // 蛇移动一次就是一格
        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10
        this.element.style.left = top + 'px'
        this.element.style.top = left + 'px'
    }
}
export default Food