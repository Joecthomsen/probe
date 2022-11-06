const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080" : "https://probe.joecthomsen.dk"; 

const getUsers = () => {
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