/** TỔNG 2 KÝ SỐ
 * 
 * - Đầu vào:
 * Giả sử:
 * t = 47
 * 
 * - Xử lý:
 * 
 * hangChuc = Math.floor(t / 10)
 * hangDonvi = Math.floor(t % 10)
 * 
 * tongKyso = hangChuc + hangDonvi
 * - Đầu ra:
 * 
 * tongKyso = ?
 */

var t = 47;

var hangChuc = Math.floor(t / 10);
var hangDonvi = Math.floor(t % 10);

var tongKyso = hangChuc + hangDonvi;
console.log("Tong 2 ky so: " + tongKyso);