import {makeAutoObservable, runInAction} from "mobx";
import EditTrialsStudyCards from "../components/landingPage/TrialCard";
import * as React from "react";

class EditTrialStore {
    dontlook = [];
    cardList;
    webUrl = "https://probe.joecthomsen.dk/editTrial";
    //https://probe.joecthomsen.dk/editTrial
    //http://localhost:8080/editTrial
    dialogOpen = false;

    ownerID = null;// Should come from cookie or something.
    id = "";
    header = "";
    country = "";
    title = "";
    city = "";
    matchCodeID = "";
    zipCode = "";
    minAge = "";
    addresse = "";
    maxAge = "";
    date = "";
    requiredVisits = "";
    starttime = "";
    Img = "https://images.unsplash.com/photo-1567306301408-9b74779a11af";
    cardDescription = "";
    longDescription = "";
    participantsID = null;
    vek = "";

    constructor() {
        makeAutoObservable(this,
            {},
            {autoBind: true}//For non-arrow-functions bind
        )
    }

    clearDialogInfo() {
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
        this.setApplicants(null);
        this.setVek("");
        this.setId("");
    }

    getDialogInfo() {
        return {
            "id": this.getId(),
            "header": this.getHeader(),
            "country": this.getCountry(),
            "title": this.getTitle(),
            "city": this.getCity(),
            "disease": this.getMatch(),
            "zipCode": this.getZipCode(),
            "minAge": this.getMinAge(),
            "addresse": this.getAddress(),
            "maxAge": this.getMaxAge(),
            "date": this.getStartDate(),
            "requiredVisits": this.getRequiredVisit(),
            "starttime": this.getStartTime(),
            "cardDescription": this.getCardDesc(),
            "longDescription": this.getLongDesc(),
            "participantsID": this.getApplicants(),
            "ownerID": this.getOwnerId(),
            "vek": this.getVek()
        }
    }


    setDialogInfo(props) {
        this.setHeader(props.header);
        this.setCountry(props.country);
        this.setTitle(props.title);
        this.setCity(props.city);
        this.setMatch(props.disease);
        this.setZipCode(props.zipCode);
        this.setMinAge(props.minAge);
        this.setAddress(props.addresse);
        this.setMaxAge(props.maxAge);
        this.setStartDate(props.date);
        this.setRequiredVisit(props.requiredVisits);
        this.setStartTime(props.starttime);
        //this.setImg(props.image);
        this.setCardDesc(props.cardDescription);
        this.setLongDesc(props.longDescription);
        this.setApplicants(props.participantsID);
        this.setVek(props.vek)
    }

    updateCardList() {
        if (this.getOwnerId() != null) {
            let url = this.webUrl + "/getByOwnerID/" + this.getOwnerId();
            fetch(url, {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'token': localStorage.getItem('token'),
                        'email': "mail"
                    }
                }
            ).then(
                async (response) => await response.json().then(
                    (json) => runInAction(async () => {
                        this.cardList = (await json.map((element, index) => {
                            return <EditTrialsStudyCards key={index}
                                                         id={element.id}
                                                         header={element.header}
                                                         title={element.title}
                                                         country={element.county}
                                                         city={element.city}
                                                         description={element.cardDescription}
                                                         participants={element.participantsID.length}
                                                         click={element}
                            />
                        }));
                        this.renderhack();
                    })));
        }
    }

    putTial() {
        let url = this.webUrl + "/put"
        fetch(url, {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem('token'),
                    'email': "mail"
                },
                body: JSON.stringify(this.getDialogInfo())
            }
        ).then(async (response) => await response.json().then((resp) => alert("Updated: " + resp.title))).then(this.updateCardList);
    }

    deleteTrial() {
        let url = this.webUrl + "/delete/" + this.getId();
        fetch(url, {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'token': localStorage.getItem('token'),
                'email': "mail"
            }
        ).then(async (response) => await response.text().then((resp) => alert(resp))).then(this.updateCardList);
    }

    createTrial() {
        let url = this.webUrl + "/add"
        console.log( localStorage.getItem('token'))
        fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem('token'),
                    'email': "mail"
                },
                body: JSON.stringify(this.getDialogInfo())
            }
        ).then(async (response) => await response.json().then((resp) => alert("added: " + resp.title))).then(this.updateCardList);
    }

    renderhack() {
        this.dontlook.push("")
        this.dontlook.pop()

    }

    openDialog() {
        this.dialogOpen = true;
    }

    openAndSetDialog(props) {
        this.setDialogInfo(props)
        this.openDialog()
    }

    openAndClearDialog() {
        this.clearDialogInfo()
        this.openDialog()
    }

    closeDialog() {
        this.dialogOpen = false;
    }

    getDialog() {
        return this.dialogOpen;
    }

    getOwnerId() {
        return this.ownerID;
    }

    setOwnerID(value) {
        this.ownerID = value;
        this.updateCardList();
        this.renderhack();
    }

    getHeader() {
        return this.header;
    }

    setHeader(value) {
        this.header = value;
    }

    getCountry() {
        return this.country;
    }

    setCountry(value) {
        this.country = value;
    }

    getTitle() {
        return this.title;
    }

    setTitle(value) {
        this.title = value;
    }

    getCity() {
        return this.city;
    }

    setCity(value) {
        this.city = value;
    }

    getMatch() {
        return this.matchCodeID;
    }

    setMatch(value) {
        this.matchCodeID = value;
    }

    getZipCode() {
        return this.zipCode;
    }

    setZipCode(value) {
        this.zipCode = value;
    }

    getMinAge() {
        return this.minAge;
    }

    setMinAge(value) {
        this.minAge = value;
    }

    getAddress() {
        return this.addresse;
    }

    setAddress(value) {
        this.addresse = value;
    }

    getMaxAge() {
        return this.maxAge;
    }

    setMaxAge(value) {
        this.maxAge = value;
    }

    getStartDate() {
        return this.date;
    }

    setStartDate(value) {
        this.date = value;
    }

    getRequiredVisit() {
        return this.requiredVisits;
    }

    setRequiredVisit(value) {
        this.requiredVisits = value;
    }

    getStartTime() {
        return this.startTime;
    }

    setStartTime(value) {
        this.startTime = value;
    }

    getImg() {
        return this.Img;
    }

    setImg(value) {
        this.Img = value;
    }

    getCardDesc() {
        return this.cardDescription;
    }

    setCardDesc(value) {
        this.cardDescription = value;
    }

    getId() {
        return this.id;
    }

    setId(value) {
        this.id = value;
    }

    getLongDesc() {
        return this.longDescription;
    }

    setLongDesc(value) {
        this.longDescription = value;
    }

    getApplicants() {
        return this.participantsID;
    }

    setApplicants(value) {
        this.participantsID = value;
    }

    setVek(value) {
        this.vek = value;

    }

    getVek() {
        return this.vek;
    }
}


export const EditTrialStoreOBJ = new EditTrialStore();

