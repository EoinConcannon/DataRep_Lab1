//ctrl k follow up with ctrl c (FOR COMMENTS)
//shift, alt, f (FORMAT CODE)

let myVar = (myVar, num1, num2) => {
    console.log("Data Representation & Querying"); //part a
    console.log(myVar); //part b
    console.log(num1 + num2); //part c
}

myVar(8, 123.61, 47.15);

//part d
const ages = [25, 31, 42, 77];

let ageMap = ages.map((age) => {
    //goes through the array and multiplies numbers under 70 by 2
    if (age < 70) {
        return age * 2;
    } else {
        return age;
    }
})

console.log(ageMap);