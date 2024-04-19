import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container: {
      width: '100%',
    },
    photoWrapper: {
      padding: 10,
      backgroundColor: colors.LIGHT_GRAY,
    },
    photo: {
      width: '100%',
      height: 200,
      marginBottom: 10,
      borderRadius: 10,
    },
    rating: {
      marginVertical: 10,
    },
    name: {
      color: colors.BLACK,
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 20,
    },
    price: {
      color: colors.BLACK,
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 18,
      marginTop: 10,
    },
    containers: {
      flex: 1,
      padding: 16,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
      backgroundColor: '#ececec', // Màu nền của mỗi container sản phẩm
      padding: 12,
      borderRadius: 8,
    },
    itemImage: {
      width: 80,
      height: 80,
      borderRadius: 4,
      marginRight: 12,
    },
    itemInfo: {
      flex: 1,
    },
    itemName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    itemPrice: {
      fontSize: 14,
      color: '#888',
    },
});
  