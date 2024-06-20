import instance from "axios"
// import {ref, set, onValue, query, orderByChild,get, equalTo } from 'firebase/database'

// Thay url bằng địa chỉ ip của máy tính
// How to check -> vào cmd gõ ipconfig -> tìm ipv4 
const ENDPOINTS = {
    // SOLVE:"http://192.168.1.50:8000/api/solve/",
    SOLVE_NI:"http://172.20.10.2:8000/api/problems/solve_no_img/",
    SOLVE_PGPS:"http://172.20.10.2:8000/api/problems/solve_pgps/",
    SOLVE_INTER: "http://172.20.10.2:8000/api/problems/solve_inter/",
    SOLVE_INTER2: "http://172.20.10.2:8000/api/problems/solve_inter2/",
    VIEW_DATA:"http://172.20.10.2:8000/api/problems/viewdata/",
    LISTIMO: "http://172.20.10.2:8000/api/problems/",
    CHECK_DATA: "http://172.20.10.2:8000/api/problems/check_data/",
    OCR: "http://172.20.10.2:8000/api/problems/ocr_image/",
    TRANS: "http://172.20.10.2:8000/api/problems/translated/",
}

const solveWithPSPG = async(textTitle, textCons,textContent, textImage, textGoal, textA) => {
    
    const requestData = {
        title: textTitle,
        text_cons: textCons,
        description: textContent,
        text_image: textImage,
        text_goal: textGoal,
        problem_answer: textA,
    };

    const response = await instance.post(ENDPOINTS.SOLVE_PGPS, requestData);
    const problems = response.data;
        // console.log("List of IMO problems:", problems);
    return problems;
}
const solveProblem = async(textTitle, textContent,image) => {
    const imageBase64 = await convertImageToBase64(image.uri) 
    const requestData = {
        title: textTitle,
        description: textContent,
        image: imageBase64,
    };

    return instance.post(ENDPOINTS.SOLVE, requestData, {
        headers: {
            "Content-Type": "application/json",
        },
    });
}

const solveProblemNoImg = async(textTitle, textContent) => { 
    const requestData = {
        title: textTitle,
        description: textContent
    };
    const response = await instance.post(ENDPOINTS.SOLVE_NI, requestData);
    const problems = response.data;
        // console.log("List of IMO problems:", problems);
    return problems;

    // return instance.post(ENDPOINTS.SOLVE_NI, requestData, {
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // });
}

const ViewData = async(textTitle, textCons,textContent, textImage, textGoal) => {
    
    const requestData = {
        title: textTitle,
        text_cons: textCons,
        description: textContent,
        text_image: textImage,
        text_goal: textGoal,
    };

    const response = await instance.post(ENDPOINTS.VIEW_DATA, requestData);
    const text = response.data;
    //     // console.log("List of IMO problems:", problems);
    return text;
}

const getListIMO = async () => {
    try {
        const response = await instance.get(ENDPOINTS.LISTIMO);
        const problems = response.data;
        // console.log("List of IMO problems:", problems);
        return problems;
    } catch (error) {
        console.error("Error getting IMO problems:", error);
        // throw error; // Ném lỗi để xử lý ở phía gọi hàm
    }
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

const CheckData = async(textTitle,textContent, imageUri) => {

    const imageBase64 = await convertImageToBase64(imageUri) 
    
    const requestData = {
        title: textTitle,
        description: textContent,
        image: imageBase64,
    };

    const response = await instance.post(ENDPOINTS.CHECK_DATA, requestData);
    // const text = response.data;
    //     // console.log("List of IMO problems:", problems);
    return response.data;
}

const SolveInter = async(textTitle,textContent, imageUri) => {

    const imageBase64 = await convertImageToBase64(imageUri) 
    
    const requestData = {
        title: textTitle,
        description: textContent,
        image: imageBase64,
    };

    const response = await instance.post(ENDPOINTS.SOLVE_INTER, requestData);
    // const text = response.data;
    //     // console.log("List of IMO problems:", problems);
    return response.data;
}
const SolveInter2 = async(textTitle,text_logic_form, diagram_logic, line_instance,circle_instance, point) => {
    
    const requestData = {
        title: textTitle,
        text_logic_form: text_logic_form,
        diagram_logic: diagram_logic,
        line_instance:line_instance,
        circle_instance:circle_instance,
        point:point,
    };

    const response = await instance.post(ENDPOINTS.SOLVE_INTER2, requestData);
    // const text = response.data;
    //     // console.log("List of IMO problems:", problems);
    return response.data;
}

const Translated = async(textContent) => {
    const requestData = {
        description: textContent,
    };
    const response = await instance.post(ENDPOINTS.TRANS, requestData);
    // const text = response.data;
    //     // console.log("List of IMO problems:", problems);
    return response.data;
}

const OCR = async( imageUri) => {

    const imageBase64 = await convertImageToBase64(imageUri) 
    const requestData = {
        image: imageBase64,
    };
    const response = await instance.post(ENDPOINTS.OCR, requestData);
    return response.data;
}


export const GeometryApi = {
    solveProblem,
    solveProblemNoImg,
    getListIMO,
    ViewData,
    solveWithPSPG,
    CheckData,
    SolveInter,
    SolveInter2,
    Translated,
    OCR,
}