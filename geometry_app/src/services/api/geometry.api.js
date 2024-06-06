import instance from "axios"
import { firebase } from './firebaseConfig';

// Thay url bằng địa chỉ ip của máy tính
// How to check -> vào cmd gõ ipconfig -> tìm ipv4 
const ENDPOINTS = {
    // SOLVE:"http://192.168.1.50:8000/api/solve/",
    // SOLVE_NI:"http://192.168.1.50:8000/api/solve_no_img/",
    LISTIMO: "http://192.168.1.25:8000/api/problems/",
}

const solveProblem = async(problem,image) => {
    const imageBase64 = await convertImageToBase64(image.uri) 
    const requestData = {
        problem: problem,
        image: imageBase64,
    };

    return instance.post(ENDPOINTS.SOLVE, requestData, {
        headers: {
            "Content-Type": "application/json",
        },
    });
}

const solveProblemNoImg = async(problem) => { 
    const requestData = {
        problem: problem,
    };

    return instance.post(ENDPOINTS.SOLVE_NI, requestData, {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
const getListIMO = () => {
    return instance.get(ENDPOINTS.LISTIMO)
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

const getListIMO2 = async () => {
    const snapshot = await firebase.database().ref('/problems').orderByChild('category').equalTo('imo').once('value');
    const problems = [];
    snapshot.forEach((childSnapshot) => {
      problems.push({ id: childSnapshot.key, ...childSnapshot.val() });
    });
    return problems;
  };


export const GeometryApi = {
    solveProblem,
    solveProblemNoImg,
    getListIMO,
    getListIMO2,
}