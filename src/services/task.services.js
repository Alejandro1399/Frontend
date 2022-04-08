import { handleResponse } from "./user.services"


export function createtask(task_name, user_id) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: (JSON.stringify({ task_name, user_id }))
    };
    return fetch(`http://localhost:8080/api/task/task`, requestOptions)
        .then(handleResponse);
}
export function alltaskadminService() {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`http://localhost:8080/api/task/alltask`, requestOptions)
        .then(handleResponse);
}
export function alltaskService(id) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`http://localhost:8080/api/task/task/${id}`, requestOptions)
        .then(handleResponse);
}

export function onetaskService(id) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`http://localhost:8080/api/task/gettask/${id}`, requestOptions)
        .then(handleResponse);
}

export function taskeditService(id, task_name, task_state) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: (JSON.stringify({ task_name, task_state }))
    };
    return fetch(`http://localhost:8080/api/task/${id}`, requestOptions)
        .then(handleResponse);
}