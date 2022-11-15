function limitFunctionCallCount(cb, n) {
    // Should return a function that invokes `cb`.
    // The returned function should only allow `cb` to be invoked `n` times.
    // Returning null is acceptable if cb can't be returned

    
    function invoke(){          
        if(n-- > 0){
            return cb();    
        }else{
            console.log(`CallBack Already Call ${n} times`)
        }
        
    }
    return {invoke}
}

module.exports = {limitFunctionCallCount}