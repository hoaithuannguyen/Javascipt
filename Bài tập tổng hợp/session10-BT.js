/* let a = +prompt("Nhập số A");
let b = +prompt("Nhập số B");

if (a % b == 0) {
    console.log(`${a} chia hết cho ${b}`);
} else {
    console.log(`${a} không chia hết cho ${b}`);

}
// bài 1 Luyên tập cấu trúc điều kiện 1 */

/* let age = +prompt("Nhập tuổi của bạn");

if (age <= 16) {
    console.log(" bạn chưa đủ tuổi vào lớp 10");
} else {
    console.log(" bạn đã đủ tuổi vào lớp 10");

}
// bài 2 Luyên tập cấu trúc điều kiện 1 */

/* let soNguyen = +prompt("Nhập số nguyên bất kỳ");

if (soNguyen < 0) {
    console.log("đây là số nguyên âm");
} else {
    console.log("đây là số nguyên dương");

}
// bài 3 Luyên tập cấu trúc điều kiện 1 */


/* let a = +prompt("Nhập a vào nhé");
let b = +prompt("Nhập b vào nhé");
let c = +prompt("Nhập c vào nhé");

if (a > b) {
    if (a > c) {
        console.log(`${a} là max`);
    } else {
        console.log(`${c} là max`);
    }
} else if (a < b) {
    if (b > c) {
        console.log(`${b} là max`);
    } else {
        console.log(`${c} là max`);

    }
}

// bài 4 Luyên tập cấu trúc điều kiện 1 */


/* let met = +prompt("Nhập mét vào");

let feet = met * 3.2808;

console.log(feet);

// bài tập đổi mét sang feet */

/* let a = +prompt("Nhập độ dài cạnh a nhé");

let squareS = a * a;

console.log(` diện tích hình vuông là ${squareS}`);

// bài tập tính diện tích hình vuông */

/* let a = +prompt("Nhập độ dài cạnh a nhé");
let b = +prompt("Nhập độ dài cạnh b nhé");


let rectangleS = a * b;

console.log(` diện tích hình vuông là ${rectangleS}`);

// tính diện tích hình chữ nhật */

/* let tamGiacS = (a*b)/2;

tính diện tích tam giác vuông biết 2 cạnh */



/* // giải phương trình bậc 1
let a = +prompt("Nhập a nhé");

let b = +prompt("Nhập b nhé");

if (a != 0) {
    let x = -b / a;
    if (b == 0) {
        console.log(`Phương trình có 1 nghiệm là ${x} `)
    } else {
        console.log(`Phương trình có nghiệm là ${x} `)
    }
} else {
    if (b == 0) {
        console.log("Phương trình vô số nghiệm")
    }
    else {
        console.log("Phương trình vô nghiệm")
    }
} */


/* // phương trình bậc 2

let a = +prompt("Nhập a nhé");
let b = +prompt("Nhập b nhé");
let c = +prompt("Nhập c nhé");



if (a == 0) {
    if (b != 0) {
        let x = -c / b;
        console.log(`Phương trình có 1 nghiệm là ${x} `)
    } else {

        if (c != 0) {
            console.log(`Phương trình vô nghiệm `)
        }
        else {
            console.log(`Phương trình vô số nghiệm `)
        }
    }
} else {
    let delta = b ** 2 - 4 * a * c;
    let sqrt = Math.sqrt(delta)
    if (delta == 0) {
        console.log("x1 = x2 =", -b / 2 * a);
    } else if (delta > 0) {
        console.log("x1=", (-b - sqrt) / 2 * a);
        console.log("x2=", (-b - sqrt) / 2 * a);
    } else {
        console.log("Vô nghiệm");
    }

} */
/* // bài tập tam giác
let a = +prompt("Nhập a nhé");
let b = +prompt("Nhập b nhé");
let c = +prompt("Nhập c nhé");

if (a && b && c > 0) {
    if (a + b > c && b + c > a && a + c > b) {
        console.log("a b c là tam giác");

    } else {
        console.log("a b c không phải là tam giác");
    }
} else {
    console.log("a b c không phải là tam giác");

} */


