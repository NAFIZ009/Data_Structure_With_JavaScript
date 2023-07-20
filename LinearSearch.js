const arr=[4,12,55,62,54,11];
const check=-1;

const linearSearch=(array,ele)=>{
    for(i=0; i<array.length; i++)
        {
            if(array[i]==ele) return true;
        }
    return false;    
}

linearSearch(arr,check)?console.log("Found"):console.log("Not Found");
