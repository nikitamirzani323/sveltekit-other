export function get(request){
    return {
        body:{hello:'world'}
    }
}
export function post(request){
    return {
        body:{hello:'world',request:request.body}
    }
}
export function put(){
    return {
        body:{hello:'world'}
    }
}
export function del(){
    return {
        body:{hello:'world'}
    }
}