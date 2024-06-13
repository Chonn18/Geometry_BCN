import instance from "axios"
import db from './firebaseConfig';
// import {ref, set, onValue, query, orderByChild,get, equalTo } from 'firebase/database'

// Thay url bằng địa chỉ ip của máy tính
// How to check -> vào cmd gõ ipconfig -> tìm ipv4 
const ENDPOINTS = {
    // SOLVE:"http://192.168.1.50:8000/api/solve/",
    SOLVE_NI:"http://192.168.1.108:8000/api/problems/solve_no_img/",
    SOLVE_PGPS:"http://192.168.1.108:8000/api/problems/solve_pgps/",
    VIEW_DATA:"http://192.168.1.108:8000/api/problems/viewdata/",
    LISTIMO: "http://192.168.1.108:8000/api/problems/",
}

const solveWithPSPG = async(textTitle, textCons,textContent, textImage, textGoal) => {
    
    const requestData = {
        title: textTitle,
        text_cons: textCons,
        description: textContent,
        text_image: textImage,
        text_goal: textGoal,
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

// const getListIMO2 = async () => {

//     const imoProblemsRef = ref(db, 'problems');
//     const imoProblemsQuery = query(imoProblemsRef, orderByChild('category'), equalTo('imo'));

//     get(imoProblemsQuery).then((snapshot) => {
//     if (snapshot.exists()) {
//         const problems = [];
//         snapshot.forEach((childSnapshot) => {
//         problems.push(childSnapshot.val());
//         });
//         // console.log("List of IMO problems:", problems);
//         console.log("List of IMO problems");
//     } else {
//         console.log("No IMO problems found");
//     }
//     }).catch((error) => {
//     console.error("Error getting IMO problems:", error);
//     });
//     return problems;
//   };


export const GeometryApi = {
    solveProblem,
    solveProblemNoImg,
    getListIMO,
    ViewData,
    solveWithPSPG
    // getListIMO2,
}