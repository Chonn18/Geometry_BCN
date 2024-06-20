import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {ActivityIndicator, Alert, Image, Modal, ScrollView, Text, TouchableOpacity, View, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ImageViewing from 'react-native-image-viewing';
import styles from './DetailScreen.styles';
import { sizes, colors } from '../../constants';
import { Button, Footer } from '../../components'; // Đảm bảo rằng bạn đã import Button từ components của bạn
import { GeometryApi } from '../../services/api/geometry.api';

const Detail3Screen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [image,setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [textContent, setTextContent] = useState('');
  const [textTitle, setTextTitle] = useState('');
  const [textLogic, setTextLogic] = useState('');
  const [disText, setDisText] = useState('');
  const [diagramLogic, setDiagram] = useState('');
  const [lineIns, setLineIns] = useState('');
  const [point, setPoint] = useState('');
  const [circle, setCircle] = useState('');
  const [result, setResult] = useState({result:''});
  const [isImageViewVisible, setIsImageViewVisible] = useState(false);

  const [data, setData] = useState(
    { 
        circle_instance: '',
        diagram_logic:'',
        line_instance: '',
        point: '',
        text_logic_form: '',
    });

  const setdata = () =>{
      setTextLogic(data.text_logic_form);
      setDiagram(data.diagram_logic);
      setLineIns(data.line_instance);
      setCircle(data.circle_instance);
      setPoint(data.point);
  }
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
      setImage(result.assets[0]);
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
            setIsLoading(true);
            response = await GeometryApi.CheckData(textTitle, textContent, imageUri);
            console.log(response);
            setData(response.data);
            // console.log(data)
            setTextLogic(data.text_logic_form);
            setDiagram(data.diagram_logic);
            setLineIns(data.line_instance);
            setCircle(data.circle_instance);
            setPoint(data.point);
            // data.image = imageUri
            // navigation.push("CheckData", {
            //     data: data,
            //     image: imageUri,
            //     });
        }
    } catch (error) {
        console.log("Error:", error);
        Alert.alert("Error", "something is wrong ");
        return;
      } finally {
        setIsLoading(false);
      }
  }, [textContent, imageUri,textTitle, data]);

  const handleSolve = useCallback(async () => {
    try {
      if (!textTitle || !textContent || !imageUri) {
        Alert.alert("Error", "Please enter all fields ");
        return;
      }
      if (!textLogic || !diagramLogic) {
        setIsLoading(true);
        response = await GeometryApi.SolveInter(textTitle, textContent, imageUri);
        console.log(response)
        setResult(response)
        console.log(result.result)
      }
      else {
        setIsLoading(true);
        response = await GeometryApi.SolveInter2(textTitle,textLogic, diagramLogic, lineIns,circle, point);
        console.log(response)
        setResult(response)
        console.log(result.result)
      }
      
    } catch (error) {
      console.log("Error:", error);
      Alert.alert("Error", "Something is wrong ");
        return;
    } finally {
      setIsLoading(false);
    }
  }, [textContent, imageUri]);

  const renderResult = useMemo(() => {
    if (!isLoading) {
      if ( result.result) {
        return (
          <View style={styles.containerWrapper}>
            <Text style={styles.detailtext}>Result : </Text>
            <View style={styles.resultContainer2}>
              <TextInput
                style={styles.searchInput}
                // placeholder={}
                placeholderTextColor={colors.GRAY}
                multiline={true}
                numberOfLines={4}
                value={result.result.toString()}
                // onChangeText={false}
                editable={false}
              />
            </View>
          </View>
        );
      } 
    }
    return null;
  }, [result, isLoading]);

  

  const renderTextLogic = useMemo(() => {
    if (!isLoading) {
      if (textLogic) {
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
                value={textLogic.toString()}
                onChangeText={setTextLogic}
                // editable={false}
              />
            </View>
          </View>
        );
      } 
    }
    return null;
  }, [textLogic, isLoading]);

  const renderDisTextLogic = useMemo(() => {
    if (!isLoading) {
      if (textLogic) {
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
                value={disText.toString()}
                onChangeText={setDisText}
                // editable={false}
              />
            </View>
          </View>
        );
      } 
    }
    return null;
  }, [disText, isLoading]);

  const renderDiagramLogic = useMemo(() => {
    if (!isLoading) {
      if (textLogic) {
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
                value={diagramLogic.toString()}
                onChangeText={setDiagram}
                // editable={false}
              />
            </View>
          </View>
        );
      } 
    }
    return null;
  }, [diagramLogic, isLoading]);

  const renderLine = useMemo(() => {
    if (!isLoading) {
      if (textLogic) {
        return (
          <View style={styles.containerWrapper}>
            <Text style={styles.detailtext}>Line instances:</Text>
            <View style={styles.diagramContainer}>
              <TextInput
                style={styles.searchInput}
                // placeholder={}
                placeholderTextColor={colors.GRAY}
                multiline={true}
                numberOfLines={4}
                value={lineIns.toString()}
                onChangeText={setLineIns}
                // editable={false}
              />
            </View>
            {/* <View style = {styles.space}></View> */}
          </View>
        );
      } 
    }
    return null;
  }, [lineIns, isLoading]);

  const renderCircle = useMemo(() => {
    if (!isLoading) {
      if (textLogic) {
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
                value={circle.toString()}
                onChangeText={setCircle}
                // editable={false}
              />
            </View>
          </View>
        );
      } 
    }
    return null;
  }, [circle, isLoading]);

  const renderPoint = useMemo(() => {
    if (!isLoading) {
      if (textLogic) {
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
                value={point.toString()}
                onChangeText={setPoint}
                // editable={false}
              />
            </View>
          </View>
        );
      } 
    }
    return null;
  }, [point, isLoading]);

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
            <Text style={styles.titlePage}>Inter GPS</Text>
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
          {/* {renderDisTextLogic} */}

          
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
          <View style={styles.resultContainer1}>
              
              {renderDiagramLogic}
              {renderCircle}
              {renderPoint}
              {renderLine}
          </View>
          {/* <View style = {styles.space}></View> */}
          

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

        <ImageViewing
            images={[{ uri: imageUri }]}
            imageIndex={0}
            visible={isImageViewVisible}
            onRequestClose={() => setIsImageViewVisible(false)} // Đóng modal khi nhấp ra ngoài
        />

        {/* <View style = {styles.spaceWrapper}></View>    */}
        <View style={styles.resultContainer1}>
          {/* {renderImage} */}
          {renderResult}
        </View>
      </View>
      <View style = {styles.space}></View>
      <Footer />
    </ScrollView>
  );
};

export default Detail3Screen;
