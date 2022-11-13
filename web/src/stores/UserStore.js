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
    role = {
            "id": 1,
            "role": "CLINICAL_USER"};

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
    setRole(role){
        this.role = "MEDICAL_USER" ? this.role = {"id": 2, "role": role} : {"id": 1, "role": role}

    }

    getEmail(){
        return this.email
    }

    getRole(){
        return this.role
    }

    getCreateMedicalUser(){
        return this.createMedicalUser
    }

    getMedicalUserObject(){
        // const bcrypt = require('bcryptjs');
        // bcrypt.hash(this.password, 10, function(err, hash) {
        //
        // });
        console.log(this.password)
        return{
            dob: null,
            firstName: this.firstName,
            lastName: this.lastName,
            password: this.password,
            weight: null,
            chronicDisease: null,
            email: this.email,
            phoneNumber: null,
            streetName: null,
            doorNumber: null,
            zipCode: null,
            city: this.city,
            region: this.region,
            country: this.country,
            role: this.getCreateMedicalUser()
                ?
                [{"id": 2,
                 "roleName": "MEDICAL_USER"
                }]
                :
                [{"id": 1,
                "roleName": "CLINICAL_USER"
                }]
        }
    }

    getClinicalUserObject(){
        return{
            dob: this.dob,
            firstName: this.firstName,
            lastName: this.lastName,
            password: this.password,
            weight: this.weight,
            chronicDisease: this.chronicDisease,
            email: this.email,
            phoneNumber: this.phoneNumber,
            streetName: this.streetName,
            doorNumber: this.doorNumber,
            zipCode: this.zipCode,
            city: this.city,
            region: this.region,
            country: this.country,
            role: this.getCreateMedicalUser()
                ?
                [{"id": 2,
                    "roleName": "MEDICAL_USER"
                }]
                :
                [{"id": 1,
                    "roleName": "CLINICAL_USER"
                }]
        }
    }
}
export const userStore = new UserStore()