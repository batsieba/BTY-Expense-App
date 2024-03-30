import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import ScreenWrapper from '../components/screenWrapper';
import { colors } from '../theme';

const items =[
    {id: 1, place: 'Gujrat', country: 'Pakistan'},
    {id: 2, place: 'London Eye', country: 'England'},{
    id: 3, place: 'Washington de', country: 'America'},{
    id: 4, place: 'New york', country: 'America'}
]


export default function HomeScreen() {
  return (
    <ScreenWrapper className="flex-1">

        {/* top row - app name and logout button*/}
       <View className="flex-row justify-between items-center p-4">
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm `}>BTY Expense</Text>
        <TouchableOpacity className="p-2 px-3 bg-white border border-gray-200 rounded-full">
            <Text className={colors.heading}>Logout</Text>
        </TouchableOpacity>
        </View>

        {/* banner image section */}
        <View className="flex-row justify-center items-center bg-gray-200 rounded-xl mx-4 mb-4">
            <Image source={require('../assets/images/banner.png')} className="w-60 h-60 " />
        </View>

        {/* recent trips section */}

        
        <View className="px-4 space-y-3">
            {/* recent trips heading section */}
            <View className="flex-row justify-between items-center">
                <Text className={`${colors.heading} font-bold text-xl`}>Recent Trips</Text>
                <TouchableOpacity className="p-2 px-3 bg-white border border-gray-200 rounded-full">
            <Text className={colors.heading}>Add Trip</Text>
        </TouchableOpacity>
            </View>

            {/*view of recent trips  */}
            <View style={{height:430}}>
                <FlatList
                    data ={items}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{
                        justifyContent: 'space-between'
                    }}
                    className="mx-1"
                    renderItem={({item}) =>{
                        return(
                            <TouchableOpacity className="bg-white p-4 rounded-2xl mb-3  shadow-sm">
                                <View>
                                    <Image source={require('../assets/images/banner.png')} className="w-36 h-36 mb-2" />
                                    <Text className={`${colors.heading} font-bold`}>{item.place}</Text>
                                    <Text className={`${colors.heading} text-xs`}>{item.country}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    />
            </View>
        </View>
    </ScreenWrapper>
  )
}