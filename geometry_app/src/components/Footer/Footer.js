import { Image, Text, TouchableOpacity, View } from "react-native";
import { useMemo } from "react";
import { styles } from "./Footer.styles";
import { colors, commons} from "../../constants";
import Social from "../Social/Social";

const Footer = ({theme="#3B3B3B"}) => {
    const navigateButton = useMemo(() => {
        return [
            {
                title : 'Home',
                onPress: () => {}
            },
            {
                title: 'Product',
                onPress: () => {},
            },
            {
                title: 'Contact Us',
                onPress: () => {},
            },
        ]
    }, [])

    return (
        <View style={[styles.container, {backgroundColor: theme}]}>
            <View style={styles.topBarWrapper}>
                <View style={styles.contentWrapper}>
                {/* <Text style={styles.brand}>{commons.brand}</Text>*/}
                    <Image
                        source={require('../../../assets/images/logo_op.png')}
                        style={{
                        width: 250,
                        height: 120,
                        resizeMode: 'contain',
                        }}
                    />
                    <View style={styles.rectangle} />
                    {/* <Text style={styles.decoration}>Gift & Decoration Store</Text> */}
                    </View>
                    <View style={styles.navigateWrapper}>
                        {navigateButton.map(button => (
                            <TouchableOpacity
                                onPress={button.onPress}
                                key={button.title}
                                style={styles.buttonWrapper}
                            >
                                <Text style={styles.buttonText}>{button.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
            </View>
            <View style={styles.bottomBarWrapper}>
                <Social />
                <View style={styles.copyrightWrapper}>
                    <Text style={styles.copyrightText}>
                        Copyright © [FTR] 2024  
                    </Text>
                    <Text style={styles.copyrightText}>
                        All rights reserved
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Footer;