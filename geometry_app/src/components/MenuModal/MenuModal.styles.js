import { StyleSheet } from "react-native";
import { colors, sizes } from "../../constants";

export const modalStyles = StyleSheet.create({
    modalContainer: {
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        width: 300,
        height:600,
        padding: 20,
        borderRadius: 16,
        marginTop: 30,
    },
        rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 18,
    },
    bar: {
        flexDirection: "row",
        marginLeft: 234,
    },
    icon: {
        width: 20,  // Điều chỉnh kích thước của icon theo ý muốn
        height: 20,
        marginRight: 10,  // Điều chỉnh khoảng cách giữa icon và text
    },
    menuText: {
        fontSize: 20,
        color: "#fff",
        marginVertical: 15,
    },
    closeButton: {
        fontSize: 18,
        color: "#fff",
        marginTop: 20,
    },
});
  