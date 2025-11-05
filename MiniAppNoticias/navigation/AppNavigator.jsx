import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

// Importe suas telas
import TecnologiaScreen from '../screens/TecnologiaScreen';
import EsportesScreen from '../screens/EsportesScreen';
import DetalheNoticiaScreen from '../screens/DetalheNoticiaScreen';
import SobreScreen from '../screens/SobreScreen';

// --- NOSSA PALETA DE CORES (TEMA DARK) ---
const theme = {
  background: '#121212',
  surface: '#1E1E1E',
  primary: '#FF6600',
  textPrimary: '#E0E0E0',
  textSecondary: '#A0A0A0',
  inactive: '#888888',
};
// -----------------------------------------

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// [Stacks] (Sem mudanças aqui)
function TecnologiaStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.surface },
        headerTintColor: theme.primary,
        headerTitleStyle: { color: theme.textPrimary }
      }}
    >
      <Stack.Screen 
        name="ListaTecnologia" 
        component={TecnologiaScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen name="Detalhes" component={DetalheNoticiaScreen} /> 
    </Stack.Navigator>
  );
}

function EsportesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.surface },
        headerTintColor: theme.primary,
        headerTitleStyle: { color: theme.textPrimary }
      }}
    >
      <Stack.Screen 
        name="ListaEsportes" 
        component={EsportesScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen name="Detalhes" component={DetalheNoticiaScreen} />
    </Stack.Navigator>
  );
}

// [Tab Navigator] - (MUDANÇAS AQUI)
function NewsTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.surface,
          borderTopColor: theme.surface,
          paddingBottom: 5, // Espaço para o "pill" respirar
          paddingTop: 5,
          height: 60,
        },
        // --- NOVOS ESTILOS PARA AS ABAS ---
        tabBarActiveTintColor: '#FFFFFF', // Texto da aba ativa (Branco)
        tabBarInactiveTintColor: theme.inactive, // Texto/ícone inativo (Cinza)
        tabBarActiveBackgroundColor: theme.primary, // Fundo da aba ativa (Laranja)
        tabBarItemStyle: { // Estilo de cada item (aba)
          marginHorizontal: 10,
          borderRadius: 30, // Arredonda para formar o "pill"
        },
        tabBarLabelStyle: { // Estilo do texto
          fontWeight: 'bold',
          fontSize: 12,
        },
        // -----------------------------------
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Tecnologia') {
            iconName = 'laptop-outline';
          } else if (route.name === 'Esportes') {
            iconName = 'football-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Tecnologia" component={TecnologiaStack} /> 
      <Tab.Screen name="Esportes" component={EsportesStack} />
    </Tab.Navigator>
  );
}

// [Drawer Navigator] - (Sem mudanças aqui)
export function RootDrawer() {
  return (
    <Drawer.Navigator 
      screenOptions={{
        headerStyle: { backgroundColor: theme.surface },
        headerTintColor: theme.primary, 
        headerTitleStyle: { color: theme.primary, fontWeight: 'bold' },
        drawerStyle: {
          backgroundColor: theme.surface,
        },
        drawerActiveTintColor: theme.primary, 
        drawerInactiveTintColor: theme.inactive, 
        drawerActiveBackgroundColor: '#333333', 
      }}
    >
      <Drawer.Screen 
        name="RootNoticias"
        component={NewsTabs}
        options={{
          title: 'Notícias',
          drawerIcon: ({ color, size }) => ( 
            <Ionicons name="globe-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="RootSobre"
        component={SobreScreen} 
        options={{
          title: 'Sobre',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}