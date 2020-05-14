function people(person, equalAge, equalName)
{
if (person.age === equalAge && person.name != equalName) {
    return true ;
}
else  {
return false ;
 }
}

let threePara = people({name: "Rex", age:5}, 5, "Rome");
console.log(threePara);
