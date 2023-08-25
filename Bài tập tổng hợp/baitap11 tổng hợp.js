/* let age = +prompt("Nhập số tuổi vào nhé!");

if (age >= 18) {
    console.log("bạn đã đủ 18 tuổi");
} else {
    console.log("bạn chưa đủ 18 tuổi");

}
// bài tập 1 */

/* let hours = +prompt("Nhập giờ vào nhé!");

if (hours <= 18) {
    console.log("Good day!");
} else {
    console.log("Good evening!");
}

// bài tập 2 */

/* let hours = +prompt("Nhập giờ vào nhé!");

if (hours <= 10) {
    console.log("Good morning!");

} else if (hours <= 19) {
    console.log("Good day!");

} else if (hours >= 20) {

    console.log("Good evening!");
}
// bài tập 3 */

/* let number = +prompt("Nhập số nhé");

if (number % 2 == 0) {
    console.log(`${number} là số chẵn`);
} else {
    console.log(`${number} là số lẻ`);

}
// bài tập 4 */

/* let number = +prompt("Nhập từ 1 đến 10 nhé");

switch (number) {
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
        console.log(`${number} là số chẵn`);
        break;
    default:
        console.log(`${number} là số lẻ`);
}
 */
// bài tập 5 */

/* let color = prompt("Nhập màu vào nhé");

switch (color) {
    case 'xanh':
    case 'đỏ':
    case 'vàng':
        console.log(`đây là màu ${color} hợp lệ`);
        break;
    default:
        console.log(`màu ${color} này không hợp lệ`);
}

// bài tập 6 */

/* let x = +prompt("Nhập số nguyên vào nhé");

if (x == 0) {
    console.log("x có giá trị là 0");

} else if (x > 0) {
    console.log("x là số nguyên dương");

} else {
    console.log("x là số nguyên âm");
}

// bài tập 7
 */

// baitap8 ở file "bmi.js" nhé

/* let toan = +prompt("Nhập điểm môn toán nhé");
let ly = +prompt("Nhập điểm môn lý nhé");
let hoa = +prompt("Nhập điểm môn hóa nhé");
let van = +prompt("Nhập điểm môn văn nhé");
let su = +prompt("Nhập điểm môn sử nhé");
let dia = +prompt("Nhập điểm môn địa nhé");

let diemTrungBinh = (toan + ly + hoa + van + su + dia) / 6;

if (diemTrungBinh >= 8 && diemTrungBinh <= 10) {
    console.log("xếp hạng GIỎI");

} else if (diemTrungBinh >= 6.5 && diemTrungBinh <= 7.9) {
    console.log("xếp hạng KHÁ");

} else if (diemTrungBinh >= 5 && diemTrungBinh <= 6.4) {
    console.log("xếp hạng TRUNG BÌNH");

} else {
    console.log("xếp hạng YẾU");
}

// bài tập 9 */

/* let months = +prompt("Nhập tháng nhé");

switch (months) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(` Tháng ${months} có 31 ngày nhé`);
        break;
    case 2:
        console.log(` Tháng ${months} có 28 ngày nhé`);
        break;
    default:
        console.log(` Tháng ${months} có 30 ngày nhé`);
}

// bài 10 */
