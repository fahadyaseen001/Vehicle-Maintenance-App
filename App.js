import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#333333', // Customize your primary color
    background: '#FFFFFF', // Customize your background color
    text: '#000000', // Customize your text color
  },
};


export default function App() {
  return (
    <>
       <PaperProvider theme={theme}><NavigationContainer>
          <AppNavigator />
        </NavigationContainer></PaperProvider>
      
    </>
  );
}
