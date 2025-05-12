/*
const grade = 85;

if(grade >= 90) {
    console.log('Perfect grade');
} else if (grade >= 80) {
    console.log('Good grade');
} else if (grade >= 70) {
    console.log('Satisfactorily');
} else {
    console.log('Unsatisfactorily');
}

function gradeCalculator(grade) {
    if (grade > 100 || grade < 0) {
        return "Unknown Grade";
    }
    if(grade >= 90) {
        console.log('Perfect grade');
    } else if (grade >= 80) {

        console.log('Good grade');
    } else if (grade >= 70) {
        console.log('Satisfactorily');
    } else {
        console.log('Unsatisfactorily');
    }
}

console.log(gradeCalculator(15));

// tern.... kullanımı

const grade = 95;

const result = grade >= 90 ? 'Perfect' : grade >= 80 ? 'Good' : grade >= 70 ? 'Satisfactorily' : 'Unsatisfactorily';

console.log(result);
*/

const grade = 35;
const age = 18;

const result = grade > 30 && age >= 18 && 'Evet';
if (result) {
    console.log(`Success`);
} else {
    console.log(`Fail`);
}
console.log(result);

//const result = grade > 30 || age < 18 || 'Evet';
//console.log(result);


/*
function incrementNumber() {
let counter = 0
    counter++;
}

        incrementNumber();

if (counter == 0) {
    counter ++;
}
counter++;
console.log(counter);

let type;
const age = 20;

if (age >= 18) {
    type = 'adult'
} else {
    type = 'child'
}
console.log(type)
*/