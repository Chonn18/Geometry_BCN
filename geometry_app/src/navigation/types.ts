import { ImagePickerAsset } from "expo-image-picker";
import { IProduct } from "../types";

export type RootStackParamList = {
    Opening: undefined,
    Home : undefined,
    Category: undefined,
    Favorite : undefined,
    Login: undefined,
    SignUpScreen: undefined,
    Help: undefined,
    ProductDetail : {
        data : IProduct
    } 
    TryOn: {
        product : IProduct,
        selfImage: ImagePickerAsset
    }
}