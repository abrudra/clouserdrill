const  {limitFunctionCallCount} = require('../Problem/limit')

function cb(){
    console.log('invoked Callback')
}


let nTimes = limitFunctionCallCount(cb, 3);
nTimes.invoke();
nTimes.invoke();
nTimes.invoke();
nTimes.invoke();