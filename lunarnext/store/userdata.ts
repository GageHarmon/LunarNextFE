import create from 'zustand';
import { fetchUsers } from '../src/pages/api/userapi';

type User = {
    id: number;
    username: string;
    email: string;
    role: string;
    created_at: string;
};

type UserState = {
    users: User[];
    fetchAndSetUsers: () => Promise<void>;
};

export const useUserStore = create<UserState>((set) => ({
    users: [],
    fetchAndSetUsers: async () => {
        const data = await fetchUsers();
        set({ users: data });
    }
}));
