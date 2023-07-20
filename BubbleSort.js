const arr=[5,1,61,13,33,9];

const BubbleSort=(arr)=>{
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i;j++)
        {
            if(arr[j]>arr[j+1])
            {
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
}

BubbleSort(arr);
console.log(arr);