const arr = [1,3,-24,-5,6,7,-18,9];
// for(let i=0; i<arr.length;i++){
//      if(arr[i]>6){
//           break;
//      }
//      console.log(arr[i]);
// }

for(let i=0; i<arr.length;i++){
     if(arr[i]<0){
          continue;
     }
     console.log(arr[i]);
}