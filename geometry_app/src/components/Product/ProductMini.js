import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Product.styles";
import { StarRating } from "../StarRating";
import { useCallback } from "react";

const ProductMini = ({
    data, 
    handleAddCart, 
    handlePress,
    style
}) => {
    const handlePressProduct = useCallback(() => {
        if (handlePress) {
            handlePress(data)
        }
    }, [handlePress, data])

    return (
        <TouchableOpacity
            style={[styles.itemContainer, style]}
            onPress={handlePressProduct}
            activeOpacity={0.6}>
            <Image source={{ uri: data.image }} style={styles.itemImage} />
            {/* <Image source={{uri: data.image}} style={styles.photo} /> */}
            <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{data.title}</Text>
                <Text style={styles.itemPrice}>${data.price.toFixed(2)}</Text>
                {/* Các thông tin khác nếu cần */}
            </View>

        </TouchableOpacity>
    )
}

export default ProductMini;