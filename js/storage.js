const akunUserKey = "USER_ACCOUNT";
const ACCOUNT_LIST = []; 

const loginStatusKey = "LOGIN_STATUS";

const taskKey = "TASK";
const TASK_LIST = [];

function saveDataToStorage(username, password, role) {
    ACCOUNT_LIST.push(
        {
            id: +new Date(),
            username: username,
            password: password,
            role: role
        }
    );
    localStorage.setItem(akunUserKey, JSON.stringify(ACCOUNT_LIST));
}

function getUsernameData() {
    let userName;
    let data = JSON.parse(localStorage.getItem(akunUserKey));
    data.forEach(d => {
        userName = d.username;
    });
    return userName;
}

function getAllUsernameData() {
    return JSON.parse(localStorage.getItem(akunUserKey));
}

function getTask() {
    return JSON.parse(localStorage.getItem(taskKey));
}