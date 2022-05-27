export function get(request){
    console.log(request.params)
    const numberword = Number(request.params.numberWords)
    console.log(numberword)
    return {
       body:['a','b',numberword]
    }
}