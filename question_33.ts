//Store the numbers 1 through 9 in a array.

//loop through the array.
//Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
//7th 8th 9th", and each result should be on a separate line.

let number= [1,2,3,4,5,6,7,8,9]
for (let i = 0; i < number.length; i++) {
    let num=number[i]
if (num===1) {
    console.log("1st")
}else if (num===2) {
    console.log("2nd")
} 
else if (num===3) {
    console.log("3rd")
}
else if (num===4) {
    console.log("4th")
   }
      else if (num===5) {
        console.log("5th")
           }
                else if (num===6) {
                  console.log("6th")
                }
            else if (num===7) {
            console.log("7th")
        }
                else if (num===8) {
                    console.log("8th")
                }
                    else if (num===9) {
                        console.log("9th")
                        }
                    }