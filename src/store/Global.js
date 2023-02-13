import {defineStore} from "pinia";

const defaultState = {
    name: '',
    surname: '',
    about: '',
    email: '',
    phone: '',
    image: '',
    educations: [{'education': '', 'eduDegree': '', 'eduEndDate': '', 'eduDescription': ''}],
    experiences: [{'begginningDate': '', 'endData': '', 'position': '', 'employer': '', 'description': ''}],

}
export const GlobalStore = defineStore('GlobalStore', {
    state: () => ({...defaultState}),
    actions: {
        updateLocalStorage() {
            const storedInputValues = JSON.parse(localStorage.getItem("inputValues"));
            if (storedInputValues) {
                localStorage.setItem("inputValues", JSON.stringify(this));
            }
        },
        restoreFromLocalStorage() {
            const storedInputValues = JSON.parse(localStorage.getItem("inputValues"));
            if (storedInputValues) {
                this.name = storedInputValues.name;
                this.surname = storedInputValues.surname;
                this.email = storedInputValues.email;
                this.phone = storedInputValues.phone;
                this.about = storedInputValues.about;
                this.image = storedInputValues.image
                this.experiences = storedInputValues.experiences;
                this.educations = storedInputValues.educations;
            }
        },
        reset() {
            Object.assign(this, defaultState);
        },

        base64ImageAsFile(base64Image, filename) {
            const arr = base64Image.split(',')
            const mime = arr[0].match(/:(.*?);/)[1]
            const bstr = atob(arr[1])
            let n = bstr.length
            const u8arr = new Uint8Array(n)
            while (n) {
                u8arr[n - 1] = bstr.charCodeAt(n - 1)
                n -= 1
            }
            return new File([u8arr], filename, {type: mime})
        }
    },
    getters: {
        getDefaultState() {
            return defaultState;
        },
    }


})



