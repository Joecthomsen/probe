import axios from "axios";

const loginUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/authentication/signin" : "https://probe.joecthomsen.dk/authentication/signin"; //Check if dev environment

export const loginRequest = async (email, password) => {
    try {
        const response = await axios.post(loginUrl , { email: email, password: password})
        const data = response.data
        console.log("Data: " + JSON.stringify(data))
    }catch (error){
        console.log("error: " + error.response)
    }
}
//export default loginRequest()