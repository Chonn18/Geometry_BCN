import instance from "axios"

// Thay url bằng địa chỉ ip của máy tính
// How to check -> vào cmd gõ ipconfig -> tìm ipv4 
const ENDPOINTS = {
    LISTPRODUCT: "http://192.168.1.50:8000/api/swagger/product",
    LIST_PRODUCT_CATEGORY: "http://192.168.1.50:8000/api/swagger/product?category={category}",
    TRYON: "http://192.168.1.50:8000/api/try-on/",
    RECOMMEND: "http://192.168.1.50:8000/api/recommend/",
    PATCH: "http://192.168.1.50:8000/api/swagger/product/{id}",
    LIST_FAVORITE_PRODUCTS: "http://192.168.1.50:8000/api/swagger/product?favorite=true",
}

const getListProduct = () => {
    return instance.get(ENDPOINTS.LISTPRODUCT)
}

const getProductByCategory = (category) => {
    const endpoint = ENDPOINTS.LIST_PRODUCT_CATEGORY.replace("{category}",category) 
    console.log("Endpoint:", endpoint);
    return instance.get(endpoint)
}

const tryOnProduct = async (cloth_name, image) => {
    // const formData = new FormData();

    const imageBase64 = await convertImageToBase64(image.uri) 

    const requestData = {
        cloth_name: cloth_name,
        image: imageBase64,
        part: "upper_body",
    };
    // console.log(requestData);
    return instance.post(ENDPOINTS.TRYON, requestData, {
        headers: {
            "Content-Type": "application/json",
        },
    });
}

const convertImageToBase64 = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(",")[1]);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
};

const recommend = (description) => {
    return instance.post(ENDPOINTS.RECOMMEND, {
        description : description
    });
}

const favoriteProduct = (product_id, is_favorite) => {
    return instance.patch(ENDPOINTS.PATCH.replace("{id}", product_id), {
        favorite : is_favorite
    });
}

const getFavoriteProducts = () => {
    // return instance.get(ENDPOINTS.LIST_FAVORITE_PRODUCTS);
    const endpoint = ENDPOINTS.LIST_FAVORITE_PRODUCTS
    console.log("Endpoint:", endpoint);
    return instance.get(endpoint)
};

// const getFavoriteProducts = () => {
//     return instance.get(ENDPOINTS.LISTPRODUCT, {
//         params: {
//             favorite: 1,
//         },
//     });
// }
export const ProductApi = {
    getListProduct,
    getProductByCategory,
    tryOnProduct,
    recommend,
    favoriteProduct,
    getFavoriteProducts,
}