/**
 * TÍNH TIỀN LƯƠNG NHÂN VIÊN
 * 
 * - Đầu vào:
 * 
 * luongNgay: 100000
 * soNgaylam: 25
 * 
 * - Xử lý:
 * 
 * tongLuong = luongNgay * soNgaylam
 * 
 * - Đầu ra:
 * 
 * tongLuong = ?
 */

var luongNgay = 100000;
var soNgaylam = 25;

var tongLuong = luongNgay * soNgaylam;

console.log("Tong luong la: " + new Intl.NumberFormat('vn-VN').format(tongLuong));