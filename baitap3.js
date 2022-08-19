/**
 * QUY ĐỔI TIỀN
 * 
 * - Đầu vào:
 * 
 * giaUsd: 23500
 * soTien: 12
 * 
 * - Xử lý:
 * 
 * tongTien = giaUsd * soTien
 * 
 * - Đầu ra:
 * 
 * tongTien = ?
 * 
 */

var giaUsd = 23500;
var soTien = 12;

var tongTien = giaUsd * soTien;

console.log("Tong so tien la: " + new Intl.NumberFormat('vn-VN').format(tongTien));
