function merge(arr1,arr2){
    let merged = [];
    let index1 = 0;
    let index2 = 0;
    while(index1 < arr1.length && index2 < arr2.length){
        if(arr1[index1] < arr2[index2]){
            merged.push(arr1[index1]);
            index1++;
        } else{
            merged.push(arr2[index2])
            index2++;
        }
    }
    while(index1 < arr1.length){
        merged.push(arr1[index1]);
        index1++;
    }
    while(index2 < arr2.length){
        merged.push(arr2[index2]);
        index2++;
    }
    return merged;
}

function mergeSort(arr){
    if(arr.length < 2) return arr;
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

//A Comment
//B Comment
//C Comment
//D Comment
//E Comment