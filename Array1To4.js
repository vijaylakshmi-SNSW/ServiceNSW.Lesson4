// function people(person, equalAge, equalName)
// {
// if (person.age == equalAge && person.name != equalName); {
//     return true ;
// }
// //  else  {
// // return false ;
// //  }
// }

// let threePara = people({name: "Rex", age:5}, 10, "Rex");
// console.log(threePara);

let pets = [
    {
        name: "Rex",
        age: 4,
        ownerName: "Luke"
    }, {
        name: "Spot",
        age: 7,
        ownerName: "Jade"
    }, {
        name: "Scooby",
        age: 3,
        ownerName: "Shaggy"
    }, {
        name: "Lucky",
        age: 1,
        ownerName: "Luke"
    }, {
        name: "Sadie",
        age: 3,
        ownerName: "Daniel"
    }, {
        name: "Duke",
        age: 5,
        ownerName: "Sabine"
    }
];


// function petfinding(pet) {
//     if (pet.ownerName == "Shaggy")  {
//         return pet.name;
//     }
// }

// let newArray = pets.find(petfinding);

// console.log(newArray);
function findShaggysPet(pet) {
    return pet.ownerName == "Shaggy";
}

let shaggysPet = pets.find(findShaggysPet);
console.log(shaggysPet);