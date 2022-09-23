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

    setWindowWidth(windowWidth){
        this.windowWidth = windowWidth
    }
    setWindowHeight(windowHeight){
        this.windowHeight = windowHeight
    }
}
export const windowSizeStore = new WindowSizeStore()