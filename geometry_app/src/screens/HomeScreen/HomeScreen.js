import React, {useState, useEffect, useCallback} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, RefreshControl, Image,
   Dimensions, TextInput, Linking} from "react-native";
import styles from './HomeScreen.styles';
import carouselContents from './HomeScreen.constants';
import { sizes, colors } from '../../constants';
import { Carousel, Product } from '../../components';
import { ProductApi } from '../../services/api';


const HomeScreen = ({navigation}) => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false) 
  const handleGetListProduct = useCallback(async () => {
    try {
      setIsLoading(true) 
      setProducts([])
      
      const response = await ProductApi.getListProduct()

      setProducts(response.data)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    handleGetListProduct()
  }, [])

  

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={handleGetListProduct} />
      }
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
        <Carousel
          contents={carouselContents}
          autoplay
          loop 
          index={0}
          pageSize={
            Dimensions.get('window').width - sizes.ScreenPaddingHorizontal * 2
          }
        />

        <View style={styles.bannerWrapper}>
          <View style={styles.genderWrapper}>

            <TouchableOpacity style={styles.genderConainter} activeOpacity={0.6}
            onPress={() => {
              // Thêm sự kiện onPress
              // navigation.navigate('Category')
              // Linking.openURL(`Try_on_app://CategoryScreen?category=male`);
              navigation.push("Category", { category: "male" });
            }}>
              <Image source={require('../../../assets/images/male.webp')} style={styles.genderPhoto} />
              <Text style={styles.genderText}>Nam</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.genderConainter}
              activeOpacity={0.6}
              onPress={() => {
                // navigation.navigate('Category')
                // Linking.openURL(`try_on_app://CategoryScreen?category=female`);
                navigation.push("Category", { category: "female" });
              }}
            >
              <Image source={require("../../../assets/images/female.webp")} style={styles.genderPhoto} />
              <Text style={styles.genderText}>Nữ</Text> 
            </TouchableOpacity>

          </View>

          <View style={styles.photoWrapper}>
            <TouchableOpacity style={{width:"100%"}} activeOpacity={0.6}
            onPress={() => {
              // Thêm sự kiện onPress
              // navigation.navigate('Category')
              // Linking.openURL(`try_on_app://CategoryScreen?category=couple`);
              navigation.push("Category", { category: "couple" });
            }}>
              <Image source={require("../../../assets/images/couple.webp")} style={styles.genderPhoto} /> 
               <Text style={styles.genderText}>Couple</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.genderWrapper}> 
          <TouchableOpacity style={styles.genderConainter} activeOpacity={0.6}>
            <Image 
              source={require("../../../assets/images/yoga.webp")} 
              style={styles.genderPhoto}
            />
            <Text style={styles.genderText}>Fitness</Text>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.genderConainter} activeOpacity={0.6}>
            <Image 
              source={require("../../../assets/images/malesuit.jpg")} 
              style={styles.genderPhoto}
            />
            <Text style={styles.genderText}>Vest</Text>
          </TouchableOpacity>
        </View>

        {/* product */}
        <View style={{marginBottom: 30}}>
          <Text style={styles.productTitle}>Sản phẩm</Text>
          <View style={styles.productsWrapper}>
            {products.slice(0, 10).map((product) => (
              <Product
                data={product}
                key={product.id}
                style={{width: "45%"}}
                handlePress={(product) => {
                  navigation.push("ProductDetail", {
                    data: product
                  })
                }}
              />
            ))}
          </View>
        </View>
        

      </View>
    </ScrollView>
  );
};
  

export default HomeScreen;
