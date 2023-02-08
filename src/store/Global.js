import {defineStore} from "pinia";

export const GlobalStore = defineStore('GlobalStore', {
    state: () => ({
        surname: '',
        name: '',
        email: '',
        phone: '',
        about: '',
        image: '',
        position: '',
        employer: '',
        begginningDate: '',
        endData: '',
        description: '',
        education: '',
    }),

})



