import React from 'react';
import {View, Text, StyleSheet} from '@unthinkable/react-core-components';

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Text>Restaurant name or a dish...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#D4D4D4',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginVertical: 10,
  },
});
