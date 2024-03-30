import { View, Text, StatusBar, Platform } from 'react-native'
import React, { Children } from 'react'

export default function ScreenWrapper({children}) {
    let stausBarHeight = StatusBar.currentHeight? StatusBar.currentHeight:Platform.OS=='ios' ? 35 : 0;
    // console.log(stausBarHeight);
  return (
    <View style={{paddingTop:stausBarHeight}}>
      {
        children
      }
    </View>
  )
}