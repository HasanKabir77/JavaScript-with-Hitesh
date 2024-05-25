function multiplyBy5(num){
    return num * 5;
}

multiplyBy5.power = 2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(userName, score){
    this.userName = userName;
    this.score = score
}

createUser.prototype.printMe = function(){
    console.log(`Score is : ${this.score}`);
}

createUser.prototype.increment = function(){
    this.score++
}

const chai = new createUser('Chai', 25)
const Tea = new createUser('Tea', 250)