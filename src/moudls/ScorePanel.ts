
// 定义记分牌的类
class ScorePanel {
    score = 0;
    level = 1;

    // 分数和等级所在的元素
    scoreEle: HTMLElement;
    leveEle: HTMLElement;

    // 设置一个变量限制等级
    maxLevel: number
    // 设置一个变量多少分升级
    upScore: number
    constructor(maxLevel: number = 10, upScore: number = 2) {
        this.scoreEle = document.getElementById('score')!
        this.leveEle = document.getElementById('level')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 设置一个加分的方法
    addScore() {
        this.scoreEle.innerHTML = ++this.score + ''
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }

    // 设置一个等级提升的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.leveEle.innerHTML = ++this.level + ''
        }
    }
}
// 测试代码
// const scorePanel = new ScorePanel()
// for (let i = 0; i < 100; i++) {
//     scorePanel.addScore()
// }
export default ScorePanel