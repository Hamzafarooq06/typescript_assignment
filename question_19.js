//question_19//
var Guest = ["Hamza", "Hassan", "Ali", "Wahaj"];
for (var i = 0; i < Guest.length; i++) {
    console.log(Guest[i] + " I would like to inform you that our dinner table is bigger.");
}
Guest.unshift("ALia");
console.log(Guest);
for (var i = 0; i < Guest.length; i++) {
    console.log(Guest[i] + "you are invited for dinner");
}
console.log(Guest.length);
