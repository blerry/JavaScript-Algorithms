function partition(arr,start,end){
    const pivot = arr[Math.floor((start+end)/2)]; //middle
    while(start <= end){ //while not equal
        while(arr[start] < pivot){ //increase pointer
            start++;
        }
        while(arr[end] > pivot){ //decrease pointer
            end--;
        }
        if(start<=end){ //swap
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
        return start;
    }
}

function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        const index = partition(arr, start, end);
        quickSort(arr, start, index - 1);
        quickSort(arr, index, end);
    }
    return arr;
}