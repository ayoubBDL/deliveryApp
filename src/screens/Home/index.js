import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';


import { COLORS, icons, images, SIZES, FONTS } from '../../../constants';

import { initialCurrentLocation, categoryData, affordable, fairPrice, expensive, restaurantData } from '../../Data'
import Header from './views/Header';
import MainCategories from './views/MainCategories';

import RestaurantList from './views/RestaurantList'

function Home () {

    const [ categories, setCategories ] = useState(categoryData)
    const [ selectedCategory, setSelectedCategory ] = useState(null)
    const [ restaurants, setRestaurants ] = useState(restaurantData)
    const [ currentLocation, setCurrentLocation ] = useState(initialCurrentLocation)

    function onSelectCategory (category) {
        //filter the restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))
        setRestaurants(restaurantList)
        setSelectedCategory(category)
    }

    function getCategoryNameById (id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0) {
            return category[ 0 ].name
        }
        return ""
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header currentLocation={currentLocation} />
            <MainCategories categories={categories} onSelectCategory={onSelectCategory} selectedCategory={selectedCategory} />
            <RestaurantList restaurants={restaurants} getCategoryNameById={getCategoryNameById} />
        </SafeAreaView>
    );
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

export default Home;
