function usedebounce(cb,delay=1300){
let timerId;
    return (...args)=>{
        clearTimeout(timerId)
        timerId=setTimeout(() => {
            cb(...args)
        }, delay);
    }
}
export default usedebounce;