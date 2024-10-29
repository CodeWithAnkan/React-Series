const user =  {
    username: "Ankan",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam";
// user.welcomeMessage()

//console.log(this);

/*
function chai(){
    let username = "Ankan"
    console.log(this.username);
}

// Therefore "this." bas object ke andar hi kaam kar raha hai, function ke andar nahi chalega aise.

chai();
*/

const chai = () => {
    let username = "Ankan"
    console.log(this.username);
}

// chai();

// const addTwo = (num1, num2) => {
//     sum = num1 + num2
//     return sum
// }

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "ankan"}); // only () is a return statement. If we use {} then we need to use 'return'.

console.log(addTwo(3, 4));