import { Dimensions, Image, RefreshControl, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { Carousel, Footer, Problem } from "../../components";
import { styles } from "./ListProblemScreen.styles";
import { sizes,colors } from "../../constants";
import { GeometryApi } from "../../services/api/geometry.api";

const ListProblemScreen = ({navigation, route}) => {
    const [problems, setProblems] = useState([])
    const [loading, setLoading] = useState(false)

    const handleGetListProblem = useCallback(async () => {
        try {
            setLoading(true) 
            setProblems([])
            const response = await GeometryApi.getListIMO2();
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
        handleGetListProblem()
    }, [])
    
    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={loading} 
                onRefresh={handleGetListProblem} 
                />
            }
            style={styles.container}
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
            
            <View style={styles.container2}>
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
            <View style = {styles.space}></View>
            <Footer />
        </ScrollView>
    )
}

export default ListProblemScreen