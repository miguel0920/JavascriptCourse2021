/**
 * Ejemplo Sincrono
 */

const segundo = () => {
    console.log('Llamada al segundo');
}

const primero = () => {
    console.log('Inicio del primero');
    segundo();
    console.log('Fin del primero');
}

primero();

/**
 * Ejemplo Asyncrono
 */

const segundoAsync = () => {
    setTimeout(() => {
        console.log('Llamado del segundo');
    }, 1000);
}

const primeroAsync = () => {
    console.log('Inicio del primero');
    segundoAsync();
    console.log('Fin del primero');
}

primeroAsync();


/**
 * Example Callbacks
 */

const Users = () => {
    setTimeout(() => {
        const userIDs = [101, 102, 103, 104];
        console.log(userIDs);

        setTimeout(userId => {
            const userInfo = {
                email: 'joseph@mail.com',
                age: 28
            };
            console.log(`${userId} - email: ${userInfo.email}, edad: ${userInfo.age}`);

            setTimeout(rolId => {
                let roles = ['Creador', 'Editor'];
                console.log(roles);
            }, 1500, userIDs[2]);
        }, 1500, userIDs[2]);
    }, 1500);
}

Users();

/**
 * Example Promise
 */

// Ejemplo 1
let promesa = new Promise((resolve, reject) => {
    if (true) {
        resolve('Operación exitosa Promise');
    } else {
        reject('Error');
    }
});

promesa
    .then(response => console.log(response))
    .catch(error => console.log(error));

// Ejemplo 2

let miPromesa = Promise.resolve('eat');
miPromesa.then(value => console.log(value));

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(4);
    }, 4000);
});

promise.then(response => {
    console.log(response += 5);
});

//Callback to Promise

let getUsersId = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([201, 202, 203, 204, 205, 206]);
    }, 1000);
});

let getUser = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(userId => {
            const userInfo = {
                email: 'maria@mail.com',
                age: 25
            };
            resolve(`${userId} - email: ${userInfo.email}, edad: ${userInfo.age}`);
        }, 1000, userId);
    });
}

let getRole = (permiso) => {
    return new Promise((resolve, reject) =>{
        setTimeout(permiso => {
            let roles = ['Eliminar', 'Crear'];
            resolve(roles);
        }, 1000, permiso);
    });
}

getUsersId
    .then(user => {
        console.log(user);
        return getUser(user[4]);
    })
    .then(userInfo => {
        console.log(userInfo);
        return getRole(userInfo.userId);
    })
    .then(roles =>{
        console.log(roles);
    })
    .catch(error => console.log(error));

// Promise to Async

async function GetUsers(){
    let usersId = await getUsersId;
    console.log(usersId);
    let user = await getUser(usersId[5]);
    console.log(user);
    let role = await getRole(user.userId);
    console.log(role);
    return user;
}

GetUsers().then(user => console.log(`${user} usuario async/function`));


// Ejemplo de una llamada AJAX con HTML

// https://jsonplaceholder.typicode.com/

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4) {
        let jsonUsers = JSON.parse(e.target.responseText);
        console.log(jsonUsers);
    }
});
request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
request.send();
