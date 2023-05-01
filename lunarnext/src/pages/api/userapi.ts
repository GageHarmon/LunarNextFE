const API_URL = 'http://127.0.0.1:5555'

export async function fetchUsers() {
    const response = await fetch(`${API_URL}/api/users`)
    const data = await response.json()
    return data
    }