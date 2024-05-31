import { sizes,colors } from "../../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: sizes.ScreenPaddingHorizontal,
        paddingHorizontal:10,
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
    
    
    genderPhoto: {
        width: "100%",
        resizeMode: "cover",
        borderRadius: 20,
        height: 200,
    },
    genderText: {
        color: colors.BLACK,
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 30,
      },
    textWrapper: {
        // backgroundColor: colors.blue,
        position: 'absolute',
        bottom: 5,
        left: 10,
        // padding: 5, // Tùy chỉnh giá trị padding
        borderRadius: 10, // Bo góc nền
      },
    photoWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
        marginBottom:30,
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
        // marginTop: sizes.ScreenPaddingVertical,
        marginTop:20,
    },
})

export default styles;