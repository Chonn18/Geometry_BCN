import { View, Image, TouchableOpacity, Text } from "react-native"
import { styles } from "./OpeningScreen.styles"
const OpeningScreen = ({navigation}) => {
    const handleStartButtonPress = () => {
        // navigation.navigate('Home')
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <View style={styles.backgroundImage}>
            <Image 
                source={require('../../../assets/images/open.png')} 
            />
            </View>
            {/* <Image 
                source={require('../../../assets/images/open.png')} 
                style={styles.backgroundImage}
            /> */}

            {/* <View style={styles.logoContainer}>
                <Image 
                    source={require('../../../assets/images/logo_op.png')}
                    style={styles.logoImage}
                />
            </View> */}
            <TouchableOpacity style={styles.startButton} onPress={handleStartButtonPress}>
                <Text style={styles.startButtonText}>Start</Text>
            </TouchableOpacity>
        </View>
    )
} 

export default OpeningScreen