import { StyleSheet } from "react-native";
import {sizes, colors} from "../../constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: sizes.ScreenPaddingHorizontal,
        paddingVertical: 16,
        marginTop: 30,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.WHITE,
    },
    menuWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    menuIcon: {
        width: 35,
        height: 35,
    },
    logoIcon: {
        width: 35,
        height: 35,
        marginLeft:20,
    },
    title: {
        color: colors.BLACK,
        fontSize: 24,
        fontWeight: "600",
        lineHeight: 32,
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
    bagdeWrapper: {
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.BLACK,
        borderRadius: 20,
    },
    bagdeText: {
        color: colors.WHITE,
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 12,
    },
})

export default styles;