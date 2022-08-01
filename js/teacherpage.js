function createTeacherPage() {
    document.getElementById('root').innerHTML = `
        <nav class="navbar navbar-dark bg-primary">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">Teacher Page</span>
            </div>
        </nav>
        <h2 class="text-center mt-3">Create task</h2>
        <form method="post" id="formAddNewTask>
            <div class="mb-3">
            <label for="taskTitle" class="form-label">Task title</label>
            <input type="text" class="form-control" id="taskTitle" placeholder="Task title" autofocus autocomplete="off">
            </div>
            <div class="mb-3">
            <label for="taskDesc" class="form-label">Task description</label>
            <textarea class="form-control" id="taskDesc" rows="3" autocomplete="off"></textarea>
            </div>
            <button type="button" class="btn btn-primary" id="submitTaskButton">Submit</button>                                            
        </form>
        <h2 class="text-center mt-5">Task</h2>
        <div class="alert alert-info mt-2" role="alert" id="alertEmptyTask">
            You haven't add any task.
        </div>        
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-2" id="taskContainer"></div>        
        <button type="button" class="btn btn-secondary mt-3" id="logoutButton">Logout</button>                    
    `;
    document.getElementById('logoutButton').addEventListener('click', function(e) {
        let confirmLogout = confirm('Yakin ingin logout ?');
        if(confirmLogout) {
            Logout();
        }
        e.preventDefault();
    });    

    document.getElementById('submitTaskButton').addEventListener('click', function(e) {
        submitNewTask();
        e.preventDefault();
    });

let taskStorage = JSON.parse(localStorage.getItem(taskKey));
if(taskStorage) {
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
        
        cardBody.appendChild(h5Title);
        cardBody.appendChild(pDesc);
        
        taskContainer.appendChild(col);
    });
} else {
    alertEmptyTask();
}
}

function showTeacherPage() {
    createTeacherPage();
}

function submitNewTask() {
    let taskTitle = document.getElementById('taskTitle');
    let taskDesc = document.getElementById('taskDesc');

    let date = new Date();
    let getDate = date.getDate();
    let getMonth = date.getMonth() + 1;
    let getFullYear = date.getFullYear();

    if(getDate < 10) {
        getDate = `0${getDate}`;
    }

    switch (getMonth) {
        case 1:
            getMonth = `Januari`;
            break;
        case 2:
            getMonth = `Februari`;
            break;
        case 3:
            getMonth = `Maret`;
            break;
        case 4:
            getMonth = `April`;
            break;
        case 5: 
            getMonth = `Mei`;
            break;
        case 6:
            getMonth = `Juni`;
            break;
        case 7:
            getMonth = `Juli`;
            break;
        case 8:
            getMonth = `Agustus`;
            break;
        case 9: 
            getMonth = `September`;
            break;
        case 10:
            getMonth = `Oktober`;
            break;
        case 11:
            getMonth = `November`;
            break;
        case 12:
            getMonth = `Desember`;
            break;
        default:
            break;
    }

    let formatDate = `${getDate} ${getMonth} ${getFullYear}`;

    TASK_LIST.push({
        id: +new Date(),
        title: taskTitle.value,
        desc: taskDesc.value,
        date: formatDate
    });
    localStorage.setItem(taskKey, JSON.stringify(TASK_LIST));
    alert('Success for add new task.');
}

function hideAlertEmptyTask() {
    document.getElementById('alertEmptyTask').style.display = 'none';
}
function alertEmptyTask() {
    document.getElementById('alertEmptyTask').style.display = 'block';
}

