for (let imdex = 0; imdex <= 10; imdex++) {
    const element = imdex;
    if (element == 3){
        // console.log("3 is best");
    }
    // console.log(element);
}

for (let i = 0; i <=10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and outer loop value:${i}`)
        // console.log(i + "*" + j + " = " + i*j);
    }
}

let array = ["flash", "batman", "superman"]
for (let index = 0; index < array.length; index++) { // if we do index <= array.length, then it will return undefined at last iteration (JS doesn't have IndexOutOfBoundsException)
    const element = array[index];
    // console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 3){
//         console.log("Detected 3");
//         break
//     }
//     console.log(`Value of i is: ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if (index == 3){
        console.log("Detected 3");
        continue
    }
    console.log(`Value of i is: ${index}`);
}