import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Alert, Image, Modal, ScrollView, Text, TouchableOpacity, View, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './DetailScreen.styles';
import { sizes, colors } from '../../constants';
import { Button, Footer } from '../../components'; // Đảm bảo rằng bạn đã import Button từ components của bạn
import { GeometryApi } from '../../services/api/geometry.api';

const DetailScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [textContent, setTextContent] = useState('');
  const [photos, setPhotos] = useState('');
  const [result, setResult] = useState('');

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
      if (!textContent) {
        Alert.alert("Error", "Please enter all fields ");
        return;
      }
      setIsLoading(true);
      let response;
      if (!imageUri) { // if don't have image
        response = await GeometryApi.solveProblemNoImg(textContent);
      } else { 
        response = await GeometryApi.solveProblem(textContent, imageUri);
      }
      setPhotos(response.data.image);
      setResult(response.data.result);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  }, [textContent, imageUri]);

  const renderImage = useMemo(() => {
    if (!isLoading) {
      if (photos) {
        return (
          <Image 
            source={{ uri: `data:image/png;base64,${photos}` }}
            style={{ width: '100%', height: 220, resizeMode: "contain" }}
          />
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
  }, [photos, isLoading]);

  const renderResult = useMemo(() => {
    if (!isLoading) {
      if (result) {
        return (
          <View style={styles.resultContainer}>
            <Text style={styles.chooseButtonText}>{result}</Text>
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
  }, [result, isLoading]);

  return (
    <ScrollView style={styles.container}>
      <View style ={styles.container2}>
      <View style={styles.container}>
        <Text style={styles.inputLabel}>Problem:</Text>
        <View style={styles.containerWrapper}>
          <View style={styles.findContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Input here..."
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
            <Image source={{ uri: imageUri }} style={styles.selectedImage} />
          )}
        </View>

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
        {renderResult}
      </View>
      </View>
      <View style = {styles.space}></View>
      <Footer />
    </ScrollView>
  );
};

export default DetailScreen;
