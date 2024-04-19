import React, {useState, useEffect, useCallback} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, RefreshControl, Image,
   Dimensions, TextInput, Linking} from "react-native";
import styles from './DetailScreen.styles';
import { sizes, colors } from '../../constants';


const DetailScreen = ({navigation}) => {
  // const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false) 
  const handleStartButtonPress = () => {
    navigation.navigate('Home')
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

      <View style={styles.container}>
        <Text style={styles.inputLabel}>Đề:</Text>
        <View style={styles.containerWrapper}>
          <View style={styles.findContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Nhập..."
              placeholderTextColor={colors.GRAY}
              multiline={true} // Cho phép nhập nhiều dòng
              numberOfLines={4}
            />
          </View>
        </View>

        <Text style={styles.inputLabel}>Câu hỏi:</Text>
        <View style={styles.containerWrapper}>
          <View style={styles.findContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Nhập..."
              placeholderTextColor={colors.GRAY}
              multiline={true} // Cho phép nhập nhiều dòng
              numberOfLines={4}
            />
          </View>
        </View>
        <View style={styles.photoWrapper}>
          <TouchableOpacity style={styles.startButton} onPress={handleStartButtonPress}>
              <Text style={styles.startButtonText}>Giải</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
};
  

export default DetailScreen;
