export const myFlatten = (array) => {
    let arr = [];
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] instanceof Array) {
            arr = arr.concat(myFlatten(array[i]));
        } else {
            arr.push(array[i]);
        }
    }
    return arr;
}