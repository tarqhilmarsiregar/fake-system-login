function createStudentPage() {
    document.getElementById('root').innerHTML = `
        <nav class="navbar navbar-dark bg-primary">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">Student Page</span>
            </div>
        </nav>
        <h2 class="text-center mt-5">Task</h2>       
        <div class="alert alert-info" role="alert" id="alertEmptyTask">
            You do not have any task.
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4" id="taskContainer"></div>
        <button type="button" class="btn btn-secondary mt-3" id="logoutButton">Logout</button>            
    `;
    document.getElementById('logoutButton').addEventListener('click', function(e) {
        let confirmLogout = confirm('Yakin ingin logout ?');
        if(confirmLogout) {
            Logout();
        }
        e.preventDefault();
    });        

    let checktaskStorage = JSON.parse(localStorage.getItem(taskKey));
    if(checktaskStorage) {
        let task = getTask();
        task.forEach((t) => {
            hideAlertEmptyTask();
            let taskContainer = document.getElementById('taskContainer');

            let col = document.createElement('div');
            col.classList.add('col');
            
            let card = document.createElement('div');
            card.classList.add('card');
            card.classList.add('h-100');
            card.classList.add('border-info');
            col.appendChild(card);
            
            let cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            card.appendChild(cardBody);
            
            let h5Title = document.createElement('h5');
            h5Title.classList.add('card-title');
            h5Title.innerText = `${t.title}`;
            
            let pDesc = document.createElement('p');
            pDesc.classList.add('card-text');
            pDesc.innerText = `${t.desc}`;

            let pDate = document.createElement('p');
            pDate.classList.add('card-text');
            let small = document.createElement('small');
            small.classList.add('text-muted');
            small.textContent = `${t.date}`;
            pDate.appendChild(small);

            cardBody.appendChild(h5Title);
            cardBody.appendChild(pDesc);
            cardBody.appendChild(pDate);
            
            taskContainer.appendChild(col);
        });
    } else {
        alertEmptyTask();
    }    
}

function showStudentPage() {
    createStudentPage();
}