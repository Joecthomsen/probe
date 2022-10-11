
import { makeAutoObservable } from "mobx"


class UserStore{

    id;
    passWo
    cpr;
    sex;
    firstName;
    lastName;
    dob;
    weight;
    chronicDisease;
    email;
    phoneNumber;
    streetName;
    doorNumber;
    zipCode;
    city;
    region;
    country;

    createMedicalUser = false;
    error = false;
    errorMsg = "";


    constructor() {
        makeAutoObservable(this,
            {},
            {autoBind:true}//For non-arrow-functions bind
        )
     }

    setEmail(email){
        this.email = email
    }
    setPassword(password){
    this.password = password
    }
    setRepeatPassword(repeatPassword){
    this.repeatPassword = repeatPassword
    }
    setFirstName(firstName){
    this.firstName = firstName;
    }
    setLastName(lastName){
        this.lastName = lastName
    }
    setDob(dob){
        this.dob = dob;
    }
    setCity(city){
        this.city = city
    }
    setRegion(region){
        this.region = region
    }
    setCountry(country){
        this.country = country
    }
    setGender(gender){
        this.gender = gender
    }
    setDiagnose(diagnose){
        this.diagnose = diagnose
    }
    setOccupation(occupation){
        this.occupation = occupation
    }
    setDescription(description){
        this.description = description
    }
    setAgeWhenDiagnosed(ageWhenDiagnosed){
        this.ageWhenDiagnosed = ageWhenDiagnosed
    }



    setSex(value) {
        this.sex = value;
    }

    setPhoneNumber(value) {
        this.phoneNumber = value;
    }

    setCreateMedicalUser(value){
        this.createMedicalUser = value
    }
    setError(value){
        this.error = value
    }
    setErrorMsg(msg){
        this.errorMsg = msg
    }

    getUserObject(){
        return{
            cpr: this.dob,
            firstName: this.firstName,
            lastName: this.lastName,
            age: 999,
            weight: 999,
            chronicDisease: this.diagnose,
            streetName: 'TODO',
            doorNumber: 999,
            zipCode: 999,
            city: this.city,
            region: this.region,
            country: this.country
        }
    }
}
export const userStore = new UserStore()