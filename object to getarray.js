const  student = [
        {id:10, name:"faisal"},
        {id:30, name:"sakibul"},
        {id:50, name:"rahim"},
        { id:60, name: "shamim"}
];
//console.log(student);
// const names = [];
// for(let i=0;i<student.length;i++){
//      const element = student[i];
//      const studentName =  element.name;
//      names.push(studentName);
// }
// console.log(names);

//apply map to find name and id 

// const names = student.map(element => element.name);
// console.log(names);
// const names = student.map(element => element.id);
// console.log(names);
// const names = student.filter(element => element.id >30);
// console.log(names);
const names = student.find(element => element.id>30);
console.log(names);