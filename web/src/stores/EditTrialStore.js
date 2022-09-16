import {makeAutoObservable} from "mobx";


class EditTrialStore{

    dialogOpen = false;
    OwnerID=0;


    Header="";
    Country="";
    Title="";
    City="";
    Match="";
    ZipCode="";
    MinAge="";
    Address="";
    MaxAge="";
    StartDate="";
    RequiredVisit="";
    StartTime="";
    Img="https://images.unsplash.com/photo-1567306301408-9b74779a11af";
    CardDesc="";
    LongDesc="";
    Applicants="";

    constructor() {
        makeAutoObservable(this,
            {},
            {autoBind:true}//For non-arrow-functions bind
        )
    }

    clearDialogInfo(){
        this.setHeader("");
        this.setCountry("");
        this.setTitle("");
        this.setCity("");
        this.setMatch("");
        this.setZipCode("");
        this.setMinAge("");
        this.setAddress("");
        this.setMaxAge("");
        this.setStartDate("");
        this.setRequiredVisit("");
        this.setStartTime("");
        this.setImg("https://images.unsplash.com/photo-1567306301408-9b74779a11af");
        this.setCardDesc("");
        this.setLongDesc("");
        this.setApplicants("");
    }

    setDialogInfo(props){
        this.setHeader(props.header);
        this.setCountry(props.county);
        this.setTitle(props.title);
        this.setCity(props.city);
        this.setMatch(props.match.toString());
        this.setZipCode(props.zipCode);
        this.setMinAge(props.minAge);
        this.setAddress(props.streetName+" "+ props.doorNumber);
        this.setMaxAge(props.maxAge);
        this.setStartDate(props.date);
        this.setRequiredVisit(props.requiredVisits);
        this.setStartTime(props.time);
        //this.setImg(props.image);
        this.setCardDesc(props.cardDescription);
        this.setLongDesc(props.longDescription);
        this.setApplicants(props.participants);
    }

    openDialog(){
        this.dialogOpen=true;
    }



    openAndSetDialog(props){
        this.setDialogInfo(props)
        this.openDialog()
    }

    openAndClearDialog(){
        this.clearDialogInfo()
        this.openDialog()
    }

    closeDialog(){
        this.dialogOpen=false;
    }

    getDialog(){
        return this.dialogOpen;
    }

    getOwnerId(){
        return this.OwnerID
    }

    getHeader() {
        return this.Header;
    }

    setHeader(value) {
        this.Header = value;
    }

    getCountry() {
        return this.Country;
    }

    setCountry(value) {
        this.Country = value;
    }

    getTitle() {
        return this.Title;
    }

    setTitle(value) {
        this.Title = value;
    }

    getCity() {
        return this.City;
    }

    setCity(value) {
        this.City = value;
    }

    getMatch() {
        return this.Match;
    }

    setMatch(value) {
        this.Match = value;
    }

    getZipCode() {
        return this.ZipCode;
    }

    setZipCode(value) {
        this.ZipCode = value;
    }

    getMinAge() {
        return this.MinAge;
    }

    setMinAge(value) {
        this.MinAge = value;
    }

    getAddress() {
        return this.Address;
    }

    setAddress(value) {
        this.Address = value;
    }

    getMaxAge() {
        return this.MaxAge;
    }

    setMaxAge(value) {
        this.MaxAge = value;
    }

    getStartDate() {
        return this.StartDate;
    }

    setStartDate(value) {
        this.StartDate = value;
    }

    getRequiredVisit() {
        return this.RequiredVisit;
    }

    setRequiredVisit(value) {
        this.RequiredVisit = value;
    }

    getStartTime() {
        return this.StartTime;
    }

    setStartTime(value) {
        this.StartTime = value;
    }

    getImg() {
        return this.Img;
    }

    setImg(value) {
        this.Img = value;
    }

    getCardDesc() {
        return this.CardDesc;
    }

    setCardDesc(value) {
        this.CardDesc = value;
    }

    getLongDesc() {
        return this.LongDesc;
    }

    setLongDesc(value) {
        this.LongDesc = value;
    }

    getApplicants() {
        return this.Applicants;
    }

    setApplicants(value) {
        this.Applicants = value;
    }

}
export const EditTrialStoreOBJ = new EditTrialStore()

