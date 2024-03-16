// ------------------------------------CHAPTER 14 if statements nested

// Q1
// var pass = prompt("enter password");

// if (pass.length > 0) {
//   if (pass.length <= 5) {
//     alert("password must be of 6 characters");
//   } else {
//     alert("ok");
//   }
// }

// Q4

// var number1 = 4;
// var number2 = 4;

// if (number1 === number2) {
//   alert("both are equal");
// } else {
//   if (number1 > number2) {
//     alert("number1 is greater then number2");
//   } else {
//     alert("number 2 is greater than number 1 ");
//   }
// }

//CHAPTER 15
// (ARRAY 1)
// Q1
// var empArr = [];
// Q2
// var empArr2 = ["a"];
// Q3
// var alphabet = ["h", "i", "j", "k"];

// var ind = alphabet.indexOf("j");
// alert(alphabet[ind]);
// Q4
// var alphabets = ["h", "i", "j", "k", "l", "m", "n", "o"];
// document.write(alphabets.length);

// Q5
// var newArr = ["first"];
// newArr.push("Second");
// alert(newArr[newArr.length - 1]);

//CHAPTER 16
// (ARRAY 2)
// // q1
// var strArr = ["a"];
// strArr.push("b");
// alert(strArr[strArr.length - 1]);
// q2
// var alphabet = ["h", "i", "j", "k"];
// alphabet.pop();
// q3
// alphabet.push(3);

//CHAPTER 16
// (ARRAY 3)
// q1
// var sizes = ["s", "m", "xl", "xxl", "xxxl"];
// sizes.shift();
// q2
// sizes.splice(0, 0, 1, 2, 3);
// q3
// var numArr = [1];
// numArr.unshift(2);
// alert(numArr[numArr.length - 1]);
// q4
// var sizes = ["s", "m", "xl", "xxl", "xxxl"];
// sizes.splice(2, 0, "L");
// console.log(sizes);

// q5
// var sizes = ["s", "m", "xl", "xxl", "xxxl"];
// var regSizes = sizes.slice(0, 3);
// console.log(regSizes);

// q6

// var pets = ["dog", "cat", "ox", "duck", "frog"];

// pets.splice(1, 3, "Cow", "Goat");
// console.log(pets);

// q7
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 2);
// console.log(pets);

// q8
// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// var petsNew = pets.slice(3, 5);
// console.log(petsNew);

//-----------------------------------------------------------------------------------------------------------
// chapter 14 to 16
//-----------------------------------------------------------------------------------------------------------
// Q1 SOL:-
// var arr = [];

// Q2 SOL:-
// var arr2 = [];

// Q3 SOL:-
// var arr3 = ['user1','user2','user3']

// Q4 SOL:-
// var arr4 = [1,2,3,4,5,6]

// Q5 SOL:-
// var arr5 = [true,false]

// Q6 SOL:-

// var arr6 = [1,2,3,'user1','user2',true,false]

// Q7 Sol :-
// var arr7 = ["SSC", "HSC", "BCS", "BS", "BCOM", "MPHILL", "PHD"];

// document.write("QUALIFICATIONS:" + "<br/>");

// for (var i = 0; i < arr7.length; i++) {
//   document.write(i + 1 + ") " + arr7[i] + "<br/>");
// }

// Q8 Sol :-

// var arr8 = ["Micheal", "John", "Tony"];

// var marks = [320, 230, 480];

// for (var j = 0; j < arr8.length; j++) {
//   document.write(
//     "Marks of " +
//       arr8[j] +
//       " is " +
//       marks[j] +
//       " percentage is " +
//       (marks[j] / 500) * 100 +
//       "% <br/>"
//   );
// }

// Q9 sol:-
var colors = ["Green", "Red", "Orange", "Blue"];
document.write(colors + "</br>");

// a
// var color1 = prompt("Plese give color name to add it to first");
// colors.unshift(color1);

// document.write(colors + "</br>");

// b
// var color2 = prompt("Plese give color name to add it to end");

// colors.push(color2);

// document.write(colors + "</br>");

// c
// var color3 = prompt("Plese give color name to add it to start");
// var color4 = prompt("Plese give color name to add it to start again");

// colors.splice(0, 0, color3, color4);
// document.write(colors + "</br>");
// d
// color1.shift();
// document.write(colors + "</br>");

// e
// color1.pop();
// document.write(colors + "</br>");

//f

// var desPos = +prompt("Please provide position to add color");
// var desCol = prompt("Please provide color name");

// colors.splice(desPos, 0, desCol);

// document.write(colors + "</br>");

// g
// var desPos = +prompt("Please provide position to delete color");
// var delCol = +prompt("How many colors do you want to delete");

// colors.splice(des, delCol);
// document.write(colors);

// Q10 Sol :-

// var scores = [320, 230, 480, 120];

// document.write("Scores of Students " + scores + "<br/>");
// document.write("Ordered scores of Students " + scores.sort());

// Q11 Sol:-

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// var selectedCities = cities.slice(2, 4);
// document.write("cities list <br/> " + cities + "<br/>");
// document.write("selected citites list <br/>" + selectedCities);

// Q12 Sol:-
// var strarr = ["This", "is", "my", "cat"];

// var joinArr = strarr.join(" ");
// document.write(joinArr);

// Q13 Sol:-

// var items = ['Keyboard','mouse','printer','monitor']

// Q14 Sol :-

// var items = ["Keyboard", "mouse", "printer", "monitor"];
// var items2 = items.reverse();
// document.write(items2);

// Q15 Sol :-

// var manufact = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");
// for (m = 0; m < manufact.length; m++) {
//   document.write("<option>" + manufact[m] + "</option>");
// }
// document.write("</select>");

//-----------------------------------------------------------------------------------------------------------
// //// chapter 17 to 20
//-----------------------------------------------------------------------------------------------------------
// // Q1 sol:

// var mulArr = [[]];

// // Q2 sol:
// var mulArr2 = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];

// // Q3 sol:
// var i;
// for (i = 0; i <= 10; i++) {
//   document.write(i + "<br/>");
// }

// // Q4 sol:
// var table = +prompt("enter table number");
// var length = +prompt("enter table length");

// document.write("Multiplication table of " + table + " Length of " + length);
// for (var j = 0; j <= length; j++) {
//   document.write(table + " x " + j + " = " + table * j + "<br/>");
// }

// //q5 sol:

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (k = 0; k <= fruits.length; k++) {
//   document.write("Element at index " + k + " is " + fruits[k] + "<br>");
// }

// //q6 sol:
// var Counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// Reverse = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// Even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// Odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// Series = ["2k", "4k", " 6k", "8k", " 10k", "12k", "14k", "16k", "18k", "20k"];

// document.write("Counting " + "<br/>");
// for (c = 0; c <= Counting.length; c++) {
//   document.write(Counting[c] + " , ");
// }

// document.write("Reverse Counting " + "<br/>");
// for (d = 0; d <= Reverse.length; d++) {
//   document.write(Counting[d] + " , ");
// }

// document.write("Even " + "<br/>");
// for (e = 0; e <= Even.length; e++) {
//   document.write(Counting[e] + " , ");
// }

// document.write("Odd " + "<br/>");
// for (f = 0; f <= Odd.length; f++) {
//   document.write(Odd[f] + " , ");
// }

// document.write("Series " + "<br/>");
// for (g = 0; g <= Series.length; g++) {
//   document.write(Series[e] + " , ");
// }

// // Q7 sol:
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var search = prompt("enter your search item");
// q = false;

// for (ii = 0; ii <= A.length; ii++) {
//   if (A[ii].toUpperCase() === search.toUpperCase()) {
//     document.write(A[ii] + " is found at index of " + [ii]);
//     q = true;
//     break;
//   } else {
//     document.write("we are sorry");
//   }
// }

// Q8 sol:
// A = [24, 53, 78, 91, 12];

// for (i = 0; i <= A.length; i++) {
//   if (A[i] > A[i + 1]) {
//     document.write(A[i]);
//   } else {
//   }
// }

// 9 sol:
// A = [24, 53, 78, 91, 12];
// b = A.sort();
// c = b.reverse();
// console.log(c);

// for (i = 0; i <= c.length; i++) {
//   if (c[i] < c[i + 1]) {
//     document.write(c[i]);
//   } else {
//   }
// }

// q10 sol:

// for (i = 0; i <= 20; i++) {
//   document.write(5 * i + ",");
// }
