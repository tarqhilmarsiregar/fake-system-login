showLoginPage();
document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem(akunUserKey)) {
        localStorage.setItem(akunUserKey, JSON.stringify([]));
    }

    let loginStatus = localStorage.getItem(loginStatusKey);
    if(loginStatus) {
        if(JSON.parse(loginStatus) === "admin") {
            showAdminPage();
        } else if(JSON.parse(loginStatus) === "teacher") {
            showTeacherPage();
        } else if(JSON.parse(loginStatus) === "student") {
            showStudentPage();
        } else if(JSON.parse(loginStatus) === "basic") {
            showBasicPage();
        } 
    } else {
        showLoginPage();
        localStorage.setItem(loginStatusKey, JSON.stringify(""));
    }

    if(!localStorage.getItem(taskKey)) {
        localStorage.setItem(taskKey, JSON.stringify([]));
    }
});

function Login() {
    let usernameInput = document.getElementById('usernameInput');
    let passwordInput = document.getElementById('passwordInput');

    // cek apakah user sudah mengisi username dan password
    if(usernameInput.value.toLowerCase() !== "" && passwordInput.value.toLowerCase()) {
        document.getElementById('failedLoginMessage').style.display = 'none';
        if(localStorage.getItem(akunUserKey) !== null) {

            getAllUsernameData().forEach((data) => {
                // cek apakah username ada atau tidak
                if(usernameInput.value.toLowerCase() === data.username) {
                    // cek password
                    if(passwordInput.value.toLowerCase() === data.password) {
                        if(data.role === "admin") {
                            showAdminPage();
                            localStorage.setItem(loginStatusKey, JSON.stringify("admin"));
                        } else if(data.role === "basic") {
                            showBasicPage();
                            localStorage.setItem(loginStatusKey, JSON.stringify("basic"));
                        } else if(data.role === "student") {
                            showStudentPage();
                            localStorage.setItem(loginStatusKey, JSON.stringify("student"));
                        } else if(data.role === "teacher") {
                            showTeacherPage();
                            localStorage.setItem(loginStatusKey, JSON.stringify("teacher"));
                        }
                    } else {
                        document.getElementById('failedLoginMessage').style.display = 'block';
                        document.getElementById('failedLoginMessage').innerHTML = `
                            <div class="alert alert-danger" role="alert">
                                Password Anda salah!
                            </div>                
                        `;                    
                    }
                } else {
                    document.getElementById('failedLoginMessage').style.display = 'block';
                    document.getElementById('failedLoginMessage').innerHTML = `
                        <div class="alert alert-danger" role="alert">
                            Username belum terdaftar! Silakan register!
                        </div>                
                    `;                    
                }
            });
        }
    } else {
        document.getElementById('failedLoginMessage').innerHTML = `
            <div class="alert alert-danger" role="alert">
                Username atau password masih kosong!
            </div>                
        `;
    }

}

function Logout() {
    localStorage.removeItem(loginStatusKey);
    location.reload();
    showLoginPage();
}