const arr=[1006,5,1,61,13,33,99];
const insertionSort=(arr)=>{
    for(let i=1;i<arr.length;i++)
    {
        let key = arr[i];
        let j=i-1;
        while(j>=0 &&arr[j]>key){
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=key;
    }
}

insertionSort(arr);
console.log(arr);

