import { makeAutoObservable } from "mobx"

class HomepageStore{

    burgerMenuToggled = false;

    // Constructor
    constructor() {
        makeAutoObservable(this,
            {},
            {autoBind:true}//For non-arrow-functions bind
        )
     }

    toggleBurgerMenu(){
        this.burgerMenuToggled = !this.burgerMenuToggled
    }

}
export const homepageStore = new HomepageStore()