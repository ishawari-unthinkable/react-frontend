import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from '@unthinkable/react-core-components';
import {RestaurantItem} from '../HomeScreen';
import {useTheme} from '@unthinkable/react-theme';
// import {image1} from

interface RestaurantCardProps {
  restaurantDetails: RestaurantItem;
  //   react-frontend/public/images/assets/image1.jpeg
}

export const RestaurantCard: React.FC<RestaurantCardProps> = props => {
  const {restaurantDetails} = props;
  const icons = useTheme('icons');
  const {
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  } = icons;
  const renderImage = () => {
    return (
      <View style={styles.imageContainer}>
        <Image
          source={image2}
          style={styles.imageStyle}
          //   resizeMode={'cover'}
          resizeMode={'stretch'}
        />
        <View style={styles.restaurantTypeContainer}>
          <Text style={styles.restaurantTypeText}>
            {restaurantDetails.restaurant_type.toUpperCase()}
          </Text>
        </View>
      </View>
    );
  };

  const renderNameAndRating = () => (
    <View style={styles.nameAndRatingContainer}>
      <Text style={styles.nameText}>{restaurantDetails.name}</Text>
      <View style={styles.ratingView}>
        <Text style={styles.ratingText}>{restaurantDetails.rating}</Text>
      </View>
    </View>
  );

  const renderItem = (item, index) => {
    console.log('item---', item, index);
    return (
      <View style={styles.menuContainer}>
        <Text style={styles.textColor}>{item}</Text>
        <View style={styles.bullet} />
        {index == restaurantDetails.menu_items.length - 1 ? (
          <Text style={styles.textColor}>
            ₹{restaurantDetails.budget_per_person} per person
          </Text>
        ) : null}
      </View>
    );
  };

  const renderMenuItemsAndBudgetPerPerson = () => (
    <View style={styles.flexRow}>
      <FlatList
        horizontal
        data={restaurantDetails.menu_items}
        renderItem={({item, index}) => renderItem(item, index)}
      />
    </View>
  );

  const renderDeliveryDetails = () => (
    <View style={styles.flexRow}>
      <Text style={styles.textColor}>{restaurantDetails.delivery_time}</Text>
      <View style={styles.bullet} />
      <Text style={styles.textColor}>{restaurantDetails.distance}</Text>
      <View style={styles.bullet} />
      <Text>Free Delivery</Text>
    </View>
  );

  const renderDiscountDetails = () => (
    <View style={styles.discountContainer}>
      <Text style={styles.discountText}>
        {restaurantDetails.discount} OFF up to ₹
        {restaurantDetails.disccount_limit}
      </Text>
    </View>
  );

  const renderRestaurantDetailsSection = () => {
    return (
      <View>
        {renderNameAndRating()}
        {renderMenuItemsAndBudgetPerPerson()}
        {renderDeliveryDetails()}
        {renderDiscountDetails()}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderImage()}
      {renderRestaurantDetailsSection()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#D4D4D4',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginVertical: 10,
  },
  imageContainer: {
    marginTop: -12,
    marginHorizontal: -8,
    marginBottom: 10,
  },
  imageStyle: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  restaurantTypeContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFFFFF',
    padding: 3,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginLeft: 10,
  },
  restaurantTypeText: {color: '#109e5b', fontWeight: 'bold'},
  nameAndRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
    alignItems: 'center',
  },
  nameText: {fontSize: 16, fontWeight: 'bold'},
  ratingView: {backgroundColor: '#198754', borderRadius: 4, padding: 4},
  ratingText: {color: '#FFFFFF', fontWeight: 'bold'},
  flexRow: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textColor: {
    color: '#5d5b5b',
  },
  bullet: {
    width: 5,
    height: 5,
    borderRadius: 4,
    backgroundColor: '#767575',
    marginHorizontal: 6,
  },
  discountContainer: {
    flexDirection: 'row',
    borderTopWidth: 0.7,
    borderTopColor: '#D4D4D4',
    paddingTop: 7,
  },
  discountText: {color: '#1848e6', fontWeight: 'bold'},
});
