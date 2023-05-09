// userdata.ts in lunarnext/store/
import { create } from 'zustand';
import { fetchUsers } from '../src/pages/api/userapi';

type User = {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    is_admin: boolean | null;
    created_at: string;
};

type UserState = {
    users: User[];
    currUser: User | null;
    loggedIn: boolean;
    admin: boolean;
    fetchAndSetUsers: () => Promise<void>;
    setCurrUser: (user: User | null) => void;
    setAdmin: (admin:boolean) => void;
    setLoggedIn: (loggedIn: boolean) => void;
};

export const useUserStore = create<UserState>((set) => ({
    users: [],
    fetchAndSetUsers: async () => {
        const data = await fetchUsers();
        set({ users: data });
    },
    currUser: null,
    loggedIn: false,
    admin: false,
    setAdmin: (admin) => set({ admin }),
    setCurrUser: (user) => set({ currUser: user }),
    setLoggedIn: (loggedIn) => set({ loggedIn }),
}));



// import { create } from 'zustand';
// import { fetchUsers } from '../src/pages/api/userapi';

// type User = {
//     id: number;
//     username: string;
//     email: string;
//     role: string;
//     created_at: string;
// };

// type UserState = {
//     users: User[];
//     fetchAndSetUsers: () => Promise<void>;
// };

// export const useUserStore = create<UserState>((set) => ({
//     users: [],
//     fetchAndSetUsers: async () => {
//         const data = await fetchUsers();
//         set({ users: data });
//     }
// }));
