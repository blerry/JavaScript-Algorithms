
// quick sort
const quickSort = (array) => {
    if(array.length === 1){ // edge case
        return array;
    }
    const pivot = array[array.length-1]; //Last element is pivot
    for(let i = 0; i < array.length - 1; i++){ //we dont want pivot # as part of for loop
        const leftArr = [];
        const rightArr = [];
        if(array[i] < pivot){
            leftArr.push(array[i]);
        } else{
            rightArr.push(array[i]);
        }
    } //
    return array;
}


console.log(0);