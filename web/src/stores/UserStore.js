
import { makeAutoObservable } from "mobx"


class UserStore{

    password;
    repeatPassword;
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
    setWeight(weight){
        this.weight = weight;
    }
    setChronicDisease(value){
        this.chronicDisease = value;
    }
    setStreetName(value){
        this.streetName = value;
    }
    setDoorNumber(value){
        this.doorNumber = value;
    }
    setZipCode(value){
        this.zipCode = value;
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
    // setDiagnose(diagnose){
    //     this.diagnose = diagnose
    // }
    // setOccupation(occupation){
    //     this.occupation = occupation
    // }
    // setDescription(description){
    //     this.description = description
    // }
    // setAgeWhenDiagnosed(ageWhenDiagnosed){
    //     this.ageWhenDiagnosed = ageWhenDiagnosed
    // }



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
            medicalUser: this.createMedicalUser,
            dob: this.dob,
            firstName: this.firstName,
            lastName: this.lastName,
            weight: this.weight,
            chronicDisease: this.chronicDisease,
            email: this.email,
            phoneNumber: this.phoneNumber,
            streetName: 'TODO',
            doorNumber: this.doorNumber,
            zipCode: this.zipCode,
            city: this.city,
            region: this.region,
            country: this.country
        }
    }
}
export const userStore = new UserStore()