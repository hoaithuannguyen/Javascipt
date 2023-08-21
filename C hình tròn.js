/* let duongKinh = +prompt("Nhập đường kính vào nhé");
// let chuVi = duongKinh * 3.14;
let chuVi = duongKinh * Math.PI;



// console.log("chu vi hình tròn là", chuVi);
// console.log(`chu vi hình tròn có đường kính ${duongKinh} là:`, chuVi);
console.log(`chu vi hình tròn có đường kính ${duongKinh} là: ${chuVi}`); */

/* console.log(3 > 2 > 1);

Biểu thức 3 > 2 > 1 trong JavaScript được xử lý từ trái qua phải.
Mặc dù có vẻ khá lạ lẫm, điều này là do cách JavaScript đánh giá các phép so sánh liên tiếp.
Hãy xem cách nó hoạt động:

3 > 2 là true vì 3 lớn hơn 2.
Tiếp theo, true > 1 sẽ được đánh giá.Tuy nhiên,
 trong quá trình chuyển đổi kiểu dữ liệu, true được chuyển thành số 1,
  vì JavaScript sẽ cố gắng ép kiểu để so sánh.
Vì vậy, biểu thức trở thành 1 > 1, điều này là sai, vì 1 không lớn hơn 1. Vì vậy, kết quả cuối cùng là false.

Để tránh hiểu lầm trong các phép so sánh như thế này, bạn nên sử dụng dấu ngoặc đơn hoặc thêm dấu ngoặc đặt biệt 
để xác định rõ ràng thứ tự thực hiện.Ví dụ: (3 > 2) && (2 > 1) để đảm bảo kết quả là true. */