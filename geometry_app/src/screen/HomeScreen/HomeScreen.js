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
  const handleSolvePGPSPress = () => {
    navigation.navigate('Detail2')
  }
  const handleSolveInterPress = () => {
    navigation.navigate('Detail3')
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
      <View style={styles.container2}>
      <View style={styles.containerWrapper}>
        {/* <View style={styles.findContainer}>
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
        </View> */}
      </View>

      <View style={styles.container2}>
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
            
            {/* <TouchableOpacity style={styles.startButton} onPress={handleStartButtonPress}>
                <Text style={styles.startButtonText}>Solve a problem</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.startButton} onPress={handleSolvePGPSPress}>
                <Text style={styles.startButtonText}>Solve PGPS</Text>
            </TouchableOpacity> */}

            <TouchableOpacity
                style={styles.itemContainer}
                onPress={handleStartButtonPress}
                // activeOpacity={0.6}
                >
                <Image source={require("../../../assets/images/alpha.png")} style={styles.itemImage} />
                <View style={styles.itemInfo}>
                    <Text style={styles.textSolve}>Solve a problem with AlphaGeometry </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.itemContainer}
                onPress={handleSolvePGPSPress}
                // activeOpacity={0.6}
                >
                <Image source={require("../../../assets/images/pgps.png")} style={styles.itemImage} />
                <View style={styles.itemInfo}>
                    <Text style={styles.textSolve}>Solve a problem with PGPS </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.itemContainer}
                onPress={handleSolveInterPress}
                // activeOpacity={0.6}
                >
                <Image source={require("../../../assets/images/intergps.png")} style={styles.itemImage} />
                <View style={styles.itemInfo}>
                    <Text style={styles.textSolve}>Solve a problem with InterGPS </Text>
                </View>
            </TouchableOpacity>

        </View>
      </View>
      <View style = { styles.space}></View>
    <Footer
      // isVisible={isMenuVisible} 
      navigateToHome={() => navigation.navigate('Home')}
  />
    </ScrollView>
    
  );
};
  

export default HomeScreen;
