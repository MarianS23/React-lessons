import axios from "axios"

// export const postComment = (data)=>{
//     fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             }
//         })
//             .then(res => res.json())
//             .then(data => console.log(data))
// }

export const postComment = (data) => {
    axios.post('https://jsonplaceholder.typicode.com/posts/1/comments', data)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}

// export const postUser = (data)=>{
//     fetch('https://jsonplaceholder.typicode.com/users', {
//             method: 'POST',
//             body:JSON.stringify(data),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             }
//         })
//             .then(res => res.json())
//             .then(data => console.log(data))
// }

export const postUser = (data) => {
    axios.post('https://jsonplaceholder.typicode.com/users', data)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}