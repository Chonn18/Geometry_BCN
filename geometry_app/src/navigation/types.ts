// import { ImagePickerAsset } from "expo-image-picker";
import { IProblem } from "../types";

export type RootStackParamList = {
    Opening: undefined,
    Home : undefined,
    ListProblem : undefined,

    // Login: undefined,
    // SignUpScreen: undefined,
    Help: undefined,
    Detail:undefined,
    Result: {
        data : IProblem,
    }
    // ProductDetail : {
    //     data : IProduct
    // } 
    // TryOn: {
    //     product : IProduct,
    //     selfImage: ImagePickerAsset
    // }
}