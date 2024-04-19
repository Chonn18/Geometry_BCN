import { Dimensions, Image, RefreshControl, ScrollView, Text, TextInput, TouchableOpacity, View, FlatList, ListRenderItem } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { Carousel, Footer, ProductMini } from "../../components";
import { ProductApi } from "../../services/api";
import { styles } from "./HelpScreen.styles";
import { sizes,colors } from "../../constants";

const HelpScreen = () => {
    
    
    return (
        <ScrollView
            refreshControl={
                <RefreshControl  />
            }
        >
            <Text style = {styles.titleText2}>Information</Text>
            <Text style = {styles.titleText1}> App : FTR</Text>
            <Text style = {styles.titleText1}> Mô Tả:</Text>
            <Text style = {styles.tText}> </Text>

            
            <View style ={styles.bannerWrapper}></View>

            <Footer />
        </ScrollView>
    )
}

export default HelpScreen