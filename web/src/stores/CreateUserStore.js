
import { makeAutoObservable } from "mobx"

class CreateUserStore{

    formValue = true;

    constructor() {
        makeAutoObservable(this,
            {},
            {autoBind:true}//For non-arrow-functions bind
        )
     }

     setFormValue = () => {
        this.formValue = false;
     }

     get getFormValue(){
        return this.formValue
     }
}
export const createUserFormStore = new CreateUserStore()