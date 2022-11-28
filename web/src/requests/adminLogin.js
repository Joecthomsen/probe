const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : "https://probe.joecthomsen.dk";

class AdminApi {
  async login(username, password) {
    var body = JSON.stringify({ username: username, password: password });
    const response = await fetch(baseUrl + "/admin/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Connection: "keep-alive",
      },
      body: body,
    }).then((res) => {
      if (!res.ok) {
        return Promise.reject({
          status: res.status,
        });
      }
      return res.text();
    });

    return response;
  }
}

const adminApi = new AdminApi();
export default adminApi;
