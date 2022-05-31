export async function post(event){
    const object =  await event.request.json();
    const nama = object.nama
    const nik = object.nik
    const result = nama+"-"+nik
    return {
        body:{hello:'world',data:result}
    }
}