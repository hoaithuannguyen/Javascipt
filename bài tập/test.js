// console.log(a);
// var a = 3; mỗi var thể hiện undefined vì hoisitng tự động điều chuyển lên đầu
// let và const có hoisitng nhưng không hiển thị >> ReferenceError



/* let result = 1 && 2 && 3 && null && 5;
console.log(result);
                                //    ví dụ về falsy của toán tử && */


/* let result = false || 0 || undefined || null || "";
console.log(result);
                            // ví dụ về truthy của toán tử || */

// let result = 1 || null && 2 || undefined && 1 || 1 && null;
// console.log(result); ví dụ khi có &&,|| trong giá trị biến

/* let a = 10

a = ++a + a-- + a++ - a-- - a;

console.log(a);

a += 5

console.log(a); */
/* let a = +prompt("nhập số a nhé:")

let b = +prompt("nhập số b nhé:")

let c = +prompt("nhập số c nhé:")

if (a > b) {
    if (a > c) {
        console.log("Greatest number is a = " + a);
    } else {
        console.log("Greatest number is c = " + c);
    }
} else {
    if (b > c) {
        console.log("Greatest number is b = " + b);
    } else {
        console.log("Greatest number is c = " + c);
    }
}
// if else lồng nhau,so sánh số lớn nhất,bé nhất */




/* let year = parseInt(prompt("Enter a year"));

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert(year + " là năm nhuận nhé1");
        } else {
            alert(year + " không phải là năm nhuận nhé1");
        }
    } else {
        alert(year + " là năm nhuận nhé2");
    }
} else {
    alert(year + " không phải là năm nhuận nhé2");
}
// năm nhuận */




/* // luyện tập cấu trúc if else
let value = prompt('What is the "official" name of JavaScript?', '');

if (value == 'ECMAScript') {
    alert('Right!');
} else {
    alert("You don't know? ECMAScript!");
} */

/* let a = 5 > 6;
console.log(typeof (a)); */


