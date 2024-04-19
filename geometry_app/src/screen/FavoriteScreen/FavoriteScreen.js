import { Dimensions, Image, RefreshControl, ScrollView, Text, TextInput, TouchableOpacity, View, FlatList, ListRenderItem } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { Carousel, Footer, ProductMini } from "../../components";
import { ProductApi } from "../../services/api";
import { styles } from "./FavoriteScreen.styles";
import { sizes,colors } from "../../constants";

const FavoriteScreen = ({navigation, route}) => {
    // const [products, setProducts] = useState([])
    // const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    // const handleGetListProduct = useCallback(async () => {
    //     try {
    //         setLoading(true) 
    //         setProducts([])
    //         const response = await ProductApi.getFavoriteProducts();
    //         setProducts(response.data)
    //     } catch (error) {
    //         // console.log(error);
    //         console.error("Axios error:", error);
    //         // console.log("Error response:", error.response);
    //     } finally {
    //         setLoading(false)
    //     }
    // }, [])

    // useEffect(() => {
    //     handleGetListProduct()
    // }, [])
    
    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={loading} 
                // onRefresh={handleGetListProduct} 
                />
            }
        >
            <View style = {styles.containerWrapper}>
                <View style = {styles.findContainer}>
                    <TouchableOpacity >
                        <Image
                            source={require("../../../assets/icons/search_icon.png")}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Tìm kiếm..."
                        placeholderTextColor={colors.GRAY}
                    />
                </View>        
            </View>
            
            <View style={styles.container}>
                <View style={{ marginBottom: 30, marginTop:10,}}>
                    <Text style={styles.productTitle}>Favorite</Text>
                    {/* <View style={styles.productsWrapper}>
                        {products.map((product) => (
                            <ProductMini
                                data={product}
                                key={product.id}
                                style={{ width: "100%" }}
                                handlePress={(product) => {
                                    navigation.push("ProductDetail", {
                                    data: product,
                                    category: product.category,
                                    });
                                }}
                            />
                        ))}
                    </View> */}
                </View>
            </View>

            <Footer />
        </ScrollView>
    )
}

export default FavoriteScreen