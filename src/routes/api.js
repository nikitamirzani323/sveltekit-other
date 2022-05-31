export function get(request){
    console.log(request.params)
    return {
       body:['a','b','c']
    }
}

export async function post(event){
    const object =  await event.request.formData();
    const entries = [...object];
    return {
        body:{hello:'world',data:Object.fromEntries(object),data2:entries}
    }
}
export function put(){
}
export function del(){
}