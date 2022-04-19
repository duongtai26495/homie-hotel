import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../color/Colors'
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        flex:1,
        backgroundColor:Colors.WHITE
    },
    logo:{
        width:width/4,
        height:width/4,
        alignSelf:'center',
        marginBottom:10,
        marginTop:30,
    },
    view:{
        width:'100%',
        height:'100%',
    },
    app_name:{
        alignSelf:'center',
        fontSize:20,
        color:Colors.SECONDARY,
    },
    input:{
        width:'100%',
        alignSelf:'center',
        marginVertical:10,
        paddingHorizontal:10,
        flex:1,
        backgroundColor:Colors.LIGHT,
        color:Colors.PRIMARY,
    },
    btnSearch:{
        width:30,
        height:30,
        alignSelf:'center',
    },
    search_form:{
        width:width/1.2,
        flexDirection:'row',
        backgroundColor:Colors.LIGHT,
        alignSelf:'center',
        borderRadius:10,
        marginVertical:20,
    },
    btnBg:{
        width:50,
        height:50,
        backgroundColor:Colors.PRIMARY,
        alignSelf:'center',
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        justifyContent:'center',
    },
    result:{
        width:width/1.2,
        backgroundColor:Colors.LIGHT,
        borderRadius:10,
        alignSelf:'center',
    },
    error:{
        color:Colors.RED,
        fontSize:15,
        alignSelf:'center',
        padding:10,
    },
    data:{

    },
    content:{
        color:Colors.PRIMARY,
        fontSize:17,
        fontWeight:'bold',

    },
    title:{
        color:Colors.DARK,
        fontSize:17,
    },
    row:{
        flexDirection:'row',
        padding:10,
        justifyContent:'flex-start',
        alignItems:'center'
    },
    indicator:{
        position:'absolute',
        zIndex:99,
        alignSelf:'center',
    }
})

export default styles