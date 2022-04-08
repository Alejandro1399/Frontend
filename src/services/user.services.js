export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([404].indexOf(response.status) !== -1) {
                localStorage.removeItem('token')
                localStorage.removeItem('email')
                localStorage.removeItem('role')
                localStorage.removeItem('img')
                localStorage.removeItem('name')
            }
        }
        return data;
    });
}

export function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: (JSON.stringify({ email, password }))
    };
    return fetch(`http://localhost:8080/api/users/auth/login`, requestOptions)
        .then(handleResponse);
}

export function profileService(id, name, email, role) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: (JSON.stringify({ name, email, role }))
    };
    return fetch(`http://localhost:8080/api/users/${id}`, requestOptions)
        .then(handleResponse);
}

export function imageService(id, img) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: (img)
    };
    return fetch(`http://localhost:8080/api/users/${id}`, requestOptions)
        .then(handleResponse);
}
export function operariosService() {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`http://localhost:8080/api/users/all`, requestOptions)
        .then(handleResponse);
}



export function registro(nombre, apellido, email, password, role) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: (JSON.stringify({ name: `${nombre} ${apellido}`, email, password, role }))
    };
    return fetch(`http://localhost:8080/api/users/user`, requestOptions)
        .then(handleResponse);
}
