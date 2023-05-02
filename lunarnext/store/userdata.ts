// userdata.ts in lunarnext/store/
import { create } from 'zustand';
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
    setCurrUser: (user: User | null) => void;
    currUser: User | null;
    loggedIn: boolean;
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
