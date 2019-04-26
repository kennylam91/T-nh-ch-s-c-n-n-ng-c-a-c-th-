let weight = parseFloat(prompt("Nhập vào cân nặng(kg):"));
console.log(weight);

if (isNaN(weight) || (weight <= 0)||(weight>200)) {
    alert("Nhap chua dung!");
} else {
    let height = parseFloat(prompt("Nhập vào chiều cao(m):"));
    if (height <= 0 || isNaN(height)||(height>3)) {
        alert("Nhap chua dung");
    } else {
        let interpretation;
        bmi = weight / (height * height);
        if (bmi < 18.5) {
            interpretation = "Underweight";
        } else if (bmi < 25) {
            interpretation = "Normal";
        } else if (bmi < 30) {
            interpretation = "Overweight";
        } else {
            interpretation = "Obese";
        }
        alert(interpretation);

    }
}



