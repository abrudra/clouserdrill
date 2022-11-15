function counterFactory() {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.

    let counter = 100;

    function increment(){
        return ++counter;
    }

    function decrement(){
        return --counter
    }

    return {
        increment,
        decrement
    }

}

const myFun = counterFactory();

module.exports = {counterFactory};