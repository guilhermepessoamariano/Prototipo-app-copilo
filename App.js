import * as React from 'react';
import {useEffect,useState} from 'react';
import { View, Text,StyleSheet, Image,Dimensions, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

function ConsultaScreen({ navigation }) {
  return (
    <View style={{ padding: 15, flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }} style={styles.container}>
        <Text style={styles.textHeader}>Escolha uma opção de consulta:</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Check-up Automóvel')} style={styles.btnNavigation}>
          <Text style={{ color: 'white', marginTop: 8, marginLeft: 8 }}>Check-up Automóvel</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cálculo de Combustível')} style={styles.btnNavigation}>
          <Text style={{ color: 'white', marginTop: 8, marginLeft: 8 }}>Cálculo de Combustível</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Como estou dirigindo?')} style={styles.btnNavigation}>
          <Text style={{ color: 'white', marginTop: 8, marginLeft: 8 }}>Como estou dirigindo?</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function CheckupAutomovelScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Check-up Automóvel</Text>
    </View>
  );
}

function CalculoCombustivelScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cálculo de Combustível</Text>
    </View>
  );
}

function ComoEstouDirigindoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Como estou dirigindo?</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Galeria') {
              iconName = focused ? 'ios-images' : 'ios-images';
            } else if (route.name === 'Consulta') {
              iconName = focused ? 'ios-search' : 'ios-search';
            } else if (route.name === 'Filmagem') {
              iconName = focused ? 'ios-videocam' : 'ios-videocam';
            } else if (route.name === 'Configuração') {
              iconName = focused ? 'ios-settings' : 'ios-settings';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#5f5380',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Galeria" component={HomeScreen} />
        <Tab.Screen name="Consulta" component={ConsultaScreen} />
        <Tab.Screen name="Filmagem" component={PortfolioScreen} />
        <Tab.Screen name="Configuração" component={SettingsScreen} />
      </Tab.Navigator>
      <Stack.Navigator>
        <Stack.Screen name="Check-up Automóvel" component={CheckupAutomovelScreen} />
        <Stack.Screen name="Cálculo de Combustível" component={CalculoCombustivelScreen} />
        <Stack.Screen name="Como estou dirigindo?" component={ComoEstouDirigindoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  textHeader: {
    color: '#5f5380',
    fontSize: 24
  },
  btnNavigation: {
    backgroundColor: '#5f5380',
    padding: 20,
    marginTop: 15,
    flexDirection: 'row'
  },
  parentImage: {
    marginTop: 30
  },
  botaoAbrirNavegador: {
    padding: 10,
    backgroundColor: '#5f5380',
  },
  modalParent: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 1
  },
  boxModal: {
    backgroundColor: 'white',
    height: 370,
    width: '100%',
    position: 'absolute',
    left: 0,
    top: '50%',
    marginTop: -185,
    padding: 10
  }
})