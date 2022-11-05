const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080" : "https://probe.joecthomsen.dk"; 

const getUsers = () => {
    const Http = new XMLHttpRequest();
    const url = baseUrl + "/user/all"
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
        console.log(Http.response);
    }
}

export default getUsers;