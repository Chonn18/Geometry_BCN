import React, { useState, useEffect, useCallback } from 'react';
import { Alert, Image, Modal, ScrollView, Text, TouchableOpacity, View, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './ResultScreen.styles';
import { sizes, colors } from '../../constants';
import { Button } from '../../components'; // Đảm bảo rằng bạn đã import Button từ components của bạn

const ResultScreen = ({navigation, route}) => {
  const {data} = route.params;
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [textContent, setTextContent] = useState('');

  const handleListProblem = () => {
    navigation.navigate('ListProblem')
  }

  const renderImage = useMemo(() => {
    if (data.image) {
      return (
        <Image 
          source={{ uri: data.image }} 
          style={{ width: '100%', height: 220, resizeMode: "contain" }}
        />
      );
    } 
    else {
      return (
          <Image 
          source={{ uri: '../../../assets/images/images.jpg' }} style={styles.itemImage}
        />
      );
    }
  }, [data.image]);

  const renderImageRe = useMemo(() => {
    if (data.image_result) {
      return (
        <Image 
          source={{ uri: data.image_result }} 
          style={{ width: '100%', height: 220, resizeMode: "contain" }}
        />
      );
    } 
    else {
      return (
          <Image 
          source={{ uri: '../../../assets/images/images.jpg' }} style={styles.itemImage}
        />
      );
    }
  }, [data.image_result]);

  const renderResult = useMemo(() => {
    if (!isLoading) {
      if (data.solve) {
        return (
          <View style={styles.resultContainer}>
            <Text style={styles.chooseButtonText}>{data.solve}</Text>
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
        <View style = {styles.photoWrapper}>
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
              onChangeText= {false}
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


    </ScrollView>

  );
};

export default ResultScreen;
