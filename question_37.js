//question_37//
function make_shirt(Size, message) {
    if (Size === void 0) { Size = "Large"; }
    if (message === void 0) { message = "i love typescript"; }
    console.log("The size of shirt is" + Size + "and message is" + message);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Pakistan Zindabad");
