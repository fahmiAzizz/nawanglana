import axios from "axios"


export const getPosts = async () => {
    const response = await axios.get(`mysql://ulimktqk3e36whmu:lT3HZnIbjVhimi8NesLZ@bfcnyud7idsqej0unpwj-mysql.services.clever-cloud.com:3306/bfcnyud7idsqej0unpwjs`);
    console.log(response.data.result);
    return response.data.results;
}

