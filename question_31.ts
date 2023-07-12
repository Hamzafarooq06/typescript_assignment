//question_31//


let username=["ALi","Asad","Hamza"]
if (username.length===0) {
  console.log("The list of non user is non empty")
}
for (let i = 0; i < username.length; i++) {
  username.pop()
}
console.log("We need to find some users.")