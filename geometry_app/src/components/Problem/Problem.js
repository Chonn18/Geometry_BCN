import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Problem.styles";
import { useCallback ,useMemo } from "react";

const Problem = ({
    data, 
    handleAddCart, 
    handlePress,
    style
}) => {
    const handlePressProblem = useCallback(() => {
        if (handlePress) {
            handlePress(data)
        }
    }, [handlePress, data])

    const renderImage = useMemo(() => {
          if (data.image_result) {
            return (
              <Image 
                source={{ uri: data.image_result }} style={styles.itemImage}
              />
            );
          } 
          else {
            return (
                <Image 
                source={{ uri: '../../../assets/images/images.jpg' }} style={styles.itemImage}
              />
            );
          }
        
      }, [data.image_result]);

    return (
        <TouchableOpacity
            style={[styles.itemContainer, style]}
            onPress={handlePressProblem}
            activeOpacity={0.6}>
            {renderImage}
            {/* <Image source={{ uri: data.image }} style={styles.itemImage} /> */}
            {/* <Image source={{uri: data.image}} style={styles.photo} /> */}
            <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{data.title}</Text>
                {/* Các thông tin khác nếu cần */}
            </View>

        </TouchableOpacity>
    )
}

export default Problem;