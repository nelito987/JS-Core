/**
 * Created by Neli on 6.7.2017 г..
 */
class Player{
    constructor(nickName){
        this.nickName = nickName;
        this.scoreList = [];
    }

    addScore(score) {
        if(!isNaN(score) && score != null && score != undefined){
            this.scoreList.push(Number(score));
            this.scoreList.sort((a,b) => b-a);
        }
        return this;
    }

    get scoreCount(){
        return this.scoreList.length;
    }

    get highestScore(){
        return this.scoreList[0];
        //return Math.max(...this.scoreList);
    }

    get topFiveScore (){
        return this.scoreList.slice(0,5);
    }

    toString(){
        return `${this.nickName}: [${this.scoreList}]`;
    }
}