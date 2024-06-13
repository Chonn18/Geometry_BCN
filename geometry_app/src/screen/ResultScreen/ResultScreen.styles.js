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
        height: "100%",
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
        marginTop: 10,
        marginBottom:20,
    },

    title: {
        marginTop: 10,
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.BLACK,
        marginBottom: 5,
      },

    inputLabel: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.BLACK,
        marginBottom: 5,
      },

    chooseButtonText: {
        color: colors.BLACK,
        fontSize: 14,
        fontWeight: 'bold',
    },
    chooseButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        // marginTop: sizes.ScreenPaddingVertical,
        backgroundColor: colors.WHITE,
        borderWidth: 2,  // Độ dày của viền
        borderColor: "black",
    },
    

    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',

    },
    modalWrapper: {
        width: '70%',
        // backgroundColor: colors.WHITE,
        borderRadius: sizes.RADIUS,
        padding: sizes.PADDING,
        alignItems: 'center',
    },
    modalselect:{
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginVertical: 5,
    },
    selectedImage: {
        width: '100%',
        height: 200,
        // marginVertical: sizes.MARGIN,
        marginTop:10,
    },
    loadingWrapper: {
        width: '100%',
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },

    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 4,
        marginRight: 12,
    },

    resultContainer1:{
        marginTop: 10,
    },
    spaceWrapper: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalCloseButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 20,
      },
      modalCloseButtonText: {
        color: colors.black,
        fontSize: sizes.h4,
      },
      fullscreenImage: {
        width: '100%',
        height: '80%',
        resizeMode: 'contain',
      },

})

export default styles;