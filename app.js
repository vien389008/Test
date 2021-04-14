// Bài 1 : Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả.

// let str_input = prompt("Input a string");
// let str_output = [];
// for (let i = str_input.length - 1;i >= 0; i--) {
//     str_output += str_input[i];
    
// }
// console.log(str_output);

// Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa.
// let str_input = prompt("Input a string");
// let s = str_input.split("")
// for (let i = 0; i < str_input.length; i++) {
//     if(s[i] == " "){
//         s[i + 1] = s[i + 1].toUpperCase();
//         s[0] = s[0].toUpperCase();
//     }
    
// }
// console.log(s.join(""));

// Bài 3: Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả.

// let input = prompt("Input a string(vd: 1,2,3 or one,two,three)");
// let s = input.split(",");
// let ans = s.filter((value, index, s) => s.indexOf(value) === index); // indexOf chỉ trả về chỉ số của phần 
// console.table(ans);                                                 //tử đầu tiên tìm thấy trong mảng.

// Bài 4: Tạo dữ liệu của 3 nhân viên mindX (gồm tên, tuổi, mức lương, chức vụ). Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete).

// let mindX =[
//     {name: "Ngô Thành Trung", age: 28, salary: 2.2, position: "Nhân viên"},
//     {name: "Nguyễn Văn Dũng", age: 29, salary: 2.5, position: "Phó trưởng phòng"},
//     {name: "Hoàng Minh Khôi", age: 35, salary: 2.8, position: "Trưởng Phòng"}
// ];
// while (true) {
//     let input = prompt("Input C(create), R(read), U(update), D(delete), 0(outsystem)").toUpperCase();
//     if (input == "C") {
//         let name = prompt("Input name");
//         let age = Number(prompt("Input age"));
//         let salary = Number(prompt("Input salary"));
//         let position = prompt("Input position");
//         let newMindX = {name: name, age: age, salary: salary, position: position};
//         mindX.push(newMindX);
//     }
//     else if (input == "R") {
//         console.table(mindX);
//     }
//     else if(input == "D"){
//         for (let i = 0; i < input.length; i++) {
//             let x = prompt("Input index want delete")
//             if(x < 0 || x >= mindX.length){
//                alert("Not found index");
//             }
//             else {
//                 let thoat = confirm("Are you Delete???");
//                 if(thoat){
//                     mindX.splice(x - 1, 1);
//                     console.log("Delete success");
//                 }
//             }
//         }
//     }
//     else if (input == "U") {
//         for (let i = 0; i < mindX.length; i++) {
//             let y = prompt("Input index want update");
//             if(y < 0 || y >= mindX.length){
//                 alert("Not found index");
//             }
//             else {
//                 mindX[y].name = prompt("Input your name");
//                 mindX[y].age = Number(prompt("Input your age"));
//                 mindX[y].salary = Number(prompt("Input your salary"));
//                 mindX[y].position = prompt("Input your position");
//                 alert("Update success");
//             }
            
//         }
//     }
//     else if (input == "0") {
//         let out = confirm("Are you want outsystem???");
//         if(out){
//             break;
//         }
//         else{
//             continue;
//         }
//     }
//     else {
//         alert("Re-enter");
//         continue;
//     }

// }

// Bài 5: Viết chương trình cho phép người dùng nhập vào ngày tháng năm.
// Kiểm tra xem ngày tháng năm đó có hợp lệ hay không
let str_Date = prompt("Nhập ngày tháng năm(dd/mm/yyyy)");
let comp = str_Date.split('/');
let d = parseInt(comp[0], 10);
let m = parseInt(comp[1], 10);
let y = parseInt(comp[2], 10);
let date = new Date(y,m-1,d);
if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
  alert("Ngày tháng năm hợp lệ")
}
else{
    alert("Không hợp lệ");
}