import React from 'react';
import { StyleSheet, Text } from 'react-native';

const StyledTitle = props => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'poppins-bold',
    fontSize: 18,
  },
});

export default StyledTitle;
