import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./Header.styles";
import { useState } from "react";
import MenuModal from "../MenuModal/MenuModal";

const Header = ({navigation}) => {

    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);

    };

    const handleStartButtonPress = () => {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <View style={styles.menuWrapper}>
                <TouchableOpacity onPress={toggleMenu}>
                    <Image
                        source={require('../../../assets/icons/menu_icon.png')}
                        style={styles.menuIcon}
                    />
                </TouchableOpacity>
                <Image
                        source={require('../../../assets/images/logo.png')}
                        style={styles.logoIcon}
                    />
                <Image
                    source={require('../../../assets/images/logotitle.png')}
                    style={{width: 150, height: 30, resizeMode: 'contain'}}
                />
            </View>
            <View style={styles.cartWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
                    <Image source={require('../../../assets/icons/heart(1).png')} style={styles.cartIcon}
                    />
                </TouchableOpacity>
                {/* <View style={styles.bagdeWrapper}>
                    <Text style={styles.bagdeText}>0</Text>
                </View> */}
            </View>

            <MenuModal 
                isVisible={isMenuVisible} 
                onClose={() => setMenuVisible(false)} 
                navigateToHome={() => navigation.navigate('Home')}
                navigateToFavorite={() => navigation.navigate('Favorite')}
                navigateToHelp={() => navigation.navigate('Help')}
            />
        </View>
    )
}

export default Header;
