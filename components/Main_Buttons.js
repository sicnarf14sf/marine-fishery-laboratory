import React from 'react';
import { Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Image, View} from 'react-native';
import { styles } from '../shared/Styles'


/* This creates the main button components of the application which are:
    a.) Exploration 
            -> 

*/
export default function Main_Buttons({onPress_explo, onPress_educ}) {

    return (
        <View style={Button_Style.container }>
            <View style={ Button_Style.button_container }>
                <TouchableOpacity style={ Button_Style.button } onPress={onPress_explo}>
                    <Image style={ Button_Style.educ_icon } source={require('../assets/images/educ_logo.png')} resizeMode='contain' resizeMethod='resize'/>
                    <Text style={ styles.buttonText }> 
                    EDUCATIONAL</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={ Button_Style.qmark_container }>
                    <Image style={ Button_Style.qmark_icon } source={require('../assets/images/question.png')}/>
                </TouchableOpacity>
            </View>

            <View style={ Button_Style.button_container } >
                <TouchableOpacity style={ Button_Style.button } onPress= {onPress_educ}>
                <Image style={ Button_Style.explo_icon } source={require('../assets/images/compass.png')} resizeMode='contain' resizeMethod='resize'/>
                    <Text style={styles.buttonText}>EXPLORATION</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ Button_Style.qmark_container }>
                    <Image style={ Button_Style.qmark_icon } source={require('../assets/images/question.png')}/>
                </TouchableOpacity>
            </View>    
        </View>
    );
}

const Button_Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    button_container: {
        flexDirection:'row',
        height: '55%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button:{
        flexDirection:'row',
        justifyContent: 'space-between',
        backgroundColor: '#9BD4E4',
        elevation: 10,
        width: 265,
        height: '75%',
        alignItems: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 16,
    },
    educ_icon:{
        width: '15%',
        height: '100%',
        paddingTop: 40,
        tintColor: '#fff'
    },
    explo_icon: {
        width: '15%',
        height: '100%',
        paddingTop: 35,
        tintColor: '#fff'
    },
    qmark_container:{
        paddingLeft: 20,
    },
    qmark_icon: {
        width: 50,
        height: 50,
        tintColor: '#9BD4E4',
    },
})