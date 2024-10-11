import {create} from 'zustand';
import {User} from '@supabase/supabase-js';
import {signIn, signUp} from '../utils';
import {createUser} from '../utils/db/user';

interface AuthState {
    userData: User;
    login: (email: string, password: string) => void;
    register: (email: string, password: string) => void;
    logout: () => void;
}

const initialUserData: User = {
    id: '',
    email: '',
    app_metadata: {},
    user_metadata: {},
    aud: '',
    created_at: '',
};

const useAuthStore = create<AuthState>((set) => ({
    userData: initialUserData,
    login: (email: string, password: string) => {
        signIn(email, password).then((user) => {
            if (user) {
                set({userData: user});
            }
        });
    },
    register: (email: string, password: string) => {
        signUp(email, password).then((user) => {
            if (user) {
                createUser(user);
                set({userData: user});
            }
        });
    },
    logout: () => set({userData: initialUserData}),
}));

export const useIsAuthenticated = () =>
    useAuthStore((state) => state.userData.id);
export const useLogin = () => useAuthStore((state) => state.login);
export const useLogout = () => useAuthStore((state) => state.logout);
export const useRegister = () => useAuthStore((state) => state.register);
export const useUserData = () => useAuthStore((state) => state.userData);
export default useAuthStore;
