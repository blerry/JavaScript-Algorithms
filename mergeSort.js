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
//F Comment
//G Comment
//H Comment
//I Comment
//J Comment
//K Comment
//L Comment
//M Comment
//N Comment
//O Comment
//P Comment
//Q Comment
//R Comment
//S Comment
//T Comment
//U Comment
//V Comment
//X Comment
//Y Comment
//Z Comment
/*
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
*/