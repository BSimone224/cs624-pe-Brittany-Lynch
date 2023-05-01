import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
    const { onPress, title = 'Submit' } = props;
    return (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    );
  }

  const styles = StyleSheet.create({
    button: {
      alignSelf: 'flex-end',
      padding: 85,
      marginTop: 16,
      marginHorizontal: 15,
      marginVertical: 15,
      paddingVertical: 15,
      borderColor: '#ededed',
      borderWidth: 1,
      borderRadius: 4,
      backgroundColor: 'white',
      marginRight: 8
    },
    text: {
      fontSize: 16,
      textAlign: 'center',
      lineHeight: 21,
      fontWeight: 'regular',
      letterSpacing: 0.25,
      color: 'black',
    }
  })


  