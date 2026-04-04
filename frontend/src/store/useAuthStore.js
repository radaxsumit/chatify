import {create} from 'zustand';

//Creating a HOOK which return us an object
export const useAuthStore = create((set) => ({
    authUser: {name: "Sumit Prajapati", _id: 123, age: 23},
    isloggedin: false,

    login: () => {
        console.log("We just Loged in Sumit Prajapati");
        set({isloggedin: true});
    }
}));