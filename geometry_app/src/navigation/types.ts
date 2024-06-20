// import { ImagePickerAsset } from "expo-image-picker";
import { IProblem, InterGPS} from "../types";

export type RootStackParamList = {
    Opening: undefined,
    Home : undefined,
    ListProblem : undefined,

    Help: undefined,
    Detail:{
        problem : IProblem,
    }
    Detail2:{
        problem : IProblem,
    }
    Detail3:{
        data : InterGPS,
    }
    CheckData:{
        data : InterGPS,
    }
    Result: {
        data : IProblem,
    }
   
}