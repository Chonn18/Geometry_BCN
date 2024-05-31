import React, {useState, useEffect, useCallback} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, RefreshControl, Image,
   Dimensions, TextInput, Linking} from "react-native";
import styles from './HomeScreen.styles';
import carouselContents from './HomeScreen.constants';
import { Carousel, Footer, Problem } from "../../components";
import { sizes, colors } from '../../constants';
import { ProductApi } from '../../services/api';


const HomeScreen = ({navigation}) => {
  // const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false) 
  const handleStartButtonPress = () => {
    navigation.navigate('Detail')
  }
  const handleListProblem = () => {
    navigation.navigate('ListProblem')
  }
 

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isLoading} 
        // onRefresh={handleGetListProduct} 
        />
      }
      style={styles.container}
    >
      <View style={styles.containerWrapper}>
        <View style={styles.findContainer}>
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
        {/* <Carousel
          contents={carouselContents}
          autoplay
          loop 
          index={0}
          pageSize={
            Dimensions.get('window').width - sizes.ScreenPaddingHorizontal * 2
          }
        /> */}

          <View style={styles.photoWrapper}>
            <TouchableOpacity style={{width:"100%"}} activeOpacity={0.6}
            onPress={handleListProblem}>
              <Image source={require("../../../assets/images/IMO_2.png")} style={styles.genderPhoto} /> 
              <View style={styles.textWrapper}>
                <Text style={styles.genderText}> IMO Geometric Problems </Text>
              </View>
            </TouchableOpacity>

          </View>
            
            <TouchableOpacity style={styles.startButton} onPress={handleStartButtonPress}>
                <Text style={styles.startButtonText}>Solve a problem</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.startButton} onPress={handleStartButtonPress}>
                <Text style={styles.startButtonText}>Solve a problem</Text>
            </TouchableOpacity> */}
        </View>
    <Footer/>
    </ScrollView>
  );
};
  

export default HomeScreen;
