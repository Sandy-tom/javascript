
var mj = {
name :"sa",
l_name : "kumar",
number : 56576,
age : 29,
location : "cahennai",
swap  :function(){   // we can insert the function in object file 
       var i = 0;
       i = i + this.age;   // this refer the owner of the object 
       return i;
}
};

console.log(mj.age);
console.log(mj.swap());// call the function in the object by the name of the object call function 
