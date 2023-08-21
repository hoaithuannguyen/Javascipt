/*  1.Các hàm có sẵn trong JS(Build in)
    + console.log(): hiển thị ở tab console (dùng nhiều khi đi làm)
    + alert(): hiển thị hộp thoại thông báo
    + confirm(): hiển thị hộp thoại xác nhận
    + prompt() : hiển thị ô nhập                                          cmt 1 dòng
    + document.write(): hiển thị ra trình duyệt
    2. Biến và cách khai báo biến
    Biến dùng để đại diện cho dữ liệu ( lấy ví dụ về thẻ ngân hàng, tiền để trong thẻ,
    sau đó dùng thẻ đi xử lý, chứ không phải dùng tiền mặt đi xử lý)

    Có 3 cách khai báo biến

    Cấu trúc sử dụng biến gồm:
    + từ khóa
    + tên biến :- viết theo quy tắc camel-case (con lạc đà fullNameThuan)
                - không được ghi kí tự số,kí tự đặc biệt đầu tiên trừ những trường hợp
                  sau :($ và , và _)
                - không đặt tên biến bằng những từ khóa đặc biệt
    + giá trị của biến

    C1: var (1995)
    + có thể khai báo lại
    var a
    var a
    + có thể gán lại giá trị
    var a = 9;
    var a = 8;
    + có hoisting là : (đã đưa việc khai báo lên đầu)
    + pham vị hoạt động function
    C2: let (2015)
    + có thể gán lại giá trị
    let a = 9;
    let a = 8;
    + không thể khai báo lại
    + có hoisting nhưng không truy cập được
    + phạm vi block-scope { nằm trong ngoặc nhọn }
    C3: const (2015)
    + thường dùng để khai báo hằng số (hằng số:là giá trị cố định)
    + không thể khai báo lại (nếu khai báo lại sẽ lỗi toàn bộ)
    + không thể gán lại giá trị
    + phạm vi giống let
    + khi khai báo phải gán giá trị cho nó không sẽ báo lỗi
    + đặt tên biến phải viết hoa hết

    + Lưu ý: đối với JS phân biệt chữ viết hoa và viết thường
*/

//                                                                  cmt nhiều dòng

// TEST

// console.log("hello world");

/*  alert('hello world');
    confirm('bạn đủ 18 tuổi chứ?');

khác nhau: confirm có thêm "nút hủy"
 */

// prompt('mời nhập số kg của bạn');

// document.write('xin chào các bạn nhé!');

// var fullName = 'hưng béo quá';

/*  console.log(a);
    var a = 8;   ví dụ về hoisting  */

/*  stack: vùng nhớ tĩnh
    heap: vùng nhớ động  Học sau, có thời gian thì mới tìm hiểu trước */

/* {
    let a = 8;
}                                       ví dụ về:phạm vi block-scope
console.log(a); */

// confirm("Xác nhận yes or no")

// prompt("Nhập thông tin");

// alert("Chỉ dùng để thông báo");

// document.write("Hiển thị ra website");

// console.log("Hiển thị ra tab console");



