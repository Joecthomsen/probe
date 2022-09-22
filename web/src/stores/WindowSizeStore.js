import { makeAutoObservable } from "mobx"

class WindowSizeStore{

    windowWidth = window.innerWidth; 
    windowHeight = window.innerHeight;

    constructor() {
        makeAutoObservable(this,
            {},
            {autoBind:true}//For non-arrow-functions bind
        )
     }
}
export const windowSizeStore = new WindowSizeStore()