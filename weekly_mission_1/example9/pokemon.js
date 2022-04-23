module.exports = function Pokemon(name){
    this.name = name
    this.sayHello = function sayHello() {
        console.log("Hello")
    }
    this.sayMessage = function(message) {
        console.log(message);
    }
}