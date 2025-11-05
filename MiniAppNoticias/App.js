// Importe isso no TOPO, obrigatório para o Drawer
import 'react-native-gesture-handler'; 

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootDrawer } from './navigation/AppNavigator'; // Importa seu navegador principal
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      {/* Mude o style para "light" para ver os ícones brancos */}
      <StatusBar style="light" />
      <RootDrawer />
    </NavigationContainer>
  );
}
