import axios from "axios";

export default axios.create({
  baseURL: 'https://ej-site-db-mongo-production.up.railway.app'
})