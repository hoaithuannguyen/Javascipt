/*
1. Toán tử số học +, -, *,  /,  **

2. Toán tử logic
&&(và), ||(hoặc)


&&: sẽ ăn theo falsy đầu tiên nếu không có sẽ ăn theo cuối cùng.
||: ăn theo trusty đầu tiên nếu không có thì sẽ ăn theo cuối cùng.


trusthy: string,number
falsy: NaN,null, undefined,0, fasle,","

trong một biểu thức có && và || thì sẽ ăn theo && trước.

3. Toán tử so sánh
== : so sánh giá trị
===(ăn theo &&): so sánh giá trị + kiểu dữ liệu
>=, <=, !=, !==(ăn theo hoặc ||), >, <   phần này nghiên cứu kỹ hơn


4. Toán tử 3 ngôi
 "? :" (thứ 2 học)
? là điều kiện đúng thì nó thực hiện còn : là điều kiện sai thì nó thực hiện
(? chạy khi true; : chạy khi false)

Ví dụ:
let a = 6;

a>3 ? console.log(`${a}` lớn hơn 3) : console.log(`${a}` bé hơn 3);

(toán tử 3 ngôi dùng nhiều khi đi làm, dùng trong if else ,có một trường hơp if-else thôi)

5. Toán tử nullish  ??
nếu gặp null hoặc undefined sẽ theo thằng cuối còn không sẽ lấy đầu tiên luôn


6. Toán tử gán =
7. Toán tử tăng giảm ++ --
a++ : kết thúc câu lệnh mới tăng lên 1
++a :tăng lên luôn khi chưa chạy
*/

// let result = NaN && null && undefined && 0; ví dụ của toán tử logic
// console.log(result);

/*
let result = 5 !== "5"; // 5 === "5" ví dụ của toán tử so sánh
consolog(result);
 */


/* let a = 6;
a++;
++a;                                        ví dụ cho toán tử tăng giảm
console.log(a); */


/* let a = 6;
let result = a++ + a++ + ++a + ++a + a;       vẽ ra giấy để hiểu về a++,++a.
console.log(result); */

// let a = 9;                           
// console.log("🚀 ~ file: operator.js:54 ~ a:", a)
