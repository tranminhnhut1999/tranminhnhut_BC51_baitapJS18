// Tập hợp các số được thêm 
var listNumber = [];
function themSo() {
    var number = document.getElementById("txtNumber").value * 1;
    listNumber.push(number);
    var result = "";
    for (var i = 0; i < listNumber.length; i++)
        result += listNumber[i] + " ";
    document.getElementById("listNumber").innerHTML = result;
}
/**
 * Câu 1: Tổng số dương
 * 1.Tạo biến tích luỹ số dương 
 * 2. Duyệt mảng listNumber
 * 3. Kiểm tra phần tử có là số dương ( listNumber[i] > 0)
 *      => True => Tích luý phần tử 
 * 4.Show kết quả #tongSoDuong
 */
function tSoDuong() {
    var total = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] >= 0) {
            total += listNumber[i];
        }
    }
    var result = "Tổng số dương: " + total;
    document.getElementById("tongSoDuong").innerHTML = result;
}


/**
 * Câu 2: Đếm số âm
 * 1. Tạo biến tích luỹ số âm dem=0
 * 2. Duyệt mảng listNumber
 * 3. Kiểm tra phần tử có là số âm (listNumber[i]>0)
 *      =>True => Tăng biến dem 1 đơn vị
 * 4.Show kết quả #demSoDuong
 */
function dSoDuong() {
    var dem = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] >= 0) {
            dem++;
        }
    }
    var result = "Có " + dem + " số dương";
    document.getElementById("demSoDuong").innerHTML = result;
}

/**
 * Câu 3: Tìm số nhỏ nhất
 * 1. Quy định số ban đầu là min
 * 2. Duyệt mảng listNumber (listNumber[1])
 *  2.1 So sánh min vs listNumber[i]
 *      min < listNumber[i]
 *          =>True =>Cập nhật giá cho min listNumber[i]
 */

function sNhoNhat() {
    var min = listNumber[0];
    for (var i = 1; i < listNumber.length; i++) {
        if (min < listNumber[i]) {
            listNumber[i];
        }
    }
    var result = "Số nhỏ nhất: " + min
    document.getElementById("sNhoNhat").innerHTML = result;
}

/**
 * Câu 4: Tìm số dương nhỏ nhất
 * 0. Tạo thêm mảng chứa số đương sDuong=[]
 * 1. Duyệt mảng sDuong
 * 2. Kiểm tra phần tử trong mảng sDuong dựa theo listNumber
 * 3. Xét đk theo listNumber có số dương không? (listNumber[i] >=0)
 *      => True => Tích luỹ phần tử vào sDuong
 * 4. Duyệt mảng sDuong sau khi kiểm tra với listNumber
 * 5. So sánh min với sDuong
 *      min < sDuong[i]
 *          => True => Cập nhật giá trị cho min dựa theo sDuong
 * 6.Show kết quả sDuongNhoNhat
 */

function sdNhoNhat() {
    var sDuong = listNumber[0];
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] >= 0) {
            sDuong += listNumber[i];
        }

    }
    var min = sDuong[0];
    for (var i = 1; i < sDuong.length; i++) {
        if (min < sDuong[i]) {
            sDuong[i];
        }
    }
    console.log(min);
    var result = "Số dương nhỏ nhất: " + min;
    document.getElementById("sdNhoNhat").innerHTML = result;
}


/**
 * Câu 7: Sắp xếp tăng dần
 */
function sXTangDan() {
    for (var i = 0; i < listNumber.length - 1; i++) {
        for (var j = i + 1; j < listNumber.length; j++) {
            if (listNumber[i] > listNumber[j]) {
                var temp = listNumber[i];
                listNumber[i] = listNumber[j];
                listNumber[j] = temp
            }
        }
    }
    var result = "Xếp theo tăng dần: " + listNumber;
    document.getElementById("sXTangDan").innerHTML = result;
};

/**
 * Câu 8 : Tìm số nguyên đầu tiên
 */
//function soDT() {
    //var result = ""
    //switch (listNumber) {
        //case 1:
            //result = "Số đầu tiên"
            //break;
        //default
            //result = "Số đầu tiên " + -1

    //}
    //document.getElementById("sDauTien").innerHTML = result;
//}
