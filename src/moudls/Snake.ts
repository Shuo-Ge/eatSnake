class Snake {
    // 表示蛇头的元素
    head: HTMLElement
    // 蛇的身体
    bodies: HTMLCollection

    // 蛇的容器、
    element: HTMLElement
    constructor() {
        this.element = document.getElementById("snake")!
        this.head = document.querySelector('#snake>div')!
        this.bodies = this.element.getElementsByTagName('div')

    }
    // 获取蛇的坐标
    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    set X(value: number) {
        if (this.X === value) return

        // 判断是否撞墙
        if (value < 0 || value > 290) {
            // 撞墙了
            throw new Error("蛇撞墙了")
        }

        // 向左走不能向右走
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            // console.log("水平发生掉头");
            if (value > this.X) {
                value = this.X - 10
            } else {
                value = this.X + 10
            }

        }

        // 移动身体
        this.moveBody()

        this.head.style.left = value + 'px'

        // 检查有没有撞到自己
        this.checkHeadBody()
    }

    set Y(value: number) {
        if (this.Y === value) return
        if (value < 0 || value > 290) {
            // 撞墙了
            throw new Error("蛇撞墙了")
        }

        // 向上走不能向下走
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            // console.log("水平发生掉头");
            if (value > this.Y) {
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }

        }

        // 移动身体
        this.moveBody()

        this.head.style.top = value + 'px'

        // 检查有没有撞到自己
        this.checkHeadBody()
    }

    // 蛇增加身体的方法
    addBody() {
        // 想element添加一个div
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    // 身体移动的方法
    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前边身体的位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            // 将值设置到当前的身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    // 检查头和身体是否相撞
    checkHeadBody() {
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error("撞到了")
            }
        }
    }
}

export default Snake