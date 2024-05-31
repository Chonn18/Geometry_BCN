import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { useMemo } from "react";
import { styles } from "./Detail.styles";
import { colors } from "../../constants";

// chưa fix
const Detail = ({
    onPressHandler,
    children,
    text,
    style,
    isLoading = false,
    isDisable = false,
    ...props
    
}) => {
    const renderChildren = useMemo(() => {
        if (text) {
            return <Text style={styles.text}>{text}</Text>
        } else if (children) {
            return children;
        }
        return <></>
    }, [children, text])

    return (
        <TouchableOpacity
            onPress={onPressHandler}
            style={[styles.container, style]}
            disabled={isDisable || isLoading}
            testID="button"
            {...props}
        >
            {isLoading && (
                <ActivityIndicator testID="activity-indicator" color={colors.WHITE} />
            )}
            {isLoading && <View style={styles.gap} />}
            {renderChildren}
        </TouchableOpacity>
    )
}

export default Detail