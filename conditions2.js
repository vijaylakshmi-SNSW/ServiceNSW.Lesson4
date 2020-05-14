
//Q2
function person (personProp ){
    for (let i = 0; i < personProp.name.length; i++) {
      let personWithX = personProp.name[i].toLowerCase();
       if (personWithX === 'x' || personProp.age > 30) {
         return true;
       }else{
           continue;
           
       }
 
    }
    
    return false;
      
 }
 
 // let personFunc = person({
 //     name : "Harxsha",
 //     age : 40
 // });
 
 let personFunc = person({
     name : "Harsha",
     age : 12 
 });
 
 console.log(personFunc);

//Q3.
// function checkexactNameAndAge(person,age, name) {
//     let equalAge = age == person.age ;           // let yes = age == person.age;
//     let notEqualName = name != person.name;         // let not = name !=person.name;

//     if(equalAge && notEqualName) {                  
//         return true;
    
//     }
//     else {
//         return false;
//     }
        
        
// }
// console.log(checkexactNameAndAge({name: "Luke", age: 23}, 23, "David"));
// //console.log(checkexactNameAndAge({name: "Luke", age: 23}, 23, "David"));

