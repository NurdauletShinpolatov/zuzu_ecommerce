import axios from "axios";
const BASE_URL = 'https://fakestoreapi.com/products'


const instance = axios.create({
    baseURL: BASE_URL
})

export const productsServices = {
    getAllProducts: () => {
        return instance.get().then(res => {
            console.log(res);
            return res.data})
    },
    getSingleProduct: (id) => {
        return instance.get("/"+id).then(res => res.data)
    },
    getAllCategories:  () => {
        return instance.get("/categories").then(res => res.data)
    }
}