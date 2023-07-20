const arr=[1006,5,1,61,13,33,99];

const selSort=(arr)=>{
    for(let i=0; i<arr.length-1; i++){
        let min=arr[i];
        let minIndex=i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<min){
                min=arr[j];
                minIndex=j;
            } 
        }
        if(minIndex!=i)
        {
            let temp=arr[i];
            arr[i]=arr[minIndex];
            arr[minIndex]=temp;
        }
    }
}
selSort(arr);
console.log(arr);