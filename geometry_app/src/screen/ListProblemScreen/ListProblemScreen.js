import { Dimensions, Image, RefreshControl, ScrollView, Text, TextInput, TouchableOpacity, View, FlatList, ListRenderItem } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { Carousel, Footer, Problem } from "../../components";
import { styles } from "./ListProblemScreen.styles";
import { sizes,colors } from "../../constants";
import { GeometryApi } from "../../services/api/geometry.api";

const ListProblemScreen = ({navigation, route}) => {
    const [products, setProducts] = useState([])
    const [problems, setProblems] = useState([])
    const [loading, setLoading] = useState(false)

    const handleGetListProduct = useCallback(async () => {
        try {
            setLoading(true) 
            setProblems([])
            const response = await GeometryApi.getListIMO();
            setProblems(response.data)
        } catch (error) {
            // console.log(error);
            console.error("Axios error:", error);
            // console.log("Error response:", error.response);
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        handleGetListProduct()
    }, [])
    
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
                    <Text style={styles.problemTitle}>IMO Geometric Problems </Text>
                    <View style={styles.problemWrapper}>
                        {problems.map((problem) => (
                            <Problem
                                data={problem}
                                key={problem.id}
                                style={{ width: "100%" }}
                                handlePress={(problem) => {
                                    navigation.push("Result", {
                                    data: problem,
                                    // category: problem.category,
                                    });
                                }}
                            />
                        ))}
                    </View>
                </View>
            </View>

            <Footer />
        </ScrollView>
    )
}

export default ListProblemScreen