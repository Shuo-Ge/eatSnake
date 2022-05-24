// 引入其他类
import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'
// 游戏类
class GameControl {
    // 定义三个属性
    snake: Snake
    food: Food
    scorePanel: ScorePanel

    // 创建一个属性来储存蛇的移动方向
    direction: string = 'ArrowRight'
    // 游戏结束
    isLive: boolean = true
    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }

    // 游戏初始化，游戏开始
    init() {
        // 绑定键盘按下的事件
        document.addEventListener('keydown', this.keyDownHandle.bind(this))
        this.run()
    }

    // 键盘按下的函数
    keyDownHandle(event: KeyboardEvent) {
        console.log(event.key);
        this.direction = event.key
    }
    // 创建蛇控制移动的方法
    run() {
        let X = this.snake.X
        let Y = this.snake.Y
        switch (this.direction) {
            case "ArrowUp": Y -= 10
                break;
            case "ArrowDown": Y += 10
                break;
            case "ArrowLeft": X -= 10
                break;
            case "ArrowRight": X += 10
                break;
        }

        // 检查蛇是否吃到食物
        this.checkEat(X, Y)




        // 修改蛇的xy
        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (error: any) {
            alert(error.message)
            this.isLive = false
        }
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level) * 30)
    }

    // 定义一个方法检查是否吃到食物
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.change()
            // 分数增加
            this.scorePanel.addScore()
            // 蛇要增加一节
            this.snake.addBody()
        }
    }
}


export default GameControl