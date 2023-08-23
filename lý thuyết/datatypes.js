/*
Data type: kiểu dữ liệu
Trong js chia làm 2 kiểu dữ liệu

1.kiểu dữ liệu nguyên thủy hay còn gọi là kiểu dữ liệu đơn giản
hay còn gọi là primitive type (tham trị)
+ number : số
+ string : kiểu chuỗi
+ boolean: đúng ,sai
+ null   : có giá trị rỗng(thường làm việc object)

    let a = null;
    console.log(typeof (a));

    console.log(Object.prototype.toString.call(a));(code này để test kiểu dữ liệu của
        null)


+ undefined: không có giá trị(làm việc biến nguyên thủy)
    (khác nhau giữa null,undefined: khai báo biến cấp phát ô nhớ không có giá trị,
    khai báo biến cấp phát ô nhớ có giá trị là null)

+ NaN    : not a number
    /* cú pháp kiểm tra có phải là NaN hay không
   console.log(Number.isNaN()); (true là phải NaN, false là không phải NaN*/

/*  + Symbol ES6
    + BigInt E14

2. kiểu dữ liệu phức tạp hay còn gọi là referent type(tham chiếu)
+ object
+ function
+ array
*/

// let a = 8;
// console.log('1111111', typeof (a));

// let a = "hưng béo"/ 5; > NaN

