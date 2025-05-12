// If Operator
// function checkAge(age) {
//     if (18 <= age) {
//         return 'You are an adult';
//     }
// }
//
// const age = 20;
// checkAge(age);


// IF Else
// function checkStorage(available, ordered) {
//     if (available >= ordered) {
//         return 'Order is processed, our manager will contact you';
//     } else {
//         return 'Not enough goods in stock!';
//     }
// }

// checkStorage(100, 50);

// Else if

// function checkStorage2(available, ordered) {
//     if (ordered === 0) {
//         return 'There are no products in the order!';
//     } else if (available >= ordered) {
//         return 'The order is accepted, our manager will contact you';
//     } else {
//         return 'Your order is too large, there are not enough items in stock!';
//     }
// }

// checkStorage(100, 50);


// Ternary Operator
// function checkPassword(password) {
//     const correctPassword = 'jqueryismyjam';
//
//     return password === correctPassword ? 'Access granted' : 'Access denied, wrong password!';
// }


// Switch - Case
// function getSubscriptionPrice(type) {
//     switch (type) {
//         case 'starter':
//             return 0;
//         case 'professional':
//             return 20;
//         case 'organization':
//             return 50;
//         default:
//             return 'Invalid subscription type!';
//     }
// }

// function isNumberInRange(start, end, number) {
//     return number > start && number <= end;
// }

// isNumberInRange(10, 30, 17);

// function checkAccess(subType) {
//     return subType === 'pro' || subType === 'vip';
// }

//checkAccess('free');

// function toggleModalVisibility(isVisible) {
//     return isVisible != true;
// }

//toggleModalVisibility(false);

// String Methods - slice
// function getSubstring(string, length) {
//     return string.slice(length);
// }
//
// const x = getSubstring('Hello world', 6);

// String Methods - UpperCase & LowerCase
// function normalizeInput(input, to) {
//     return to !== 'upper' ? input.toLowerCase() : input.toUpperCase();
// }
//
// const x = normalizeInput("This ISN'T SpaM", "lower");

// String Methods - includes
// function checkForName(fullName, firstName) {
//     return fullName.toLowerCase().includes(firstName.toLowerCase());
// }
//
//
// const x = checkForName("Jason Neis", "JAson");

// String Methods - startsWith & endsWith
// function checkFileExtension(fileName, ext) {
//     return fileName.toLowerCase().endsWith(ext.toLowerCase()) ? "File extension matches" : "File extension does not match";
// }
//
// const x = checkFileExtension("sytles.css", ".css");

// String Methods - indeksOf
// function getFileName(file) {
//     if (file.indexOf(".") === -1) {
//         return file;
//     } else {
//         return file.slice(0, file.indexOf("."));
//     }
// }
//
// const x = getFileName("styles");

// String Methods - trim
// function createFileName(name, ext) {
//     return name.trim().toLowerCase() + '.' + ext.trim().toLowerCase();
// }
//
// const x = createFileName(" order  ", "txt");

// Loops - While
// function calculateTotal(number) {
//     let total = 0;
//     let i = 1;
//     while (i <= number) {
//         total += i;
//         i++;
//     }
//     return total;
// }
//
// const x = calculateTotal(3);

// Loops - For
// function calculateTotal(number) {
//     let total = 0;
//     for (let i = 0; i <= number; i++) {
//         total += i;
//     }
//     return total;
// }
//
// const x = calculateTotal(18);

// Loops -
// function calculateEvenTotal(number) {
//     let total = 0;
//     if (number % 2 === 0) {
//         for (let i = 0; i <= number; i += 2) {
//             total += i;
//         }
//     } else {
//         for (let i = 0; i <= (number - 1); i += 2) {
//             total += i;
//         }
//     }
//     return total;
// }
//
// const x = calculateEvenTotal(6);

// Loops - Break
// const start = 6;
// const end = 17;
// let number;
// for (number = start; number <= end; number++) {
//     if (number % 5 === 0) {
//         console.log(number);
//         break;
//     }
// }

function findNumber(start, end, divisor) {
    for (let i = start; i <= end; i++) {
        if (i % divisor === 0) {
            return i;
        }
    }
}

const x = findNumber(8, 17, 3);
console.log(x);
