import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});
const config ={
    headers:{
        'authorization' : `Bearer ${localStorage.getItem('token')}`,
    }
}
// creating route
export const testApi = () => Api.get('/');

// register route
export const registerApi = (data) => Api.post('/api/user/register', data);

// Login route
export const loginApi = (data) => Api.post('/api/user/login', data);

//update profile route
export const updateprofileApi = (data) => Api.post('/api/user/update_profile', data);


// export const testApi = () => Api.get("/api/user/test");

//add product route
export const  addProductApi  = (data) => Api.post('/api/product/add', data, config);

//get all products
export const  getAllProductsApi  = (data) => Api.get('/api/product/get_products');

//update order status
export const updateOrderStatusApi = (id, data) => Api.put(`/api/orders/change_status/${id}`, data, config);

//get single product
export const  getSingleProductApi  = (id) => Api.get(`/api/product/get_product/${id}`);

//update product route
export const  updateProductApi  = (id,data) => Api.put(`/api/product/update_product/${id}` , data, config);

// delete product route
export const deleteProductApi = (id) => Api.delete(`/api/product/delete_product/${id}`, config);

//create order
export const createOrderApi = (data) => Api.post('/api/orders/create', data, config);

//get orders by user
export const getOrdersByUserApi =(data) => Api.get('/api/orders/getOrdersByUserId', config);

//get all orders
export const getAllOrdersApi = () => Api.get('/api/orders/getAllOrders', config);

//add necklace route
export const addNecklaceApi = (data) => Api.post('/api/necklace/add',data, config);

//get all necklace
export const getAllNecklacesApi = (data) => Api.get('/api/necklace/get_necklaces');

//get single necklace
export const getSingleNecklaceApi = (id) => Api.get(`/api/necklace/get_necklace/${id}`,config);

//update necklace route
export const  updateNecklaceApi  = (id,data) => Api.put(`/api/necklace/update_necklace/${id}` , data, config);

//delete necklace route
export const deleteNecklaceApi = (id) => Api.delete(`/api/necklace/delete_necklace/${id}`, config);

//add earing route
export const  addEaringApi  = (data) => Api.post('/api/earing/add', data, config);

//get all earing
export const getAllEaringsApi = (data) => Api.get('/api/earing/get_earings');

//get single earing
export const getSingleEaringApi = (id) => Api.get(`/api/earing/get_earing/${id}`,config);

//update earing route
export const  updateEaringApi  = (id,data) => Api.put(`/api/earing/update_earing/${id}` , data, config);

//delete earing route
export const deleteEaringApi = (id) => Api.delete(`/api/earing/delete_earing/${id}`, config);

//add bracelet route
export const  addBraceletApi  = (data) => Api.post('/api/bracelet/add', data, config);

//get all bracelet 
export const getAllBraceletsApi = (data) => Api.get('/api/bracelet/get_bracelets');

//get single bracelet
export const getSingleBraceletApi = (id) => Api.get(`/api/bracelet/get_bracelet/${id}`,config);

//update bracelet route
export const  updateBraceletApi  = (id,data) => Api.put(`/api/bracelet/update_bracelet/${id}` , data, config);

//delete bracelet route
export const deleteBraceletApi = (id) => Api.delete(`/api/bracelet/delete_bracelet/${id}`, config);

//add ring route
export const  addRingApi  = (data) => Api.post('/api/ring/add', data, config);

//get all ring
export const getAllRingsApi = (data) => Api.get('/api/ring/get_rings');

//get single ring
export const getSingleRingApi = (id) => Api.get(`/api/ring/get_ring/${id}`,config);

//update ring route
export const  updateRingApi  = (id,data) => Api.put(`/api/ring/update_ring/${id}` , data, config);

//delete ring route
export const deleteRingApi = (id) => Api.delete(`/api/ring/delete_ring/${id}`, config);

//product search
export const searchProductsApi = (query) => Api.get(`/api/product/search_product/${query}`);

//necklace search
export const searchNecklaceApi = (query) => Api.get(`/api/necklace/search_necklace/${query}`);

//earing search
export const searchEaringApi = (query) => Api.get(`/api/earing/search_earing/${query}`);

//earing search
export const searchBraceletApi = (query) => Api.get(`/api/bracelet/search_bracelet/${query}`);

//earing search
export const searchRingApi = (query) => Api.get(`/api/ring/search_ring/${query}`);

//count products
export const getCount = () => Api.get('/api/product/count');


