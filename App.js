// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators, CardStyleInterpolators } from "@react-navigation/stack";
import page1 from './components/page1';



function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('page1', {name: 'BottomSheetAndroid'}) }>
        <Text style={styles.buttonTitle}>BottomSheetAndroid</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('page2', {name: 'FadeFromBottomAndroid'}) }>
        <Text style={styles.buttonTitle}>FadeFromBottomAndroid</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('page3', {name: 'FadeFromCenter'}) }>
        <Text style={styles.buttonTitle}>FadeFromCenter</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('page4', {name: 'HorizontalIOS'}) }>
        <Text style={styles.buttonTitle}>HorizontalIOS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('page5', {name: 'ModalPresentationIOS'}) }>
        <Text style={styles.buttonTitle}>ModalPresentationIOS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('page6', {name: 'NoAnimation'}) }>
        <Text style={styles.buttonTitle}>NoAnimation</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('page7', {name: 'RevealFromBottomAndroid'}) }>
        <Text style={styles.buttonTitle}>RevealFromBottomAndroid</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('page8', {name: 'ScaleFromCenterAndroid'}) }>
        <Text style={styles.buttonTitle}>ScaleFromCenterAndroid</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('page9', {name: 'VerticalIOS'}) }>
        <Text style={styles.buttonTitle}>VerticalIOS</Text>
      </TouchableOpacity>

      

    </View>
  );
}

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  }
}

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  }
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'vertical',
          TransitionSpecs: {
            open: config,
            close: closeConfig,
          },
          headerMode: 'screen',
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,

        }}
      >
        <Stack.Screen name="Transitions Test" component={HomeScreen} />
        <Stack.Screen name="page1" component={page1} 
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
          }}
        />
        <Stack.Screen name="page2" component={page1} 
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen name="page3" component={page1} 
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          }}
        />
        <Stack.Screen name="page4" component={page1} 
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen name="page5" component={page1} 
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          }}
        />
        <Stack.Screen name="page6" component={page1} 
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen name="page7" component={page1} 
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
          }}
        />
        <Stack.Screen name="page8" component={page1} 
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
          }}
        />
        <Stack.Screen name="page9" component={page1} 
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#9a2c15',
    borderRadius: 15,
    margin: 5,
    
  },
  buttonTitle: {
    color: '#fff',
    fontWeight: 'bold',
  }
})
export default App;