import axios from 'axios';

export const getProducts = () => {
    return {
        type: 'GET_PRODUCTS',
        payload: axios({
            method: "GET",
            url: `http://192.168.1.16:4000/pos`
        })
    }
}

export const postProducts = (data) => {
    return {
        type: 'CREATE_PRODUCTS',
        payload: axios({
            method: "POST",
            url: `http://192.168.1.16:4000/pos`,
            data: data
        })
    }
}

export const searchProduct = (name) => {
    return {
        type: 'GET_SEARCHPRODUCTS',
        payload: axios({
            method: "GET",
            url: `http://192.168.1.16:4000/pos?name=${name}&orderBy=ASC`
        })
    }
}
// export const sortProduct = (data) => {
//     const authorization = localStorage.getItem('token');
//     const userId = localStorage.getItem("user-id");
//     return {
//         type: 'GET_SORTPRODUCTS',
//         payload: axios({
//             method: "GET",
//             url: `http://192.168.1.9:4000/pos?idCat=${data}&orderBy=ASC`,
//             headers: {
//                 "authorization": authorization,
//                 "user-id": userId
//             }
//         })
//     }
// }

// export const orderBy = (data) => {
//     return {
//         type: 'GET_ORDERPRODUCTS',
//         payload: axios({
//             method: "GET",
//             url: `http://192.168.1.9:4000/pos?orderBy=${data}`
//         })
//     }
// }

export const deleteProducts = (productId) => {
    return {
        type: "DELETE_PRODUCTS",
        payload: axios({
            method: "DELETE",
            url: `http://192.168.1.16:4000/pos/${productId}`
        })
    }
}

export const updateProduct = (idGet, data) => {
    console.log(data)
    return {
        type: "UPDATE_PRODUCTS",
        payload: axios({
            method: "PATCH",
            url: `http://192.168.1.16:4000/pos/${idGet}`,
            data: data
        })
    }
}

// export const paginationProduct = (page) => {
//     return {
//         type: 'PAGINATION',
//         payload: axios({
//             method: 'GET',
//             url: `${process.env.REACT_APP_API_URL}/pos?page=${page}`,
//         })
//     }
// }