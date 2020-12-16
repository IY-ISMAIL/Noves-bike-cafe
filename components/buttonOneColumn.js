import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import Colors from '../constants/colors'

const MainButton = props => {
    return(
        <TouchableOpacity  activeOpacity={0.6}onPress={props.onPress}>
            <View style={{...styles.button, ...props.style}} >
                <Text style={styles.buttonText}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({  
    button:{
        backgroundColor:Colors.primaryColor,
        height:50,
        width:250,
        borderRadius:25,
        marginBottom:12
        
    },
    buttonText:{
        color:'white',
        //fontFamily:'open-sans',
        fontSize:18,
        textAlign:'center',
        padding:10
    }
})

export default MainButton;