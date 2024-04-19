import { sizes,colors } from "../../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: sizes.ScreenPaddingHorizontal,
        backgroundColor: colors.background,
    },
    containerWrapper: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
    },
    findContainer: {
        flexDirection: "row",
        // alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.WHITE,
        width: 340,
        height: 120,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 15,
        borderWidth: 2,  // Độ dày của viền
        borderColor: "black",
    },
    
    
    genderPhoto: {
        width: "100%",
        resizeMode: "cover",
        borderRadius: 20,
        height: 300,
    },
    photoWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:15,
        marginBottom: 20,
    },
    
    icon: {
        width: 20,  
        height: 20,
        marginLeft: 10,  
    },
    searchInput: {
        flex: 1,
        // verticalAlign: 15,
        marginTop:8,
        marginLeft: 10, 
        color: colors.BLACK,
        fontSize: 14,
    },
    startButtonText: {
        color: colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold',
    },
    startButton: {
        backgroundColor: colors.blue,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: sizes.ScreenPaddingVertical,
    },

    inputLabel: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.BLACK,
        marginBottom: 5,
      },
})

export default styles;