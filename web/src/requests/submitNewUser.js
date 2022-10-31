// import {userStore} from "../stores/UserStore";
// import axios from "axios";
//
// const addUserUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/user/add" : "https://probe.joecthomsen.dk/user/add"; //Check if dev environment
//
//
// export const submitUser = async () => {
//
//     console.log("Inside submitUser")
//     try {
//         axios.post(addUserUrl, {
//             dob: userStore.dob,
//             firstName: userStore.firstName,
//             lastName: userStore.lastName,
//             hashedPassword: userStore.password,
//             weight: userStore.weight,
//             chronicDisease: userStore.chronicDisease,
//             email: userStore.email,
//             phoneNumber: userStore.phoneNumber,
//             streetName: userStore.streetName,
//             doorNumber: userStore.doorNumber,
//             zipCode: userStore.zipCode,
//             city: userStore.city,
//             region: userStore.region,
//             country: userStore.country,
//             role: userStore.role
//         })
//         .then(response => {
//             console.log(response)
//         })
//
//     }catch (error) {
//     console.log("error: " + error.response)
//     }
// }
