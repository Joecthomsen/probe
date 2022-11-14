import { ResponsiveEmbed } from "react-bootstrap";
import { json } from "react-router-dom";

const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080" : "https://probe.joecthomsen.dk"; 
function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json()})
    }
    return res.json();
}


async function getUsers() {
    const response = await fetch("http://localhost:8080/user/all", 
    {
        method: 'GET', 
        headers: {
            "Content-type": "application/json",
            'Accept': 'application/json',
        }
    })
    return await response.json()
};


const getUsers1 = () => {
    const Http = new XMLHttpRequest();
    const url = baseUrl + "/user/all"
    Http.open("GET", url);
    Http.send();
    var res;
    Http.onreadystatechange=(e)=>{
        res= Http.responseText;
    }
    return res;

}

export default getUsers;