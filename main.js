function timSoNguyenMaxMin() {
    var maxMin = 0;
    for (var i = 0; i < 10000; i++) {
        maxMin += i;
        if (maxMin > 10000) {
            //  in maxMin
            document.getElementById("InfoSoNguyen").innerHTML = "Số nguyên nhỏ nhất là: " + i;
            break;
        }
    }
}


function tinhTongN() {
    var x = document.getElementById("nhapX").value * 1;
    var n = document.getElementById("nhapN").value * 1;
    var tongN = 0;

    //  Math.pow : là tính số mũ

    // Math.pow(số, số mũ)
    // Ví dụ x = 3 (x là số)
    // n = 3 (n là số mũ)
    //   lấy giá trị i thay cho n 

    // i = 1 | i <= 3 | i++  
    // Math.pow( 3 , 1 )    3^1

    // i = 2 | i <= 3 | i++
    // Math.pow( 3 , 2 )   3^2 

    // i = 3 | i <= 3 | i++
    // Math.pow( 3 , 3 )   3^3

    // i = 4 | i <= 3 => False vì [ i = 4] i không thể lớn hơn 3

    for (var i = 1; i <= n; i++) {
        tongN += Math.pow(x, i);
    }
    document.getElementById("InfoTongN").innerHTML = "Tổng S(" + n + ") là: " + tongN;





    //  Math.pow : là tính số mũ
    // Math.pow(số, số mũ)

    // Điều kiện i= 0 ; i phải bé hơn hoặc = n 
    // Nếu cho i == n chương trình không chạy vì  i = 0  không thể bằng n = số mà người dùng nhập


    // var i = 1;
    // do{
    //     i++;
    //     Math.pow(x, i);
    //     tongN+= x;
    // }while (i<= n)
    // document.getElementById("InfoTongN").innerHTML = "Tổng S(" + n + ") là: " + tongN;

    // var i = 1;
    // while( i <= n){
    //     i++;
    //     Math.pow(x,i);
    //     tongN += x
    // }
    // document.getElementById("InfoTongN").innerHTML = "Tổng S(" + n + ") là: " + tongN;
}


function tinhGiaiThua() {

    /**
     * 
     * CÁCH 1:
     * 
     */

    // Ví dụ 
    // Cho n = 4
    // giaiThuaN = n => giaiThuaN = 4

    // Chạy lần 1:
    // Điều kiện:
    // i = 0 | i <= n | i++
    // i = 0 | i <= 4 | 1 ( i hien là 1)

    // => giaiThuaN(gán kết quả phép tính) = giaiThuaN(hiện giaiThuaN có giá trị 4) * n--(n có giá trị 4[n--]  => 4 - 1)
    // => giaiThuaN = 4 * (4 - 1)
    // => giaiThuaN = 4 * 3
    // => giaiThuaN = 12

    // Chạy lần 2:

    // Điều kiện:
    // i = 0 | i <= n | i++
    // i = 1 | i <= 3 | 2


    // n sau khi trừ ở lần chạy đầu n hiện có giá trị 3
    // => giaiThuaN(gán kết quả phép tính) = giaiThuaN(hiện giaiThuaN có giá trị 12) * n--(n có giá trị 3[n--]  => 3 - 1)
    // => giaiThuaN = 12 * (3 - 1)
    // => giaiThuaN = 12 * 2
    // => giaiThuaN = 24

    // Chạy lần 3:

    // Điều kiện:
    // i = 0 | i <= n | i++
    // i = 2 | 2 <= 2 | 3


    // n sau khi trừ ở lần chạy hai n hiện có giá trị 2
    // => giaiThuaN(gán kết quả phép tính) = giaiThuaN(hiện giaiThuaN có giá trị 24) * n--(n có giá trị 2[n--]  => 2 - 1)
    // => giaiThuaN = 24 * (2 - 1)
    // => giaiThuaN = 24 * 1
    // => giaiThuaN = 24

    // Chạy lần 3:

    // Điều kiện:
    // i = 0 | i <= n | i++
    // i = 3 | 3 <= 2 
    // => Flase  



    // var n = document.getElementById("nhap_GiaiThua").value * 1;
    // var number = n
    // var giaiThuaN = n;
    // for (var i = 0; i <= n; i++) { 
    //     giaiThuaN *= --n;
    // }
    // document.getElementById("Info_GiaiThuaN").innerHTML = "Giai thừa " + number + " là: " + giaiThuaN;






    /**
     * 
     * CÁCH 2:
     * 
     * // Ví dụ 
        // Cho n = 4
        // giaiThuaN = n => giaiThuaN = 4
    
        // Cho number = n => number = 4
    
        // Chạy lần 1:
        // Điều kiện:
        // i = 1 | i < n | i++
        // i = 1 | 1 < 4 | 2 ( i hien là 2)
    
        // => giaiThuaN(gán kết quả phép tính) = giaiThuaN(hiện giaiThuaN có giá trị 4) * number--(number có giá trị 4[number--]  => 4 - 1)
        // => giaiThuaN = 4 * (4 - 1)
        // => giaiThuaN = 4 * 3
        // => giaiThuaN = 12
        
        // Chạy lần 2:
    
        // Điều kiện:
        // i = 1 | i < n | i++
        // i = 2 | 2 < 4 | 3
    
    
        // n sau khi trừ ở lần chạy đầu n hiện có giá trị 3
        // => giaiThuaN(gán kết quả phép tính) = giaiThuaN(hiện giaiThuaN có giá trị 12) * number--(number có giá trị 3[number--]  => 3 - 1)
        // => giaiThuaN = 12 * (4 - 1)
        // => giaiThuaN = 12 * 2
        // => giaiThuaN = 24
    
        // Chạy lần 3:
    
        // Điều kiện:
        // i = 0 | i <= n | i++
        // i = 3 | 3 < 4 | 4
    
    
        // n sau khi trừ ở lần chạy hai n hiện có giá trị 2
        // => giaiThuaN(gán kết quả phép tính) = giaiThuaN(hiện giaiThuaN có giá trị 24) * number--(number có giá trị 2[number--]  => 2 - 1)
        // => giaiThuaN = 24 * (2 - 1)
        // => giaiThuaN = 24 * 1
        // => giaiThuaN = 24
    
        // Chạy lần 3:
    
        // Điều kiện:
        // i = 0 | i <= n | i++
        // i = 3 | 4 < 4 
        // => Flase  
     * 
     */

    var n = document.getElementById("nhap_GiaiThua").value * 1;
    var number = n
    var giaiThuaN = n;
    for (var i = 1; i < n; i++) {
        giaiThuaN *= --number;
    }
    document.getElementById("Info_GiaiThuaN").innerHTML = "Giai thừa " + n + " là: " + giaiThuaN;


}

function inTagDiv() {

    // Dành khi nhâp số thẻ cần tạo
    // var number = document.getElementById("nhap_SoDiv").value * 1;

    var number = 10
    var result = "";
    document.getElementById("Info_Div").innerHTML= result;

    for (i = 1; i <= number; i++) {
  
        if (i % 2 == 0) {
            result = document.createElement("div");
            result.innerHTML = ("Đây là thẻ div đỏ");
            result.style.backgroundColor="#e64949"
            result.style.color="White"
            document.getElementById("Info_Div").appendChild(result);
        }
        else if (i % 2 != 0) {
            result= document.createElement("div");
            result.innerHTML = ("Đây là thẻ xanh dương");
            result.style.backgroundColor="#4346d8"
            result.style.color="White"
            document.getElementById("Info_Div").appendChild(result);
        }

    }
}

function soNguyento() {
    var number = document.getElementById("nhap_SoNguyenTo").value * 1;
    var content = "";
    var flag = true;
    for (var i = 2; i <= number; i++) {

        for (var j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                flag = false;
            }
        };
        if (flag) {
            content += i + " ";
        }
        flag = true;
    }
    console.log(content);
    document.getElementById("infoSo_Nguyento").innerHTML = content;
}



