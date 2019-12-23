import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
    Alert,
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { ButtonListaUsuarios, TextInputFormBordas } from '../StyledGlobal';
import { listPost } from '../actions/LoginAction';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eMail: '',
            senha: ''
        }
    }
    componentWillMount() {
        //this.props.atualizarToken("this.props.tokenAd")
        this.props.navigation.setParams({
            'onLeft': this.handleIconTouch
        })

    }


    handleIconTouch() {
        //Alert.alert('teste back teste')
    }

    componentWillUnmount() {
        // BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }


    handleBackButton = () => {
        // alert('Touched!');
    }

    loginInformacoes() {
        return (
            <View style={{
                flex: 0.5, backgroundColor: 'white', marginHorizontal: 10, shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                margin: 3, borderRadius: 5, borderColor: '#CCC', borderEndWidthWidth: 1
            }}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', margin: 20 }}>
                    <ButtonListaUsuarios onPress={() => Actions.ListPosts()} style={{ flex: 0.4, height: 50, marginBottom: 10 }}>
                        <Text style={{ color: '#fff' }}>Listagem de posts</Text>
                    </ButtonListaUsuarios>
                    <ButtonListaUsuarios onPress={() => Actions.ListUser()} style={{ flex: 0.4, height: 50}}>
                        <Text style={{ color: '#fff' }}>Listagem de Usuarios</Text>
                    </ButtonListaUsuarios>
                </View>
            </View>

        )
    }
    renderScreen() {
        if (this.props.msg != '') {
            Alert.alert(this.props.msg);
        }

        if (this.props.loadingLogin) {

            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size='large' color='#0075BE' />
                </View>
            )
        }
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-around' }} style={{ marginBottom: (Platform.OS === 'ios' ? 20 : 10) }}>
                <View >
                    {this.loginInformacoes()}
                </View>
            </ScrollView>
        )
    }

    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                <View style={{ flex: 1 }}>
                    {this.renderScreen()}

                </View>
            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        msg: state.LoginReducer.msg,
        //tokenAd: state.AddressReducer.token,
        //token: state.LoginReducer.token,
        loadingLogin: state.LoginReducer.loadingLogin
    }
)

const styles = StyleSheet.create({

})


export default connect(mapStateToProps, { listPost })(Login)