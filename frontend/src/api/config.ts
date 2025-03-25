const API_URL = "http://192.168.1.19:5000/api";

const ENDPOINT = {
    REGISTER: `${API_URL}/auth/register`,
    LOGIN: `${API_URL}/auth/login`,
    CHECKUSERNAME: `${API_URL}/auth/check/username`,
};

export default ENDPOINT;
