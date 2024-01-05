// ***************************Question-1************************

// const allUsers = [
//   "anurag",
//   "Mithun",
//   "Alka",
//   "Prabir",
//   "Vinay",
//   "Shubham",
//   "Shivam",
//   "Farman",
// ];

// function isUserPresent(user){
//   if(allUsers.includes(user)){
//     console.log(`Yes, ${user} is a valid user.`);
//     return true;
//   }else {
//     console.log(`No, ${user} is not a valid user.`);
//     return true;
//   }
// }

// isUserPresent("Mithun");
// isUserPresent("Someone");

// ***************************Question-2**************************

// function calculateTotalCartValue(){
//   let totalValue = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     totalValue += arguments[i];
//   }
//   console.log(`The total cart value is ${totalValue}`);
//   return totalValue;
// }

// calculateTotalCartValue(125,20,30)


// ******************************Question-3*************************

// const students = [
//   {
//     name:"Mithun",
//     marks:95,
//   },
//   {
//     name:"Prabir",
//     marks:75,
//   },
//   {
//     name:"Alka",
//     marks:92,
//   },
//   {
//     name:"Shivam",
//     marks:70,
//   },
//   {
//     name:"Farman",
//     marks:99,
//   },
// ];

// const chekResults = (name) => {
//   for (let student of students){
//     if (student.name === name){
//       return student.marks>90
//       ? console.log(`Congratulation ${student.name}! You have cleared the exam.`)
//       : console.log(`Sorry ! You have not cleared the exam.`);
//     }
//   }
//   console.log("Invalid User !!!");
// };

// chekResults("Mithun");
// chekResults("Prabir");
// chekResults("Mithun S");

// **************************Question-4**********************

// const products = [
//   {name:"Laptop", price: 120000},
//   {name:"mobile", price: 70000},
//   {name:"Laptop Bag", price:20000},
//   {name:"Watch", price:20000},
//   {name:"Mobile Charger", price:1500},
// ];

// let maxProduct = {name:"", price: 0};
// let minProduct = {name:"", price: Number.MAX_VALUE};

// for(let product of products){
//   if(product.price>maxProduct.price){
//     maxProduct = product;
//   }
//   if(product.price<minProduct.price){
//     minProduct = product;
//   }
// }
// console.log(`The product with maximum amount is ${maxProduct.name} which is priced at Rs. ${maxProduct.price}`)
// console.log(`The product with minimum amount is ${minProduct.name} which is priced at Rs. ${minProduct.price}`)

// **************************Question-5************************

// const guests = ["Anurag","Mithun","Alka","prabir","Shivam","Farman"];
// console.log(guests.join(","));

// **************************Question-6************************

// const productDetails = {
//   name: "Apple 2020 MacBook Air Laptop",
//   price: 82000,
//   color: "Grey",
//   hardDisk: "256 GB",
// };

// console.log("Below are the product details.");
// for (let keys of Object.keys(productDetails)) {
//   console.log(`${keys} : ${productDetails[keys]}`);
// }

// **************************Question-7************************

// function generateotp() {
//   const min = 1000;
//   const max = 9999;
//   const otp = Math.floor(Math.random()*(max - min + 1)) + min;
//   return otp.toString();
// }
// console.log(`Here is your otp: ${generateotp()}`);


// **************************Question-8************************

function calculateRemainingDays(eventDate) {
    const currentDate = new Date();
    const eventDateTime = new Date(eventDate);

    const timeDifference = eventDateTime - currentDate;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysRemaining;
}

const eventDate = '2023-08-31'
console.log(calculateRemainingDays(eventDate));




// **************************Question-9************************

// function uniqueCharactersCheck(inputString) {
    //     const charSet = new Set();
    
//     for (const char of inputString) {
//         if (charSet.has(char)) {
//             console.log("The input string contains duplicates.");
//             return false;
//         }
//         charSet.add(char);
//     }
//     console.log("The input string contains only unique characters.");
//     return true;
// }

// uniqueCharactersCheck("mithun")

// uniqueCharactersCheck("anurag")


// **************************Question-10************************

function wordCounter(sentence) {
    const wordFrequencyMap = new Map();

    const words = sentence.split(/\s+/); // Split the sentence into words using whitespace as separator

    for (const word of words) {
        const cleanWord = word.toLowerCase().replace(',', ''); // Remove non-alphanumeric characters and convert to lowercase

        if (cleanWord.length > 0) {
            wordFrequencyMap.set(cleanWord, (wordFrequencyMap.get(cleanWord) || 0) + 1);
        }
    }

    return wordFrequencyMap;
}

const sentence = "please please submit your assignment on time, your assignments are important ";
const result = wordCounter(sentence);

console.log(result);





