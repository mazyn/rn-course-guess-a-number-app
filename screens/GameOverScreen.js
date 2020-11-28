import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Fim do Jogo!</Text>
      <Text>Número de tentativas: {props.roundsNumber}</Text>
      <Text>Número era {props.userNumber}</Text>
      <Button title='NOVO JOGO' onPress={props.onNewGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOverScreen;
