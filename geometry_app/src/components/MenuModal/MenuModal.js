import { View, Text, TouchableOpacity, Modal, Image } from "react-native";
import { modalStyles } from "./MenuModal.styles";

const MenuModal = ({navigateToHome, isVisible, onClose, navigateToFavorite, navigateToHelp }) => {
    return (
        <Modal transparent={true} visible={isVisible} onRequestClose={onClose}>
            <View style={modalStyles.modalContainer}>
                <TouchableOpacity onPress={onClose}>
                    <View style={modalStyles.bar}>
                        <Image
                            source={require("../../../assets/icons/close.png")}
                            style={modalStyles.icon}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigateToHome()
                    onClose()
                }}>
                    <View style={modalStyles.rowContainer}>
                        <Image
                            source={require('../../../assets/icons/home.png')}
                            style={modalStyles.icon}
                        />
                        <Text style={modalStyles.menuText}>Home</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigateToFavorite()
                    onClose()
                }}>
                    <View style={modalStyles.rowContainer}>
                        <Image
                            source={require('../../../assets/icons/heart.png')}
                            style={modalStyles.icon}
                        />
                        <Text style={modalStyles.menuText}>Favorite</Text>
                    </View>
                </TouchableOpacity>

                {/* <View style={modalStyles.rowContainer}>
                    <Image
                        source={require('../../../assets/icons/magic-wand.png')}
                        style={modalStyles.icon}
                    />
                    <Text style={modalStyles.menuText}>Try on</Text>
                </View> */}
                

                {/* <TouchableOpacity onPress={() => {
                    // navigateToFavorite()
                    onClose()
                }}>
                    <View style={modalStyles.rowContainer}>
                        <Image
                            source={require('../../../assets/icons/writing.png')}
                            style={modalStyles.icon}
                        />
                        <Text style={modalStyles.menuText}>Recommend</Text>
                    </View>
                </TouchableOpacity> */}

                
                <TouchableOpacity onPress={() => {
                    navigateToHelp()
                    onClose()
                }}>
                    <View style={modalStyles.rowContainer}>
                        <Image
                            source={require('../../../assets/icons/help.png')}
                            style={modalStyles.icon}
                        />
                        <Text style={modalStyles.menuText}>Help</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {
                    // navigateToFavorite()
                    onClose()
                }}>
                    <View style={modalStyles.rowContainer}>
                        <Image
                            source={require('../../../assets/icons/email.png')}
                            style={modalStyles.icon}
                        />
                        <Text style={modalStyles.menuText}>Contact Us</Text>
                    </View>
                </TouchableOpacity>
                
                {/* <TouchableOpacity onPress={() => {
                    // navigateToFavorite()
                    onClose()
                }}>
                    <View style={modalStyles.rowContainer}>
                        <Image
                            source={require('../../../assets/icons/setting.png')}
                            style={modalStyles.icon}
                        />
                        <Text style={modalStyles.menuText}>Setting</Text>
                    </View>
                </TouchableOpacity> */}

                {/* <TouchableOpacity onPress={() => {
                    navigateToLogin()
                    onClose()
                }}>
                    <View style={modalStyles.rowContainer}>
                        <Image
                            source={require('../../../assets/icons/user.png')}
                            style={modalStyles.icon}
                        />
                        <Text style={modalStyles.menuText}>Login</Text>
                    </View>
                </TouchableOpacity> */}

            </View>

        </Modal>
    )
}

export default MenuModal