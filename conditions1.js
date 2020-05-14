function house(floor, ceiling, num) {
        if ((num < ceiling) && (num > floor)) {
            return true;
        }

else {
    return false;
}
}
let Answer = house(25, 35, 20);
console.log(Answer);
