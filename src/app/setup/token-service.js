import Cookies from "js-cookie";

class TokenService {

  getAccessToken() {
    const accessToken = Cookies.get("accessToken");
    return accessToken;
  }

  logOut() {
    Cookies.remove("accessToken");
    return;
  }
}

export default new TokenService();
