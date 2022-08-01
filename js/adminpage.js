function createAdminPage() {
    document.getElementById('root').innerHTML = `
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">Administrator Page</span>
            </div>
        </nav>
        <h2 class="mt-5">User Account List</h2>
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col" class="bg-primary text-light">No.</th>
                <th scope="col" class="bg-primary text-light">ID</th>
                <th scope="col" class="bg-primary text-light">Username</th>
                <th scope="col" class="bg-primary text-light">Role</th>
            </tr>
            </thead>
            <tbody id="bodyUserAccountList"></tbody>
        </table>
        <button type="button" class="btn btn-secondary" id="logoutButton">Logout</button>       
    `;
    let data = getAllUsernameData();
    data.forEach((d, idx) => {
            let bodyUserAccountList = document.getElementById('bodyUserAccountList');
            let tr = document.createElement('tr');
            let th = document.createElement('th');
            th.innerText = `${idx + 1}`;
            th.setAttribute('scope', 'row');
            let td1 = document.createElement('td');
            td1.innerText = `${d.id}`;
            let td2 = document.createElement('td');
            td2.innerText = `${d.username}`;
            let td3 = document.createElement('td');
            td3.innerText = `${d.role}`;
            tr.appendChild(th);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            bodyUserAccountList.appendChild(tr);
    });

    document.getElementById('logoutButton').addEventListener('click', function(e) {
        let confirmLogout = confirm('Yakin ingin logout ?');
        if(confirmLogout) {
            Logout();
        }
        e.preventDefault();
    });
}

function showAdminPage() {
    createAdminPage();
}