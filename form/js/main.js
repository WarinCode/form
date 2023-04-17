const email = document.querySelector('#email');
const password = document.querySelector("#password");
const show = document.querySelector("#show");


window.addEventListener('submit', (event) => {
    event.preventDefault();
    if (email.value.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'เกิดข้อผิดพลาดขึ้น',
            text: 'กรุณากรอกอีเมลและรหัสผ่านเพื่อเข้าสู่ระบบ!',
            showConfirmButton: false,
        })
    } else if (password.value.length === 0 || password.value.length < 8) {
        Swal.fire({
            icon: 'error',
            title: 'เกิดข้อผิดพลาดขึ้น',
            text: 'ขออภัย รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
            showConfirmButton: false,
        })
    } else {
        const user = {
            email: email.value,
            password: password.value
        }
        let jsonData = JSON.stringify(user);
        sessionStorage.setItem("user", jsonData);
        const data = jsonData = JSON.parse(sessionStorage.getItem("user"));
        Swal.fire({
            icon: 'success',
            title: 'คุณได้ login เข้าสู่ระบบเรียบร้อยแล้ว',
            showConfirmButton: false,
            timer: 1200,
            text: data.email,
        })
        
    }
})

const showPassword = () => {
    if (password.type === "password") {
        password.type = "text";
        show.innerHTML = '<i class="fa fa-eye eye" aria-hidden="true"> </i>';
    } else {
        password.type = "password";
        show.innerHTML = '<i class="fa fa-eye-slash eye" aria-hidden="true"> </i>';
    }
}
show.addEventListener('click' , showPassword);
  