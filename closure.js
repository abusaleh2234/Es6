
function counter(){
    let n = 20

    return function(user){
        n = n+1
        console.log("counter value is",user, n);
        
    }
}

const joniCounter = counter()
joniCounter("joni")
joniCounter("joni")
joniCounter("joni")

const RaselCounter = counter()
RaselCounter("rasel")
RaselCounter("rasel")
RaselCounter("rasel")
joniCounter("joni")