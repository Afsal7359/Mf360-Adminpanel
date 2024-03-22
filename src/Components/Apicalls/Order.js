import instance from "./axiosinstance"

export const GetAllOrders = async()=>{
    try {
        const response = await instance.get('orders/get')
        return response.data
    } catch (error) {
        return error.response.data
    }
}