
import { makeAutoObservable } from "mobx"

class UserStore{
   
   email;
   password;
   repeatPassword;
   firstName;
   lastName;
   dob;
   city;
   region;
   country;
   gender;
   diagnose;
   occupation;
   description;
   ageWhenDiagnosed;

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
}
export const userStore = new UserStore()