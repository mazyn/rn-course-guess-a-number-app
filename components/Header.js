import React from 'react';
import { View, StyleSheet } from 'react-native';

import StyledTitle from '../components/StyledTitle';
import colors from '../constants/colors';

const Header = props => {
  return (
    <View style={styles.header}>
      <StyledTitle style={styles.headerTitle}>{props.title}</StyledTitle>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'white',
  },
});

export default Header;
