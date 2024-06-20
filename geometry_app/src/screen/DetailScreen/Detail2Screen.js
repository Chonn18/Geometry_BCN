import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {ActivityIndicator, Alert, Image, Modal, ScrollView, Text, TouchableOpacity, View, TextInput, Picker } from 'react-native';
import heartImage1 from '../../../assets/icons/heart(1).png';
import heartImage2 from '../../../assets/icons/heart(2).png'
import ImageViewing from 'react-native-image-viewing';
import * as ImagePicker from 'expo-image-picker';
import styles from './DetailScreen.styles';
import { sizes, colors } from '../../constants';
import { Button, Footer } from '../../components'; 
import { GeometryApi } from '../../services/api/geometry.api';

const Detail2Screen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [imageUri2, setImageUri2] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState(false);
  const [path, setPath] = useState(heartImage1);
  const [textContent, setTextContent] = useState('');
  const [textTitle, setTextTitle] = useState('');
  const [textCons, setCons] = useState('');
  const [textImage, setImage] = useState('');
  const [textGoal, setGoal] = useState('');
  const [textA, setA] = useState('');
  const [problem, setProblem] = useState({  image_result: '', text: '' });
  const [isImageViewVisible, setIsImageViewVisible] = useState(false);
  const [isImageViewVisible2, setIsImageViewVisible2] = useState(false);

  const items = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const handleAnswer = () => {

    
    if(!selectedValue){
      setSelectedValue(true);
      setPath(heartImage2)
      setA("0")
    }
    else{
      setSelectedValue(false);
      setPath(heartImage1)
      setA("4")
    }
  };

 


  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);

  const handleImage = useCallback((result) => {
    if (result.assets && result.assets.length > 0) {
      setVisible(false);
      setImageUri(result.assets[0].uri); 
    }
  }, []);

  const handleSelectImage = useCallback(async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1
      });
      handleImage(result);
    } catch (error) {
      console.error(error);
    }
  }, [handleImage]);

  const handleGetImageCamera = useCallback(async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1
      });
      handleImage(result);
    } catch (error) {
      console.error(error);
    }
  }, [handleImage]);

  const handleChoosePress = useCallback(() => {
    setVisible(true);
  }, []);

  const handleStartButtonPress = () => {
    navigation.navigate('Home');
  };

  const handleSolve = useCallback(async () => {
    try {
      if (!textContent || !textTitle || !textImage || !textGoal) {
        Alert.alert("Error", "Please enter all fields ");
        return;
      }
      // if(selectedValue){ setA('0')}
      // else{setA('4')}
      setIsLoading(true);
      let response;
      response = await GeometryApi.solveWithPSPG(textTitle, textCons,textContent, textImage, textGoal, textA);
      console.log(response)
      setProblem(response)
      setImageUri2(response.image_result)
    } catch (error) {
      console.log("Error:", error);
      Alert.alert("Error", "some thing is wrong ");
        return;
    } finally {
      setIsLoading(false);
    }
  }, [textContent,textTitle,textCons,  textImage]);

  const renderImage = useMemo(() => {
    if (!isLoading) {
      if (imageUri2) {
        return (
          <View >
              <View style = {styles.line}></View>
              <Text style={styles.inputLabel}> Solution: </Text>
              <TouchableOpacity style = {styles.selectedImage} onPress={() => setIsImageViewVisible2(true)}>
                  <Image 
                    source={{ uri: imageUri2 }} 
                    style={{ width: '100%', height: 300, resizeMode: "contain", marginBottom:20, }}
                  />
              </TouchableOpacity>
          </View>
          
        );
      } 
    }
    return null;
  }, [imageUri2, isLoading]);

  const renderResult = useMemo(() => {
    if (!isLoading) {
      if (problem && problem.text) {
        return (
          <View >
            <View style = {styles.line}></View>
            <Text style={styles.inputLabel}> {problem.text.toString()}</Text>
          </View>
          // <View style={styles.containerWrapper}>
          //   <View style={styles.resultContainer}>
          //     <TextInput
          //       style={styles.searchInput}
          //       // placeholder={}
          //       placeholderTextColor={colors.GRAY}
          //       multiline={true}
          //       numberOfLines={4}
          //       value={problem.solve}
          //       onChangeText={false}
          //       editable={false}
          //     />
          //   </View>
          // </View>
        );
      } 
    }
    return null;
  }, [problem, isLoading]);

  return (
    <ScrollView 
    >
      {isLoading && (
            <View style={styles.loadingWrapper}>
                <ActivityIndicator color={colors.BLACK} size={40} />
            </View>
        )}
      <View style ={styles.container2}>
        <View style={styles.container}>
        <View style={styles.containerWrapper}>
            <Text style={styles.titlePage}>HyperGNet</Text>
          </View>
            
            <View style = {styles.containerWrapper}>
                  <View style = {styles.titleContainer}>
                    
                      <TextInput
                          style={styles.searchInput}
                          placeholder="Title here..."
                          placeholderTextColor={colors.GRAY}
                          value={textTitle}
                          onChangeText={setTextTitle}
                      />
                  </View>        
              </View>
          <View style={styles.cartWrapper}>
            <Text style={styles.inputLabel}>Problem:</Text>

            <TouchableOpacity onPress={handleAnswer}>
                
                <Image source={path} 
                style={styles.cartIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.detailtext}>Shape :</Text>
          <View style={styles.containerWrapper}>
            <View style={styles.findContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Input Construction here..."
                placeholderTextColor={colors.GRAY}
                multiline={true}
                numberOfLines={3}
                value={textCons}
                onChangeText={setCons}
              />
            </View>
          </View>

          <Text style={styles.detailtext}>Text description:</Text>
          <View style={styles.containerWrapper}>
            <View style={styles.findContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Description text here..."
                placeholderTextColor={colors.GRAY}
                multiline={true}
                numberOfLines={3}
                value={textContent}
                onChangeText={setTextContent}
              />
            </View>
          </View>

          <Text style={styles.detailtext}>Image Construction:</Text>
          <View style={styles.containerWrapper}>
            <View style={styles.findContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Description Image here..."
                placeholderTextColor={colors.GRAY}
                multiline={true}
                numberOfLines={3}
                value={textImage}
                onChangeText={setImage}
              />
            </View>
          </View>

          <Text style={styles.detailtext}>Goal:</Text>
          <View style={styles.containerWrapper}>
            <View style={styles.goalContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Input goal here..."
                placeholderTextColor={colors.GRAY}
                multiline={true}
                numberOfLines={3}
                value={textGoal}
                onChangeText={setGoal}
              />
            </View>
          </View>
          
          

          <View style={styles.photoWrapper}>
            <TouchableOpacity style={styles.startButton} onPress={handleSolve}>
              <Text style={styles.startButtonText}>Solve</Text>
            </TouchableOpacity>
          </View>
        </View>

        

        <View style = {styles.spaceWrapper}></View>   
        <View style={styles.resultContainer1}>
          {renderImage}
          {renderResult}
        </View>
      </View>
      {/* <View style = {styles.space}></View> */}
      <Footer />

      <ImageViewing
          images={[{ uri: imageUri2 }]}
          imageIndex={0}
          visible={isImageViewVisible2}
          onRequestClose={() => setIsImageViewVisible2(false)} // Đóng modal khi nhấp ra ngoài
        />
    </ScrollView>
  );
};

export default Detail2Screen;
