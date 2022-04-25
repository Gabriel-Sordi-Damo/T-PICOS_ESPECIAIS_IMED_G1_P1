import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EfficiencyForm from './src/pages/EfficiencyForm';
import Efficiency from './src/pages/Efficiency';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='EfficiencyForm'
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#1c3c94',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="EfficiencyForm"
          component={EfficiencyForm}
          options={
            { title: "Formulario de eficiência do carro" }
          } />
        <Stack.Screen
          name="Efficiency"
          component={Efficiency}
          options={
            { title: "Eficiência" }
          } />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;