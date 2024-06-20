import { sizes,colors } from "../../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: sizes.ScreenPaddingHorizontal,
        backgroundColor: colors.background,
    },
    container2: {
        // paddingHorizontal: sizes.ScreenPaddingHorizontal,
        paddingHorizontal:10,
        backgroundColor: colors.background,
        marginBottom:20,
        // height: sizes.ScreenPaddingHorizontal,
    },
    containerWrapper: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
        // padding:5,
    },
    findContainer: {
        flexDirection: "row",
        // alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.WHITE,
        width: '100%',
        height: 120,
        borderRadius: 10,
        marginTop: 10,
        // marginBottom: 15,
        borderWidth: 2,  // Độ dày của viền
        borderColor: "black",
    },
    goalContainer: {
        flexDirection: "row",
        // alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.WHITE,
        width: '100%',
        height: 60,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 15,
        borderWidth: 2,  // Độ dày của viền
        borderColor: "black",
    },
    titleContainer: {
        flexDirection: "row",
        // alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.WHITE,
        width: 340,
        height: 40,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 15,
        borderWidth: 2,  // Độ dày của viền
        borderColor: "black",
        marginVertical:10,
    },

    resultContainer1:{
        marginTop: 10,
        // height: '100%',
    },

    resultContainer: {
        flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "center",
        padding:8,
        backgroundColor: colors.WHITE,
        width: 340,
        height: 100,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 15,
        borderWidth: 2,  // Độ dày của viền
        borderColor: "black",
    },
    resultContainer2: {
        flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "center",
        padding:8,
        backgroundColor: colors.WHITE,
        width: 340,
        height: '100%',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 15,
        borderWidth: 2,  // Độ dày của viền
        borderColor: "black",
    },
    diagramContainer: {
        flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "center",
        padding:8,
        backgroundColor: colors.WHITE,
        width: 340,
        height: 180,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 15,
        borderWidth: 2,  // Độ dày của viền
        borderColor: "black",
    },
    textContainer: {
        flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "center",
        padding:8,
        backgroundColor: colors.WHITE,
        width: 340,
        height: 70,
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
        // marginTop:8,
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
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.BLACK,
        marginBottom: 15,

    },
    titlePage: {
        marginTop: 18,
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.BLACK,
        marginBottom: 15,

    },
    detailtext: {
        marginTop: 15,
        fontSize: 16,
        // fontWeight: 'bold',
        color: colors.BLACK,
        marginBottom: -3,

    },

    chooseButtonText: {
        color: colors.BLACK,
        fontSize: 14,
        // fontWeight: 'bold',
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
        height: 300,
        // marginVertical: sizes.MARGIN,
        marginTop:10,
        marginBottom:10,
        resizeMode: "contain"
    },
    loadingWrapper1: {
        width: '100%',
        padding:8,
        // height: 300,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    loadingWrapper: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Màu nền mờ để làm nổi bật ActivityIndicator
        zIndex: 1000, // Đảm bảo nó hiển thị trên các thành phần khác
      },
      
    spaceWrapper: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    space:{
        height:200,
    },
    line:{
        height:1,
        backgroundColor: colors.BLACK,
        marginVertical:10,
    },

    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        marginLeft: 8,
    },
    cartWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    cartIcon: {
        width: sizes.IconWidth,
        height: sizes.IconHeight,
    },
})

export default styles;