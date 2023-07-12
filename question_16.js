//question16//
// let Guest=['Hamza','Hassan','Wahaj','Ali'];
// console.log('Original guests');
// for(let i=0;i<Guest.length; i++){
// console.log(Guest[i]);
// }
// console.log('Table is bigger so we add more people');
// Guest=["Faizan", ...Guest];
// let middleIndex = Math.floor(Guest.length / 2);
// Guest.splice(middleIndex, 0, "Ahmad"); // Add a new guest to the middle
// Guest=[...Guest,'Zain'];
// for(let i=0;i<Guest.length;i++){
// console.log('I want to invite',Guest[i], 'for the dinner.');
// }
var Guest = ["Hamza", "Hassan", "Ali", "Wahaj"];
for (var i = 0; i < Guest.length; i++) {
    console.log(Guest[i] + " I would like to inform you that our dinner table is bigger.");
}
Guest.unshift("ALia");
console.log(Guest);
for (var i = 0; i < Guest.length; i++) {
    console.log(Guest[i] + "you are invited for dinner");
}
