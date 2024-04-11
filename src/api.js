import axios from "axios"


export const getPosts = async () => {
    const response = await axios.get(`mysql://ulimktqk3e36whmu:lT3HZnIbjVhimi8NesLZ@bfcnyud7idsqej0unpwj-mysql.services.clever-cloud.com:3306/bfcnyud7idsqej0unpwjs`);
    console.log(response.data.result);
    return response.data.results;
}

axios.get('https://be-wedding-hye2.vercel.app/v1/wish')
  .then(response => {
    // Lakukan sesuatu dengan data yang diterima
    console.log(response.data);
  })
  .catch(error => {
    // Tangani error jika ada
    console.error('Error:', error);
  });