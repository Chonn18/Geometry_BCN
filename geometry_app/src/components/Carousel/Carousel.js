import {Dimensions, Image, TouchableWithoutFeedback, View} from 'react-native';
import { styles } from './Carousel.styles';
import RNCarousel from 'react-native-banner-carousel';

console.disableYellowBox = true;

const Carousel = ({contents, ...props}) => {
    return (
        <View style={styles.container}>
            <RNCarousel {...props}>
                {contents.map((content, index) => (
                    <TouchableWithoutFeedback key={index} onPress={content.onPress}>
                        <Image 
                            source={content.image}
                            style={{
                                borderRadius: 6, 
                                width : content.width 
                                    ? content.width 
                                    : props.pageSize 
                                    ? props.pageSize 
                                    : Dimensions.get('window').width,
                                height : content.height || 200
                            }}
                        />
                    </TouchableWithoutFeedback>
                ))}
            </RNCarousel>
        </View>
    )
}

export default Carousel;