import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {ActivityIndicator, Alert, Image, Modal, ScrollView, Text, TouchableOpacity, View, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './DetailScreen.styles';
import { sizes, colors } from '../../constants';
import { Button, Footer } from '../../components'; // Đảm bảo rằng bạn đã import Button từ components của bạn
import { GeometryApi } from '../../services/api/geometry.api';

const Detail2Screen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [textContent, setTextContent] = useState('');
  const [textTitle, setTextTitle] = useState('');
  const [textCons, setCons] = useState('');
  const [textImage, setImage] = useState('');
  const [textGoal, setGoal] = useState('');
  const [problem, setProblem] = useState({  image_result: '', text: '' });

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
      if (!textContent || !textTitle || !textCons) {
        Alert.alert("Error", "Please enter all fields ");
        return;
      }
      setIsLoading(true);
      let response;
      // if (!imageUri) { // if don't have image
      //   response = await GeometryApi.solveProblemNoImg(textTitle, textContent);
      // } else { 
      //   // response = await GeometryApi.solveProblem(textTitle, textContent, imageUri);
      //   response = await GeometryApi.solveProblem(textTitle, textCons,textContent, textImage, textGoal);
      // }
      response = await GeometryApi.solveWithPSPG(textTitle, textCons,textContent, textImage, textGoal);
      console.log(response)
      setProblem(response)
      // navigation.push("Result", {
      //   data: response,
      //   // category: problem.category,
      //   });
      
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  }, [textContent, imageUri]);

  const renderImage = useMemo(() => {
    if (!isLoading) {
      if (problem.image_result) {
        return (
          <View >
              <View style = {styles.line}></View>
              <Text style={styles.inputLabel}> Solution: </Text>
              <Image 
                source={{ uri: problem.image_result }} 
                style={{ width: '100%', height: 300, resizeMode: "contain", marginBottom:20, }}
              />
          </View>
          
        );
      } 
      // else {
      //   return (
      //     <View style={styles.loadingWrapper}>
      //       <Text style={styles.chooseButtonText}>No Image</Text>
      //     </View>
      //   );
      // }
    }
    return null;
  }, [problem, isLoading]);

  const renderResult = useMemo(() => {
    if (!isLoading) {
      if (problem && problem.text) {
        return (
          <View >
            <View style = {styles.line}></View>
            <Text style={styles.inputLabel}> {problem.text}</Text>
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
      // else {
      //   return (
      //     <View style={styles.resultContainer}>
      //       <Text style={styles.chooseButtonText}>No Result</Text>
      //     </View>
      //   );
      // }
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
        <Text style={styles.inputLabel}>Problem:</Text>
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
        {/* <View style={styles.containerWrapper}>
          <View style={styles.goalContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Input problem answer here..."
              placeholderTextColor={colors.GRAY}
              multiline={true}
              numberOfLines={3}
              value={textGoal}
              onChangeText={setGoal}
            />
          </View>
        </View> */}
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
        {/* <View style={styles.photoWrapper}>
          <TouchableOpacity style={styles.chooseButton} onPress={handleChoosePress}>
            <Text style={styles.chooseButtonText}>Choose Image</Text>
          </TouchableOpacity>
          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.selectedImage} />
          )}
        </View> */}

        <View style={styles.photoWrapper}>
          <TouchableOpacity style={styles.startButton} onPress={handleSolve}>
            <Text style={styles.startButtonText}>Solve</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={visible} animationType="fade" transparent>
        <TouchableOpacity
          style={styles.modal}
          activeOpacity={1}
          onPress={() => setVisible(false)}
        >
          <View style={styles.modalWrapper}>
            <Button style={styles.modalselect} text="Take Photo" onPress={handleGetImageCamera} />
            <Button style={styles.modalselect} text="Choose from library" onPress={handleSelectImage} />
          </View>
        </TouchableOpacity>
      </Modal>

      <View style = {styles.spaceWrapper}></View>   
      <View style={styles.resultContainer1}>
        {renderImage}
        {/* {renderResult} */}
      </View>
      </View>
      {/* <View style = {styles.space}></View> */}
      <Footer />
    </ScrollView>
  );
};

export default Detail2Screen;
