import { sizes,colors } from "../../constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: sizes.ScreenPaddingVertical,
    },
    logoImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    startButton: {
        backgroundColor: colors.GRAY,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: sizes.ScreenPaddingVertical,
    },
    startButtonText: {
        color: colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold',
    },
});
