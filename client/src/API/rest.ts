import { access } from "fs"


export const registerUser = async (data: any) => {
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const response = await fetch('http://localhost:5000/api/auth/register', option)
        .then(data => data.json())
    return response
}
export const loginUser = async (data: any) => {
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const response = await fetch('http://localhost:5000/api/auth/login', option)
        .then(data => data.json())
    localStorage.setItem('token', response.token)
    return response
}
export const checkAuth = async () => {
    const accessToken = localStorage.getItem('token')
    const option = {
        method: 'GET',
        headers: {
            'Authorization': `${accessToken}`
        },
    }
    const response = await fetch('http://localhost:5000/api/auth/checkAuth', option)
        .then(data => data.json())

    return response
}
export const getProduct = async ({ type, order }: any) => {
    const accessToken = localStorage.getItem('token')
    const option = {
        method: 'GET',
        headers: {
            'Authorization': `${accessToken}`
        },
    }
    const response = await fetch(`http://localhost:5000/api/product/${type}?order=${order}`, option)
        .then(data => data.json())

    return response
}