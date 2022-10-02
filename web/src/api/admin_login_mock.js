const adminCredentials = {
    username: "annika",
    password: "annika"
}

class ApiMock {
    login = (username, password) =>{
        if(username === adminCredentials.username && password === adminCredentials.password) {
            return true;
        }
        return false;
    }
}

const mock = new ApiMock();
export default mock;




