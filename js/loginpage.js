function createLoginPage() {
    document.getElementById('root').innerHTML = `
        <div class="rounded-2 p-3 bg-white card mt-5">
            <header>
                <h1 class="text-center" id="loginTitle">Login</h1>
            </header>
            <div id="failedLoginMessage"></div>
            <form id="login">
                <div class="mb-3">
                    <label for="usernameInput" class="form-label">Username</label>
                    <input type="text" class="form-control" id="usernameInput" autofocus autocomplete="off" required>
                </div>
                <div class="mb-3">
                    <label for="passwordInput" class="form-label">Password</label>
                    <input type="password" class="form-control" id="passwordInput" autocomplete="off" required>
                </div>
                <div class="mb-3 text-danger d-none">username atau password salah</div>
                <button type="submit" class="btn btn-primary" id="loginButton">Login</button>
                <button type="button" class="btn btn-light" id="registerButton">Register</button>
                </form>
        </div>
    `;
    document.getElementById('loginButton').addEventListener('click', function(e) {
        Login();
        e.preventDefault();
    });
    document.getElementById('registerButton').addEventListener('click', showRegisterPage);
}

function showLoginPage() {
    createLoginPage();
}

