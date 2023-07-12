//questioin_17//
var Guest = ["Ali", "shokat", "shaista", "alia", "ahmad", "shan"];
for (var i = 0; i < Guest.length; i++) {
    console.log(Guest[i] + "salam, Know i have just two person space for dinner");
}
do {
    console.log("sorry, i can't invite you for dinner " + Guest.pop());
} while (Guest.length > 2);
for (var i = 0; i < Guest.length; i++) {
    console.log(Guest[i] + " You are still invited to dinner");
}
do {
    console.log(Guest.pop());
} while (Guest.length > 0);
console.log(Guest + " The list is empty.");
