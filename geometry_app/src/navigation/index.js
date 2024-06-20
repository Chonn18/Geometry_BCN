import { useState, useEffect, useRef } from 'react'
import { Alert, BackHandler, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, OpeningScreen, HelpScreen, ListProblemScreen, 
    DetailScreen, ResultScreen, Detail2Screen, Detail3Screen, CheckDataScreen } from '../screen';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../constants';
import { Header, MenuModal } from '../components';
import { NavigationService } from '../services';


const Stack = createNativeStackNavigator();

const RootNavigator = () => {

    const [isMenuVisible,setIsMenuVisible] = useState(false)

    const navigationRef = useRef(null) 
    NavigationService.initialize(navigationRef)

    useEffect(() => {
        const handleBackPress = () => {
            if ( NavigationService.canGoBack()) {
                NavigationService.pop()
            } else {
                Alert.alert("Exit", "Do you  want exit this app?", [
                    {
                        text: "Cancel",
                        onPress: () => {}
                    },
                    {
                        text: "OK",
                        onPress: () => {
                            BackHandler.exitApp()
                        }
                    }
                ])
            }
            return true;
        }
        BackHandler.addEventListener("hardwareBackPress", handleBackPress)
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackPress)
        }
    }, [])

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible)
    }

    return (
        <NavigationContainer ref={navigationRef}>
            <StatusBar backgroundColor={colors.WHITE} />
            <Stack.Navigator 
                screenOptions={{
                    animation: "simple_push",
                    header : (props) => <Header {...props} />
                }}
                initialRouteName='Opening'
            >
                <Stack.Screen name='Opening' component={OpeningScreen} options={{headerShown: false}}/>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='ListProblem' component={ListProblemScreen} />
                <Stack.Screen name='Help' component={HelpScreen} />
                <Stack.Screen name='Detail' component={DetailScreen} />
                <Stack.Screen name='Detail2' component={Detail2Screen} />
                <Stack.Screen name='Detail3' component={Detail3Screen} />
                <Stack.Screen name='CheckData' component={CheckDataScreen} />
                <Stack.Screen name='Result' component={ResultScreen} />
            </Stack.Navigator>
            <MenuModal isVisible={isMenuVisible} onClose={() => setIsMenuVisible(false)} />
        </NavigationContainer>
    )
}

export default RootNavigator