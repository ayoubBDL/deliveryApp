import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

import { COLORS, icons, images, SIZES, FONTS } from '../../../../constants';


export default function RestaurantList ({ restaurants, getCategoryNameById, navigation, currentLocation }) {

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate('Restaurant'), {
                    item,
                    currentLocation
                }}
            >

                <View style={{ marginBottom: SIZES.padding }}>
                    <Image
                        source={item.photo}
                        resizeMode='cover'
                        style={{
                            width: '100%',
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                    </View>
                </View>

                {/* Restaurant info */}
                <View>
                    <Text style={{ ...FONTS.body2 }}>{item.name}</Text>
                </View>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row',

                    }}
                >
                    {/* Rating */}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body3 }} >{item.rating}</Text>

                    {/* categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>

                                    </View>
                                )
                            })
                        }
                        {/* price  */}
                        {
                            [ 1, 2, 3 ].map((priceRating) => {
                                return (
                                    <Text
                                        key={priceRating}
                                        style={{
                                            ...FONTS.body3,
                                            color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray

                                        }}
                                    >$</Text>
                                )
                            })
                        }
                    </View>


                </View>


            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={restaurants}
            keyExtractor={item => `${ item.id }`}
            renderItem={renderItem}
            contentContainerStyle={{
                paddingHorizontal: SIZES.padding * 2,
                paddingBottom: 10
            }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})