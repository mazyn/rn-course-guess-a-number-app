import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import MainButton from '../components/MainButton';

import StyledText from '../components/StyledText';
import StyledTitle from '../components/StyledTitle';
import colors from '../constants/colors';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <StyledTitle style={styles.title}>Fim do Jogo!</StyledTitle>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          // source={{
          //   uri:
          //     'https://www.travisneighborward.com/wp-content/uploads/2016/11/Rue-Cremieux-in-Paris-by-Lydia-Flickr.jpg',
          // }}
          style={styles.image}
        />
      </View>
      <View style={styles.resultContainer}>
        <StyledText style={styles.resultText}>
          Seu celular precisou de{' '}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> tentativas
          para adivinhar o seu número{' '}
          <Text style={styles.highlight}>({props.userNumber})</Text>.
        </StyledText>
      </View>
      <MainButton onPress={props.onNewGame}>NOVO JOGO</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: '#007bff',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginHorizontal: 30,
    marginBottom: 15,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 18,
  },
  highlight: {
    color: colors.primary,
    fontFamily: 'poppins-bold',
  },
});

export default GameOverScreen;
