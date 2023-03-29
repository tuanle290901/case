// Định nghĩa đối tượng Account
class Account {
    constructor(email, password, name, phone) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.phone = phone;
    }

    setEmail(email) {
        this.email = email;
    }

    setPassword(password) {
        this.password = password;
    }
}

// Khởi tạo danh sách tài khoản
let arrAccount = [];

function checkAccount(email, password) {
    arrAccount = JSON.parse(localStorage.getItem('ACCOUNT'))
    for (let i = 0; i < arrAccount.length; i++) {
        if (email === arrAccount[i].email && password === arrAccount[i].password) {
            return true;
        }
    }
    return false;
}

function login() {
    console.log(arrAccount);
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email === "" || password === "") {
        alert("Chưa nhập gì!");
    } else {
        let kq = checkAccount(email, password);
        if (kq === true) {
            alert("Đăng nhập thành công");
            window.location.href = "GiaoDien.html"
        } else {
            alert("Email hoặc mật khẩu không chính xác.");
        }
    }
}

function register() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phoneNumber").value;

    let acc = new Account(email, pass, name, phone);
    arrAccount.push(acc);

    localStorage.setItem("ACCOUNT", JSON.stringify(arrAccount));

    alert("Đăng ký thành công!");
    window.location.href = 'form_html.html'
}