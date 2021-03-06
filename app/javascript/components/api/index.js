let getPosts = function () {
    return fetch("/posts")
    .then(response => {
        return response.json()
    })
}

let createPost = function (attributes) {
    return fetch("/posts", {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({post: attributes})
    })
    .then(resp=>{
        let json = resp.json()
        return json
    })
}
let editPost = (id, form) => {
    return fetch(`/posts/${id}`, {
        body: JSON.stringify(form),
        headers:{
            "Content-Type": "application/json"
        },
        method: 'PATCH'
    })
    .then((response) => {
        let json = response.json()
        return json
    })
}

let deletePost = (id) => {
    return fetch(`/posts/${id}`, {
        body: JSON.stringify(id),
        headers:{
            "Content-Type": "application/json"
        },
        method: 'DELETE'
    })
        .then((resp) =>{
            return resp
        })
}

let likePost = (id, form) => {
    return fetch(`/likes`, {
        body: JSON.stringify({like: {post_id: id}}),
        headers:{
            "Content-Type": "application/json"
        },
        method: 'POST'
    })
    .then((response) => {
        let json = response.json()
        return json
    })
}

let unlikePost = (id) => {
    return fetch(`/likes/${id}`, {
        headers:{
            "Content-Type": "application/json"
        },
        method: 'DELETE'
    })
    .then((response) => {
        return response
    })
}


let findPost = function(id) {
    return fetch(`/posts/${id}`)
    .then((resp) => {
        let json = resp.json()
        return json
    })
}

let getUsers = function () {
    return fetch("/users")
    .then(response => {
        return response.json()
    })
}

let findUser = function(id) {
    return fetch(`/users/${id}`)
    .then((resp) => {
        let json = resp.json()
        return json
    })
}

let editUser = (id, form) => {
    return fetch(`/users/${id}`, {
        body: JSON.stringify(form),
        headers:{
            "Content-Type": "application/json"
        },
        method: 'PATCH'
    })
    .then((response) => {
        let json = response.json()
        return json
    })
}

export {
    getPosts, createPost, editPost, findPost, deletePost, likePost, unlikePost, findUser, editUser, getUsers
}
