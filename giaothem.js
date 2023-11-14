

alert("hello !");
console.log("hi :>>>>");


var ten = prompt("Mời bạn nhập vào tên: ");
var tuoi = prompt("Mời bạn nhập vào tuổi: ");
var nganh = prompt("Mời bạn nhập vào ngành học: ");
var quequan = prompt("Mời bạn nhập vào quequan: ");

document.write(`${ten} , ${tuoi} , ${nganh} , ${quequan}`);

function ktso(tuoi) {
    if (tuoi % 2 == 0) {
        alert("tuổi của bạn là số chẵn");
    } else {
        alert("tuổi của bạn là số lẻ");
    }
}
ktso(tuoi);

function them() {
    alert("Sở thích : chơi thể thao \n giới tính : Nam \n MSV : PH40209 \n sdt : 0327367649");
}