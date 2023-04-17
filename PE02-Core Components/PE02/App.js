import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import Icon from './assets/icon.png';


const App = () => {
  return (
    <ScrollView>
      <Image
      source = {Icon}
      style= {{
        width: 300,
        height: 300,
        alignItems: 'top',
        margin: 20
      }}
      />
      <Text>Which course did you like?</Text>
      <View style={{
          fontSize: 25,
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          textAlign: 'center',
          margin: 10
      }}>
      <TextInput
      style={{fontSize: 25}}
      placeholder = "ex. CS624"
      />
      </View>
      <Text style= {{fontSize: 45, backgroundColor: 'yellow', fontWeight: 'bold'}}> Core Requirements (24 Credits)</Text>
      <Text style= {{fontSize: 20}}>CS504 Software Engineering</Text>
      <Text style= {{fontSize: 20}}>CS506 Programming for Computing</Text>
      <Text style= {{fontSize: 20}}>CS519 Cloud Computing Overview</Text>
      <Text style= {{fontSize: 20}}>CS533 Computer Architecture</Text>
      <Text style= {{fontSize: 20}}>CS547 Secure Systems and Programs</Text>
      <Text style= {{fontSize: 20}}>CS622 Discrete Math and Algorithms for Computing</Text>
      <Text style= {{fontSize: 20}}>DS510 Artificial Intelligence for Data Science</Text>
      <Text style= {{fontSize: 20}}>DS620 Machine Learning & Deep Learning</Text>

      <Text style={{
        fontSize: 45,
        backgroundColor: 'yellow',
        fontWeight: 'bold',
        margin: 5
      }}>Depth of Study (6 Credits)</Text>

      <Text style={{fontSize: 20}}>CS624 Full-Stack Development - Mobile App</Text>
      <Text style={{fontSize: 20}}>CS628 Full-Stack Development = Web App</Text>
    </ScrollView>
  );
};

export default App