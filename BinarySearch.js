const arr=[4,11,51,62,104];
const check=62;

const binarySearch=(arr,ele)=>{
    let start=0,end=arr.length-1;
    while(start<=end){
        mid=Math.floor((start+end)/2);
        if(arr[mid]==ele)   return true;
        if(ele>arr[mid])    start=mid+1;
        if(ele<arr[mid])    end=mid-1;
    }
    return false;
}

binarySearch(arr,check)?console.log("Found"):console.log("Not Found");