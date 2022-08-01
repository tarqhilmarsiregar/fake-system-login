function createRegisterPage() {
    document.getElementById('root').innerHTML = `
        <div class="rounded-2 p-3 bg-white card mt-5">
            <header>
                <h1 class="text-center" id="registerTitle">Register</h1>
            </header>
            <div id="notFilledAlert"></div>
            <form id="register">
            <div class="mb-3">
                <label for="usernameRegisterInput" class="form-label">Username</label>
                <input type="text" class="form-control" id="usernameRegisterInput" autofocus autocomplete="off" required>
            </div>
            <div class="mb-3">
                <label for="passwordRegisterInput" class="form-label">Password</label>
                <input type="password" class="form-control" id="passwordRegisterInput" autocomplete="off" required>
            </div>
            <div class="mb-3">
                <label for="confirmpasswordRegisterInput" class="form-label">Confirm password</label>
                <input type="password" class="form-control" id="confirmpasswordRegisterInput" autocomplete="off" required>
            </div>
            <div class="mb-3">
                <p>Role :</p>
                <select class="form-select" id="role" required>
                    <option value="admin">Admin</option>
                    <option value="basic">Basic</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary" id="submitData">Submit</button>
            <button type="button" class="btn btn-light" id="backLogin">Back to Login</button>
            </form>            
        </div>    
    `;
    document.getElementById('backLogin').addEventListener('click', showLoginPage);
    document.getElementById('submitData').addEventListener('click', function(e) {
        submitData();
        e.preventDefault();
    });
}

function showRegisterPage() {
    createRegisterPage();
}

function submitData() {
    let usernameRegisterInput = document.getElementById('usernameRegisterInput');
    let passwordRegisterInput = document.getElementById('passwordRegisterInput');
    let confirmpasswordRegisterInput = document.getElementById('confirmpasswordRegisterInput');
    let role = document.getElementById('role');
    
    // cek apakah username, password, dan role sudah diinput atau belum
    if(usernameRegisterInput.value.toLowerCase() !== "" && passwordRegisterInput.value.toLowerCase() !== "" && confirmpasswordRegisterInput.value.toLowerCase() !== "" && role.value.toLowerCase() !== "") {
        document.getElementById('notFilledAlert').style.display = 'none';
        let data = JSON.parse(localStorage.getItem(akunUserKey));
        // cek apakah data akun semua user sudah ada di storage
        if (data !== null) {
            // cek apakah username nya sudah terdaftar atau belum di storage
            if(usernameRegisterInput.value.toLowerCase() !== getUsernameData()) {
                // cek konfirmasi password
                if(passwordRegisterInput.value.toLowerCase() === confirmpasswordRegisterInput.value.toLowerCase()) {
                    saveDataToStorage(usernameRegisterInput.value.toLowerCase(), passwordRegisterInput.value.toLowerCase(), role.value.toLowerCase());
                    alert('Username dan password berhasil dibuat');
                    showLoginPage();
                } else if(passwordRegisterInput.value.toLowerCase() !== confirmpasswordRegisterInput.value.toLowerCase()) {
                document.getElementById('notFilledAlert').style.display = 'block';                    
                    document.getElementById('notFilledAlert').innerHTML = `
                        <div class="alert alert-danger" role="alert">
                            Password dan confirm password tidak sama!
                        </div>                
                    `;
                }
            } else if(usernameRegisterInput.value.toLowerCase() === getUsernameData()) {
                document.getElementById('notFilledAlert').style.display = 'block';                
                document.getElementById('notFilledAlert').innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        Username sudah ada!
                    </div>                
                `;
            }
        } else {
            if(passwordRegisterInput.value.toLowerCase() === confirmpasswordRegisterInput.value.toLowerCase()) {
                saveDataToStorage(usernameRegisterInput.value.toLowerCase(), passwordRegisterInput.value.toLowerCase(), role.value.toLowerCase());
                alert('Username dan password berhasil dibuat');
                showLoginPage();
            } else if(passwordRegisterInput.value.toLowerCase() !== confirmpasswordRegisterInput.value.toLowerCase()) {
                document.getElementById('notFilledAlert').style.display = 'block';                
                document.getElementById('notFilledAlert').innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        Password dan confirm password tidak sama!
                    </div>                
                `;
            }
        }
    } else {
        document.getElementById('notFilledAlert').innerHTML = `
            <div class="alert alert-danger" role="alert">
                Username, password, atau role masih kosong!
            </div>        
        `;
    }
}