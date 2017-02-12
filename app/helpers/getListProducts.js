import axios from "axios";


const promiseData = () => axios.get("http://localhost:3000/api/v1/produits");

// export const coin = promiseData;

export default promiseData


