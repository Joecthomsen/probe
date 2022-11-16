import { ResponsiveEmbed } from "react-bootstrap";
import { json } from "react-router-dom";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : "https://probe.joecthomsen.dk";

class UserApi {
  async getUsers() {
    const response = await fetch(baseUrl +"/user/all", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
      },
    }).then(res => {
        if(!res.ok) {
            return Promise.reject({status:res.status});
        }
        return res.json()
    });
    return await response;
  }

  async getUser(email) {
    const response = await fetch(baseUrl + "/user/" + email, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }).then(res => {
      if(!res.ok) {
        return Promise.reject({status:res.status})
      }
      return res.json();
    });
    return await response;
  }
}

const userApi = new UserApi();
export default userApi;
