import { makeAutoObservable } from "mobx"

class LoadingStore{

    loading = false;

    // Constructor
    constructor() {
        makeAutoObservable(this,
            {},
            {autoBind:true}//For non-arrow-functions bind
        )
    }

    getLoading(){
        return this.loading;
    }
    setLoading(loading){
        this.loading = loading;
    }


}
export const loadingStore = new LoadingStore()