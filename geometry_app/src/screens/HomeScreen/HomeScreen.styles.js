import { sizes,colors } from "../../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: sizes.ScreenPaddingHorizontal,
        backgroundColor: colors.WHITE,
    },
    containerWrapper: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.WHITE,
    },
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
    categoryWrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
        rowGap: 20,
        paddingVertical: 30,
        borderBottomColor: colors.BLACK,
        borderBottomWidth: 0.5,
    },
    category: {
        width: "33.33333%",
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 5,
    },
    categoryIconWrapper: {
        backgroundColor: colors.WHITE,
        shadowColor: colors.BLACK,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
        marginBottom: 5,
    },
    categoryIcon: {
        width: 60,
        height: 60,
        resizeMode: "contain",
    },
    categoryTitle: {
        color: colors.BLACK,
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 20,
        textAlign: "center",
    },
    bannerWrapper: {
        marginVertical: 20,
    },
    genderWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    genderConainter: {
        width: "47%",
        backgroundColor: colors.WHITE,
        borderRadius: 20,
        shadowColor: colors.BLACK,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },
    genderText: {
        color: colors.WHITE,
        fontSize: 24,
        fontWeight: "600",
        lineHeight: 30,
        position: "absolute",
        bottom: 20,
        left: 10,
    },
    genderPhoto: {
        width: "100%",
        resizeMode: "cover",
        borderRadius: 20,
        height: 300,
    },
    photoWrapper: {
        marginBottom: 20,
    },
    sellerPhoto: {
        width: "100%",
        resizeMode: "cover",
        borderRadius: 20,
        height: 150,
    },
    sellerText: {
        color: colors.BLACK,
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 22,
        textAlign: "center",
        marginTop: 10,
    },
    productTitle: {
        color: colors.BLACK,
        fontSize: 24,
        fontWeight: "500",
        lineHeight: 30,
        textAlign: "center",
    },
    productsWrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        rowGap: 20,
        marginTop: 20,
    },
    icon: {
        width: 20,  
        height: 20,
        marginLeft: 10,  
    },
    searchInput: {
        flex: 1,
        marginLeft: 15, 
        color: colors.BLACK,
        fontSize: 16,
    },
})

export default styles;