const arr = [2,3,4,5,6];
// const output=[];

// for(let i=0;i<arr.length;i++){
//      const element = arr[i];
//      const result = element* element;
//      output.push(result);
// }
// console.log(output);

// arr.map(function(element,index,array){
//      console.log(element,index,array);
// })

//find square of an array using map

//  const square= arr.map(function(element){
//      return element*element;
// })
// console.log(square);

// const square = arr.map(x=>x*x);
// console.log(square);

// arr.filter(function(element){
//      if(element>5){
//           console.log(element);
//      }
// })

// const biggest = arr.filter(x=>x>4);
// console.log(biggest);

// arr.find(function(element){
//      if(element>4){
//           console.log(element);
//      }
// })

const find = arr.find(x=>x>4);
console.log(find);