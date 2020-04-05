import Axios from "axios";

const instance = Axios.create({
    baseURL: 'https://burger-73238.firebaseio.com/'
});

export default instance;