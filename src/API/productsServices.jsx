import axios from "axios";
const BASE_URL = 'https://fakestoreapi.com/products'


const instance = axios.create({
    baseURL: BASE_URL
})

export const productsServices = {
    getAll: () => {
        return instance.get().then(res => res.data)
    }
}