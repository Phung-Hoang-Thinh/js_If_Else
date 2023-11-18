


//!Bài 1
document.getElementById("btn-1").onclick = function (){
// Nhập 3 số nguyên từ người dùng
var number1 = "";
var number2 = "";
var number3 = "";

// Khởi tạo biến đếm số lẻ và số chẵn
var oddCount = 0;
var evenCount = 0;

// Kiểm tra và đếm số lẻ và số chẵn
if (number1 % 2 === 0) {
    evenCount++;
} else {
    oddCount++;
}

if (number2 % 2 === 0) {
    evenCount++;
} else {
    oddCount++;
}

if (number3 % 2 === 0) {
    evenCount++;
} else {
    oddCount++;
}

// Xuất kết quả
console.log("Số lẻ: " + oddCount);
console.log("Số chẵn: " + evenCount);
}

//-------------------------------------------------------------------------------

//! BT2
// Nhập tên thành viên từ người dùng
var member = prompt("Bạn là ai trong gia đình? (ba, mẹ, anh trai, em gái)");

// Chào hỏi phù hợp với thành viên
if (member.toLowerCase() === "ba") {
    console.log("Chào bố! Xin chào người đàn ông của gia đình.");
} else if (member.toLowerCase() === "mẹ") {
    console.log("Chào mẹ! Xin chào người phụ nữ tuyệt vời của gia đình.");
} else if (member.toLowerCase() === "anh trai") {
    console.log("Chào anh trai! Xin chào người anh đáng yêu của gia đình.");
} else if (member.toLowerCase() === "em gái") {
    console.log("Chào em gái! Xin chào công chúa nhỏ của gia đình.");
} else {
    console.log("Xin lỗi, không nhận diện được thành viên. Hãy thử lại.");
}
// -------------------------------------------------------------------------------------

//! BT3
// Nhập 3 số nguyên từ người dùng
var number1 = parseInt(prompt("Nhập số thứ nhất:"));
var number2 = parseInt(prompt("Nhập số thứ hai:"));
var number3 = parseInt(prompt("Nhập số thứ ba:"));

// Khởi tạo biến đếm số lẻ và số chẵn
var oddCount = 0;
var evenCount = 0;

// Kiểm tra và đếm số lẻ và số chẵn
if (number1 % 2 === 0) {
    evenCount++;
} else {
    oddCount++;
}

if (number2 % 2 === 0) {
    evenCount++;
} else {
    oddCount++;
}

if (number3 % 2 === 0) {
    evenCount++;
} else {
    oddCount++;
}

// Xuất kết quả
console.log("Số lẻ: " + oddCount);
console.log("Số chẵn: " + evenCount);
//-----------------------------------------------------------------------------------------------

//!BT4
// Nhập ba cạnh của tam giác từ người dùng
var side1 = parseFloat(prompt("Nhập chiều dài cạnh thứ nhất:"));
var side2 = parseFloat(prompt("Nhập chiều dài cạnh thứ hai:"));
var side3 = parseFloat(prompt("Nhập chiều dài cạnh thứ ba:"));

// Xác định loại tam giác
if (side1 === side2 && side2 === side3) {
    console.log("Đây là tam giác đều.");
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("Đây là tam giác cân.");
} else if (
    side1 ** 2 + side2 ** 2 === side3 ** 2 ||
    side1 ** 2 + side3 ** 2 === side2 ** 2 ||
    side2 ** 2 + side3 ** 2 === side1 ** 2
) {
    console.log("Đây là tam giác vuông.");
} else {
    console.log("Đây là tam giác thường,không cân , không đều, không vuông.");
}