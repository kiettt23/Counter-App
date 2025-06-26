const value = document.querySelector('#value');
const btnDecrease = document.querySelector('.btn-decrease');
const btnReset = document.querySelector('.btn-reset');
const btnIncrease = document.querySelector('.btn-increase');
let count = 0;

// Đoạn 1: dùng If - Else
function updateValue(){
    value.textContent = count;
    if(count < 0){
        value.style.color =  'red';
    } else if(count === 0){
        value.style.color = 'black';
    } else {
        value.style.color = 'green';
    }
}

// Đoạn 2: dùng If riêng lẻ
// function updateValue() {
//     value.textContent = count;
//     if (count < 0) {
//         value.style.color = 'red';
//     }
//     if (count === 0) {
//         value.style.color = 'black';
//     } 
//     if (count > 0) {
//         value.style.color = 'green';
//     }
// }

// Kết luận:
// Dùng Đoạn 1 nếu muốn một logic tuyến tính, rõ ràng, và tránh ghi đè
// (như bộ đếm màu sắc hiện tại)
// Dùng Đoạn 2 nếu cần xử lý nhiều hành động độc lập hoặc điều kiện phức tạp hơn
// (nhưng cần cẩn thận với thứ tự thực thi)
// Với trường hợp này chỉ đổi màu dựa trên count 
// => Đoạn 1 là lựa chọn tốt hơn vì nó đơn giản và không có rủi ro ghi đè

btnDecrease.addEventListener('click', () => {
    count--;
    updateValue();
})

btnReset.addEventListener('click', () => {
    count = 0;
    updateValue();
})

btnIncrease.addEventListener('click', () => {
    count++;
    updateValue();
})