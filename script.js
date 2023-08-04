let myAlphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "$",
    "*",
    "/",
    "-",
    "+",
  ];

  function lenghtArray(myAlphabet){
    const length = myAlphabet.length
    console.log('la longeur du tableau est ', length)
  }

  lenghtArray(myAlphabet)


// exo number 2

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];

for (let i = 0; i < planets.length; i++) {
  console.log(`Index ${i}: ${planets[i]}`);
}

// exo number 3

someDataTypes = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']

for (let i = 0; i < someDataTypes.length; i++) {
    console.log(`Index ${i}: ${typeof(someDataTypes[i])}`);
  }

  // exo number 4

  randomArray = [ ]

  for (let i = 0; i < myAlphabet.length ; i++) {
    randomArray.push(myAlphabet[i]);
  }
  console.log(randomArray)

//   exo number 5

console.log('exo 5 -------------------------')


let furnitures = ['Table', 'Chairs','Couch'];


for (let i = 0; i < furnitures.length; i++) {
    let char = furnitures[i].split('')
    char.forEach((chr) => {
        console.log(chr)
    });
  }

//   exo number 6

console.log('exo 6 -------------------------')

let values1= ["Apple", 1, false, "2"];
let values2 = [`5`, "Fries", 2 , true];
let values3 = ["Mars", "Strawberry", 9];

let tableau1 = []
function newTable(values1, values2, values3) {
    const tableauFusionne = values1.concat(values2);
    console.log(tableauFusionne)
    for (let i = 0; i < tableauFusionne.length; i++) {
         if( typeof tableauFusionne[i]  === 'string'){
            // tableauFusionne.splice(i, i);
            tableau1.push(tableauFusionne[i])
            console.log('-----------------------exo06', tableau1)
         }
         console.log(tableauFusionne[i])
    
      }    

}

newTable(values1, values2, values3)




function newTabb(values1, values2, values3) {
    const tableauFusionne = values1.concat(values2);
    console.log('exo 6 PART TWO--------------', tableauFusionne)
    tableauFusionne.filter((tab) => tab === String)
    console.log('exo 6 PART TWO--------------')
    return tableauFusionne
}

newTabb(values1, values2, values3)


console.log('exo 7 -------------------------')


let studentCoursesA = ['Math', 'English', 'Programming', 'hello world'];
let studentCoursesB = ['Geography', 'Spanish', 'Programming', 'hello world'];


function filterTab(studentCoursesA, studentCoursesB){

    const tab = values1.concat(studentCoursesA, studentCoursesB);

    let commonCourses = studentCoursesA.filter(course => studentCoursesB.includes(course));

    console.log(commonCourses)

}

filterTab(studentCoursesA, studentCoursesB)


const newtabs = []

function filterFor(studentCoursesA, studentCoursesB){

    for (let i = 0; i < studentCoursesA.length; i++) {
        studentCoursesB.forEach((student) => {
            if(studentCoursesA[i] = student){
                newtabs.push(studentCoursesA[i])
                console.log('new tab', newtabs)
            }
          });
      }

}

filterTab(studentCoursesA, studentCoursesB)