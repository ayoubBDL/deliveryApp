import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import { COLORS, icons, images, SIZES, FONTS } from '../../../../constants';


export default function Header ({ currentLocation }) {
    return (
        <View style={{ flexDirection: 'row', height: 50 }}>
            <TouchableOpacity
                style={{
                    width: 50,
                    paddingLeft: SIZES.padding * 2,
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={icons.nearby}
                    style={{
                        width: 30,
                        height: 30
                    }}
                />

            </TouchableOpacity>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                    width: '70%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.lightGray3,
                    borderRadius: SIZES.radius
                }}>
                    <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                </View>
            </View>
            <TouchableOpacity
                style={{
                    width: 50,
                    paddingRight: SIZES.padding * 2,
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={icons.basket}
                    resizeMode='contain'
                    style={{
                        width: 30,
                        height: 30
                    }}
                />

            </TouchableOpacity>
        </View>
    )
}