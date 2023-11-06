import React from 'react';
import {View, Text, FlatList} from '@unthinkable/react-core-components';
import {SearchBar} from './components/SearchBar';

import styles from './homescreen.style';
import {RestaurantCard} from './components/RestaurantCard';

export interface RestaurantItem {
  id: number;
  name: string;
  image: string;
  image_item_name: string;
  image_item_price: string;
  restaurant_type: 'Pure-Veg';
  budget_per_person: string;
  delivery_time: string;
  discount: string;
  disccount_limit: number;
  menu_items: string[];
  rating: string;
  distance: string;
}

const restaurantList: RestaurantItem[] = [
  {
    id: 1,
    name: 'Dilli 6 on Wheels',
    image: 'image1',
    image_item_name: 'Noodles',
    image_item_price: '219',
    restaurant_type: 'Pure-Veg',
    budget_per_person: '200',
    delivery_time: '25-30 mins',
    discount: '20%',
    disccount_limit: 100,
    menu_items: ['North Indian', 'Street Food'],
    rating: '4.1',
    distance: '2 km',
  },
  {
    id: 2,
    name: "La Pino'z Pizza",
    image: 'image2',
    image_item_name: 'Farm Villa Pizza',
    image_item_price: '255',
    restaurant_type: 'Pure-Veg',
    budget_per_person: '300',
    delivery_time: '25-40 mins',
    discount: '30%',
    disccount_limit: 80,
    menu_items: ['Pizza', 'Pasta'],
    rating: '4.2',
    distance: '2 km',
  },
  {
    id: 3,
    name: 'The Saffron',
    image: 'image3',
    image_item_name: '',
    image_item_price: '',
    restaurant_type: 'Pure-Veg',
    budget_per_person: '250',
    delivery_time: '30-40 mins',
    discount: '20%',
    disccount_limit: 80,
    menu_items: ['North Indian', 'South Indian'],
    rating: '3.9',
    distance: '4 km',
  },
  {
    id: 4,
    name: 'Simple Burger',
    image: 'image4',
    image_item_name: 'Paneer Hot Burger',
    image_item_price: '220',
    restaurant_type: 'Pure-Veg',
    budget_per_person: '280',
    delivery_time: '25-30 mins',
    discount: '25%',
    disccount_limit: 50,
    menu_items: ['Burger', 'Momos'],
    rating: '4.1',
    distance: '5 km',
  },
  {
    id: 5,
    name: 'Two Meaters Apart',
    image: 'image5',
    image_item_name: 'Spiked Fries',
    image_item_price: '120',
    restaurant_type: 'Pure-Veg',
    budget_per_person: '100',
    delivery_time: '40-50 mins',
    discount: '40%',
    disccount_limit: 100,
    menu_items: ['Burger', 'fast Food'],
    rating: '4.0',
    distance: '5 km',
  },
  {
    id: 6,
    name: 'Tempted By Tandoor',
    image: 'image6',
    image_item_name: 'Masala Chaap',
    image_item_price: '345',
    restaurant_type: 'Pure-Veg',
    budget_per_person: '280',
    delivery_time: '30-40 mins',
    discount: '30%',
    disccount_limit: 60,
    menu_items: ['North Indian', 'Mughlai'],
    rating: '4.0',
    distance: '6 km',
  },
  {
    id: 7,
    name: 'Pizza Hut',
    image: 'image7',
    image_item_name: '',
    image_item_price: '',
    restaurant_type: 'Pure-Veg',
    budget_per_person: '250',
    delivery_time: '30 mins',
    discount: '20%',
    disccount_limit: 90,
    menu_items: ['Pizza', 'Fast Food'],
    rating: '3.5',
    distance: '6 km',
  },
  {
    id: 8,
    name: 'KalaKari',
    image: 'image8',
    image_item_name: 'Paneer Tikka Roll',
    image_item_price: '280',
    restaurant_type: 'Pure-Veg',
    budget_per_person: '400',
    delivery_time: '35 mins',
    discount: '20%',
    disccount_limit: 100,
    menu_items: ['North Indian', 'Biryani'],
    rating: '3.2',
    distance: '8 km',
  },
  {
    id: 9,
    name: 'The Tummy Section',
    image: 'image9',
    image_item_name: 'veg Pizza',
    image_item_price: '120',
    restaurant_type: 'Pure-Veg',
    budget_per_person: '210',
    delivery_time: '25-30 mins',
    discount: '30%',
    disccount_limit: 50,
    menu_items: ['Chinese', 'Fast Food'],
    rating: '3.0',
    distance: '8 km',
  },
  {
    id: 10,
    name: 'Behrouz Biryani',
    image: 'image10',
    image_item_name: '',
    image_item_price: '',
    restaurant_type: 'Pure-Veg',
    budget_per_person: '300',
    delivery_time: '50 mins',
    discount: '20%',
    disccount_limit: 70,
    menu_items: ['Biryani', 'Kebab'],
    rating: '3.0',
    distance: '10 km',
  },
];

const HomeScreen = () => {
  const renderRestaurantList = () => {
    return (
      <View>
        <FlatList
          data={restaurantList}
          renderItem={({item}) => <RestaurantCard restaurantDetails={item} />}
          keyExtractor={item => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar />
      <Text style={styles.header}>ALL RESTAURANTS</Text>
      <Text>{restaurantList.length} restaurants delivering to you</Text>
      {renderRestaurantList()}
    </View>
  );
};

export default HomeScreen;
