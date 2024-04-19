import { Image, Text, TouchableOpacity } from "react-native";
import { useCallback } from "react";
import { styles } from "./Product.styles";
import StarRating from "../StarRating/StarRating";

const Product = ({
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
            style={[styles.container, style]}
            onPress={handlePressProduct}
            activeOpacity={0.6}
        >
            <Image 
                source={{uri: data.image}}
                style={styles.photo}
            />
            {data.rating !== null && (
                <StarRating rating={data.rating.rate} style={styles.rating} />
            )}
            <Text numberOfLines={3} style={styles.name}>{data.title}</Text>
            <Text style={styles.price}>${data.price}</Text>
        </TouchableOpacity>
    )
}

export default Product;