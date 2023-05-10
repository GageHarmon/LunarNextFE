const API_URL = 'http://127.0.0.1:5555'

export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    created_at: string;
};


export async function fetchUsers() {
    const response = await fetch(`${API_URL}/api/users`)
    const data = await response.json()
    return data
    }

export const fetchUserById = async (id: number): Promise<User | undefined> => {
    try {
        const res = await fetch(`${API_URL}/api/users/${id}`)
        if (!res.ok) {
            console.error(`Error fetching user by ID: ${res.status} ${res.statusText}`)
            console.error(await res.text())
            return undefined
        }
        const data: User = await res.json()
        return data
    } catch (error) {
        console.error(`Error fetching user by ID: ${error}`)
        return undefined
    }
}