import React from 'react';
import { Text, StyleSheet, Alert, TouchableOpacity, Image, View} from 'react-native';
import { styles } from '../shared/Styles';
import { router } from 'expo-router'
// import main_menu from './screens/main_menu.js';

/* 

This creates the main button components of the application which are:

    a.) Explorational Mode 
            -> Takes the use to the Explore Fishes Page

    b.) Educational Mode
        -> Asks the user to take a Pre-Test or not
            if YES
                -> Proceeds to Explore Fishes Page
            if NO
                -> Proceeds to Pre-Test Page

*/

export default function Main_Buttons() {
    this.state = { show_alert: false };

    const show_info = (button) => {
        if (button === "Educ") {
          Alert.alert(
            "Educational Mode",
            "Test Your Knowledge",
            [
                
              ],
            {
              cancelable: true,
            }
          );
        } else {
          Alert.alert(
            "Explorational Mode",
            "Explore about available fishes",
            [
              ],
            {
              cancelable: true,
            }
          );
        }
      };    

    const redirect = (screen) => {
        if(screen == 'pre-test')
        {
            router.replace('/selected_fishes/pre_test')
        }
        else
        {
            router.replace('/selected_fishes/main_menu')
        }
    }

    const educ_pressed = (button) => {
        if( button == 'educ'){
            Alert.alert('Educational Mode',
            'Would you like to take a pre-test first?',
            [
                {
                    text: 'YES',
                    onPress: () => redirect('pre-test'),
                    style: 'default',
                },
                {
                    text: 'NO',
                    onPress: () => redirect('explo'),
                    style: 'default',
                },
            ]);
        }
    }

    return (
        <View style={Button_Style.container }>
            {/* Educational Button Container */}
            <View style={ Button_Style.button_container }>
                <TouchableOpacity style={ Button_Style.button } onPress={() => educ_pressed('educ')}>
                    <Image style={ Button_Style.educ_icon } source={require('../assets/images/educ_logo.png')} resizeMode='contain' resizeMethod='resize'/>
                    <Text style={ styles.buttonText }> 
                    EDUCATIONAL</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ Button_Style.qmark_container } onPress={() => show_info('Educ')}>
                    <Image style={ Button_Style.qmark_icon } source={require('../assets/images/question.png')}/>
                </TouchableOpacity>
            </View>
            
            {/* Exploration Button Container */}
            <View style={ Button_Style.button_container } >
                <TouchableOpacity style={ Button_Style.button } onPress={() => redirect('explo')}>
                <Image style={ Button_Style.explo_icon } source={require('../assets/images/compass.png')} resizeMode='contain' resizeMethod='resize'/>
                    <Text style={styles.buttonText}>EXPLORATION</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ Button_Style.qmark_container } onPress= {() => show_info('Explo')}>
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