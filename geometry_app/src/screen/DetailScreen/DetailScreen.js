import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {ActivityIndicator, Alert, Image, Modal, ScrollView, Text, TouchableOpacity, View, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ImageViewing from 'react-native-image-viewing';
import styles from './DetailScreen.styles';
import { sizes, colors } from '../../constants';
import { Button, Footer } from '../../components'; // Đảm bảo rằng bạn đã import Button từ components của bạn
import { GeometryApi } from '../../services/api/geometry.api';

const DetailScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [imageUri2, setImageUri2] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [textContent, setTextContent] = useState('');
  const [textInput, setTextInput] = useState('');
  const [textTitle, setTextTitle] = useState('');
  const [text, setText]= useState({ result: ''});
  const [text2, setText2]= useState({ result: ''});
  const [problem, setProblem] = useState({ solve: '', image_result: '' });
  const [isImageViewVisible, setIsImageViewVisible] = useState(false);
  const [isImageViewVisible2, setIsImageViewVisible2] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);

  const handleImage = useCallback((result) => {
    try {
      if (result.assets && result.assets.length > 0) {
        setVisible(false);
        Alert.alert(
          "Thông báo",
          "Bạn muốn lấy đề từ ảnh này? Lưu ý thời gian có thể hơi lâu",
          [
              {text: "Cancel"},
              {
                  text: "OK",
                  onPress: async () => {
                      if (result.assets && result.assets.length > 0) {
                        // setIsLoading(true);
                        setImageUri(result.assets[0].uri);
                        handleOCRPress();
                      }
                  }
              }
          ]
      )
        // setImageUri(result.assets[0].uri); 
      }
    }catch (error) {
      console.log("Error:", error);
      alert('Sorry, we can not scan this image!');
    } finally {
      setIsLoading(false);
    }
    
  }, [handleOCRPress]);

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

  const handleTranslatedPress = useCallback(async () => {
    try {
      if (!textContent || !textTitle) {
        Alert.alert("Error", "Please enter all fields ");
        return;
      }
      setIsLoading(true);
      let response;
      response = await GeometryApi.Translated(textContent);
      console.log(response)
      // setTextInput(response.result);
      setText(response.data)
      console.log(text)
      setTextInput(text.result)
      
    } catch (error) {
      Alert.alert("Error", "Something wrong !!!");
      console.log("Error:", error);
      return;
      
    } finally {
      setIsLoading(false);
    }
  }, [textContent, imageUri]);

  const handleOCRPress = useCallback(async () => {
    try {
      setIsLoading(true);
      let response;
      response = await GeometryApi.OCR(imageUri);
      // // console.log(response)
      // setTextInput(response.result);
      setText2(response.data)
      setTextContent(text2.result)
      
    } catch (error) {
      Alert.alert("Error", "Something wrong !!!");
      console.log("Error:", error);
      return;
    } finally {
      setIsLoading(false);
    }
  }, [imageUri]);

  const handleSolve = useCallback(async () => {
    try {
      if (!textContent || !textTitle) {
        Alert.alert("Error", "Please enter all fields ");
        return;
      }
      setIsLoading(true);
      let response;
      if (!textInput){
        response = await GeometryApi.solveProblemNoImg(textTitle, textContent);
        console.log(response)
        setProblem(response)
        // setImageUri2(problem.image_result)
        setImageUri2(response.image_result)
      }
      else{
        response = await GeometryApi.solveProblemNoImg(textTitle, textInput);
        console.log(response)
        setProblem(response)
        // setImageUri2(response.image_result)
        setImageUri2(response.image_result)
      }
      
      // navigation.push("Result", {
      //   data: response,
      //   // category: problem.category,
      //   });
      
    } catch (error) {
      Alert.alert("Error", "Something wrong !!!");
      console.log("Error:", error);
      return;
    } finally {
      setIsLoading(false);
    }
  }, [textContent, imageUri]);

  const renderImage = useMemo(() => {
    if (!isLoading) {
      if (imageUri2) {
        return (
          <View>
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
      if (problem && problem.solve) {
        return (
          <View style={styles.containerWrapper}>
            <View style={styles.resultContainer2}>
              <TextInput
                style={styles.searchInput}
                // placeholder={}
                placeholderTextColor={colors.GRAY}
                multiline={true}
                numberOfLines={4}
                value={problem.solve}
                // onChangeText={false}
                editable={false}
              />
            </View>
          </View>
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

  const renderTextInput = useMemo(() => {
    if (!isLoading) {
      if (textInput) {
        return (
          <View style={styles.containerWrapper}>
            <View style={styles.resultContainer}>
              <TextInput
                style={styles.searchInput}
                placeholderTextColor={colors.GRAY}
                multiline={true}
                numberOfLines={4}
                value={textInput}
                onChangeText={setTextInput}
              />
            </View>
          </View>
        );
      } 
    }
    return null;
  }, [textInput, isLoading]);

  return (
    <ScrollView >
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
                placeholder="Description here..."
                placeholderTextColor={colors.GRAY}
                multiline={true}
                numberOfLines={4}
                value={textContent}
                onChangeText={setTextContent}
              />
            </View>
          </View>
          <View style={styles.photoWrapper}>
            <TouchableOpacity style={styles.chooseButton} onPress={handleChoosePress}>
              <Text style={styles.chooseButtonText}>Choose Image</Text>
            </TouchableOpacity>
            {imageUri && (
              // <Image source={{ uri: imageUri }} style={styles.selectedImage} />
              <TouchableOpacity style={styles.selectedImage}  onPress={() => setIsImageViewVisible(true)}>
                  <Image source={{ uri: imageUri }} style={styles.selectedImage} />
                </TouchableOpacity>
            )}
          </View>

          <View style={styles.photoWrapper}>
            <TouchableOpacity style={styles.chooseButton} onPress={handleTranslatedPress}>
              <Text style={styles.chooseButtonText}>Translated</Text>
            </TouchableOpacity>
          </View>
          {renderTextInput}

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

        {/* <ImageViewing
              images={[{ uri: imageUri }]}
              imageIndex={0}
              visible={isImageViewVisible}
              onRequestClose={() => setIsImageViewVisible(false)} // Đóng modal khi nhấp ra ngoài
        /> */}

        <View style = {styles.spaceWrapper}></View>   
        <View style={styles.resultContainer1}>
          {renderImage}
          {renderResult}
        </View>
      </View>
      <View style = {styles.space}></View>
      <Footer 
      navigateToHome={() => navigation.navigate('Home')}
      />
      <ImageViewing
          images={[{ uri: imageUri }]}
          imageIndex={0}
          visible={isImageViewVisible}
          onRequestClose={() => setIsImageViewVisible(false)} // Đóng modal khi nhấp ra ngoài
        />

      <ImageViewing
          images={[{ uri: imageUri2 }]}
          imageIndex={0}
          visible={isImageViewVisible2}
          onRequestClose={() => setIsImageViewVisible2(false)} // Đóng modal khi nhấp ra ngoài
        />
    </ScrollView>
  );
};

export default DetailScreen;