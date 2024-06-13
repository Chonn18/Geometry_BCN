import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Alert, Image, Modal, ScrollView, Text, TouchableOpacity, View, TextInput, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './ResultScreen.styles';
import { sizes, colors } from '../../constants';
import { Button } from '../../components';

const ResultScreen = ({ navigation, route }) => {
  const { data } = route.params;
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [textContent, setTextContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleListProblem = () => {
    navigation.navigate('ListProblem')
  }

  const handleImagePress = useCallback((imageUri) => {
    setSelectedImage(imageUri);
    setVisible(true);
  }, []);

  const renderImage = useMemo(() => {
    if (data.image) {
      return (
        <TouchableOpacity 
        // onPress={() => handleImagePress(data.image)}
        >
          <Image 
            source={{ uri: data.image }} 
            style={{ width: '100%', height: 220, resizeMode: "contain" }}
          />
        </TouchableOpacity>
      );
    } 
    else {
      return (
        <TouchableOpacity onPress={() => handleImagePress('../../../assets/images/images.jpg')}>
          <Image 
            source={{ uri: '../../../assets/images/images.jpg' }} style={styles.itemImage}
          />
        </TouchableOpacity>
      );
    }
  }, [data.image]);

  const renderImageRe = useMemo(() => {
    if (data.image_result) {
      return (
        <TouchableOpacity 
        // onPress={() => handleImagePress(data.image_result)}
        >
          <Image 
            source={{ uri: data.image_result }} 
            style={{ width: '100%', height: 300, resizeMode: "contain", marginBottom: 15 }}
          />
        </TouchableOpacity>
      );
    } 
    else {
      return (
        <TouchableOpacity onPress={() => handleImagePress('../../../assets/images/images.jpg')}>
          <Image 
            source={{ uri: '../../../assets/images/images.jpg' }} style={styles.itemImage}
          />
        </TouchableOpacity>
      );
    }
  }, [data.image_result]);

  const renderResult = useMemo(() => {
    if (!isLoading) {
      if (data.solve) {
        return (
          <View style={styles.containerWrapper}>
            <View style={styles.findContainer}>
              <TextInput
                style={styles.searchInput}
                // placeholder={}
                placeholderTextColor={colors.GRAY}
                multiline={true}
                numberOfLines={4}
                value={data.solve}
                onChangeText={false}
                editable={false}
              />
            </View>
          </View>
        );
      } 
      else {
        return (
          <View style={styles.resultContainer}>
            <Text style={styles.chooseButtonText}>No Result</Text>
          </View>
        );
      }
    }
    return null;
  }, [data.solve, isLoading]);

  return (
    <ScrollView style={styles.container}>
      {isLoading && (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator color={colors.blue} size={40} />
        </View>
      )}

      <View style={styles.container}>
        <View style={styles.photoWrapper}>
          <Text style={styles.title}> {data.title} </Text>
        </View>

        <Text style={styles.inputLabel}>Problem:</Text>
        <View style={styles.containerWrapper}>
          <View style={styles.findContainer}>
            <TextInput
              style={styles.searchInput}
              // placeholder={}
              placeholderTextColor={colors.GRAY}
              multiline={true}
              numberOfLines={4}
              value={data.description}
              onChangeText={false}
              editable={false}
            />
          </View>
        </View>
        {renderImage}

        <Text style={styles.inputLabel}> Solution: </Text>
        <View style={styles.resultContainer1}>
          {renderImageRe}
          {renderResult}
        </View>

        <View style={styles.photoWrapper}>
          <TouchableOpacity style={styles.startButton} onPress={handleListProblem}>
            <Text style={styles.startButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={visible} transparent={true}>
        <View style={styles.modalBackground}>
          <TouchableOpacity style={styles.modalCloseButton} onPress={() => setVisible(false)}>
            <Text style={styles.modalCloseButtonText}>Close</Text>
          </TouchableOpacity>
          <Image 
            source={{ uri: selectedImage }} 
            style={styles.fullscreenImage}
          />
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ResultScreen;
