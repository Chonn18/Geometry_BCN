import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {ActivityIndicator, Alert, Image, Modal, ScrollView, Text, TouchableOpacity, View, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './DetailScreen.styles';
import { sizes, colors } from '../../constants';
import { Button, Footer } from '../../components'; // Đảm bảo rằng bạn đã import Button từ components của bạn
import { GeometryApi } from '../../services/api/geometry.api';

const Detail3Screen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [textContent, setTextContent] = useState('');
  const [textTitle, setTextTitle] = useState('');
  const [textCons, setCons] = useState('');
  const [textImage, setImage] = useState('');
  const [textGoal, setGoal] = useState('');
  const [textLogic, setTextLogic] = useState('');
  const [disText, setDisText] = useState('');
  const [diagramLogic, setDiagram] = useState('');
  const [lineIns, setLineIns] = useState('');
  const [point, setPoint] = useState('');
  const [circle, setCircle] = useState('');
  const [data, setData] = useState(
    { 
        title: 'textTitle',
        description: 'textContent',
        image: '',
        text_logic_form: 'textLogic',
        dissolve_text_logic_form: 'disText',
        diagram_logic:'disText',
        line_instance: 'lineIns',
        circle_instance: 'circle',
        point: 'point',
    });

  setTextLogic(data.text_logic_form);
  setDisText(data.dissolve_text_logic_form);
  setDiagram(data.diagram_logic);
  setLineIns(data.line_instance);
  setCircle(data.circle_instance);
  setPoint(data.point);
    // 'Perpendicular(Line(C, A), Line(C, B)), \nEquals(LengthOf(Line(C, A)), y),\nEquals(MeasureOf(Angle(C, B, A)), 60),\nEquals(LengthOf(Line(A, B)), x),\nEquals(LengthOf(Line(C, B)), 21),\nEquals(MeasureOf(Angle(B, A, C)), 30)'

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

  const handleCheckInputPress = useCallback(async () => {
    try {
        if (!textTitle || !textContent || !imageUri) {
            Alert.alert("Error", "Please enter all fields ");
            return;
        }
        else {
            response = await GeometryApi.ViewData(textTitle, textContent, imageUri);
            // console.log(response)
            setData(response);

        }

        
    } catch (error) {
        console.log("Error:", error);
      } finally {
        setIsLoading(false);
      }
  }, [textContent, imageUri]);

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
      response = await GeometryApi.ViewData(textTitle, textCons,textContent, textImage, textGoal);
      console.log(response)
      // setProblem(response)
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

  

  const renderTextLogic = useMemo(() => {
    if (!isLoading) {
      if (data && data.diagram_logic) {
        return (
          <View style={styles.containerWrapper}>
            <Text style={styles.detailtext}>Text logic form:</Text>
            <View style={styles.textContainer}>
              <TextInput
                style={styles.searchInput}
                // placeholder={}
                placeholderTextColor={colors.GRAY}
                multiline={true}
                // numberOfLines={4}
                value={textLogic}
                onChangeText={setTextLogic}
                // editable={false}
              />
            </View>
          </View>
        );
      } 
    }
    return null;
  }, [data, isLoading]);

  const renderDisTextLogic = useMemo(() => {
    if (!isLoading) {
      if (data && data.diagram_logic) {
        return (
          <View style={styles.containerWrapper}>
            <Text style={styles.detailtext}>Dissolve text logic form:</Text>
            <View style={styles.textContainer}>
              <TextInput
                style={styles.searchInput}
                // placeholder={}
                placeholderTextColor={colors.GRAY}
                multiline={true}
                numberOfLines={4}
                value={disText}
                onChangeText={setDisText}
                // editable={false}
              />
            </View>
          </View>
        );
      } 
    }
    return null;
  }, [data, isLoading]);

  const renderDiagramLogic = useMemo(() => {
    if (!isLoading) {
      if (data && data.diagram_logic) {
        return (
          <View style={styles.containerWrapper}>
            <Text style={styles.detailtext}>Diagram logic form:</Text>
            <View style={styles.diagramContainer}>
              <TextInput
                style={styles.searchInput}
                // placeholder={}
                placeholderTextColor={colors.GRAY}
                multiline={true}
                numberOfLines={4}
                value={diagramLogic}
                onChangeText={setDiagram}
                // editable={false}
              />
            </View>
          </View>
        );
      } 
    }
    return null;
  }, [data, isLoading]);

  const renderLine = useMemo(() => {
    if (!isLoading) {
      if (data && data.diagram_logic) {
        return (
          <View style={styles.containerWrapper}>
            <Text style={styles.detailtext}>Line instances:</Text>
            <View style={styles.resultContainer}>
              <TextInput
                style={styles.searchInput}
                // placeholder={}
                placeholderTextColor={colors.GRAY}
                multiline={true}
                numberOfLines={4}
                value={lineIns}
                onChangeText={setLineIns}
                // editable={false}
              />
            </View>
          </View>
        );
      } 
    }
    return null;
  }, [data, isLoading]);

  const renderCircle = useMemo(() => {
    if (!isLoading) {
      if (data && data.diagram_logic) {
        return (
          <View style={styles.containerWrapper}>
            <Text style={styles.detailtext}>Circle instances :</Text>
            <View style={styles.resultContainer}>
              <TextInput
                style={styles.searchInput}
                // placeholder={}
                placeholderTextColor={colors.GRAY}
                multiline={true}
                numberOfLines={4}
                value={circle}
                onChangeText={setCircle}
                // editable={false}
              />
            </View>
          </View>
        );
      } 
    }
    return null;
  }, [data, isLoading]);

  const renderPoint = useMemo(() => {
    if (!isLoading) {
      if (data && data.diagram_logic) {
        return (
          <View style={styles.containerWrapper}>
            <Text style={styles.detailtext}>Point positions:</Text>
            <View style={styles.resultContainer}>
              <TextInput
                style={styles.searchInput}
                // placeholder={}
                placeholderTextColor={colors.GRAY}
                multiline={true}
                numberOfLines={4}
                value={point}
                onChangeText={setPoint}
                // editable={false}
              />
            </View>
          </View>
        );
      } 
    }
    return null;
  }, [data, isLoading]);

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
              placeholder="Input text here..."
              placeholderTextColor={colors.GRAY}
              multiline={true}
              numberOfLines={3}
              value={textContent}
              onChangeText={setTextContent}
            />
          </View>
        </View>
        {renderTextLogic}
        {renderDisTextLogic}

        
        <View style={styles.photoWrapper}>
          <TouchableOpacity style={styles.chooseButton} onPress={handleChoosePress}>
            <Text style={styles.chooseButtonText}>Choose Image</Text>
          </TouchableOpacity>
          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.selectedImage} />
          )}
        </View>
        <View style={styles.containerWrapper}>
            
            {renderDiagramLogic}
            {renderCircle}
            {renderPoint}
            {renderLine}
        </View>
        

        <View style = {styles.photoWrapper}>
        <TouchableOpacity style={styles.chooseButton} onPress={handleCheckInputPress}>
            <Text style={styles.chooseButtonText}>Check input</Text>
          </TouchableOpacity>
        </View>

        <View style = {styles.line}></View>
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
        {/* {renderImage}
        {renderResult} */}
      </View>
      </View>
      <View style = {styles.space}></View>
      <Footer 
      navigateToHome={() => navigation.navigate('Home')}
      />
    </ScrollView>
  );
};

export default Detail3Screen;
