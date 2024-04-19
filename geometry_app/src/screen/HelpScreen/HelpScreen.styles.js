import { StyleSheet } from "react-native";
import { colors, sizes } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: sizes.ScreenPaddingHorizontal,
        backgroundColor: colors.WHITE,
    },
    
    bannerWrapper: {
        marginVertical: 80,
        marginBottom:80,
    },
    
    
    // Khối cần căn giữa
    findContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.WHITE,
        width: 340,
        height: 40,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 15,
        borderWidth: 2,  // Độ dày của viền
        borderColor: "black",
    },
    titleText: {
        color: colors.BLACK,
        fontSize: 32,
        fontWeight: '500',
        lineHeight: 44,
        letterSpacing: -0.4,
    },
    titleText1: {
        color: colors.BLACK,
        fontSize: 20,
        fontWeight: '500',
        lineHeight: 30,
        // letterSpacing: -0.4,
        paddingHorizontal: 8, 
    },
    titleText2: {
        color: colors.BLACK,
        fontSize: 32,
        fontWeight: '500',
        lineHeight: 44,
        textAlign: 'center',
        // marginTop: 10,
        paddingHorizontal:20,
        paddingVertical: 20,

    },
    tText: {
        color: colors.BLACK,
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '400',
        paddingHorizontal: 15, 
        marginBottom: 10,
        // letterSpacing: -0.6,
    },
    
});
