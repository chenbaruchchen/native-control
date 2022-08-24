import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { ApplicationProvider, Layout,IconRegistry } from '@ui-kitten/components';

import Home from './components/tabs/playGround/playGround'
import Setting from './components/tabs/admin/admin'

import StartDb from './scripts/start-db'
function HomeScreen({ navigation }) {
  return (<Home/>
     
  );
}

function SettingsScreen({ navigation }) {
  return (
  <Setting/>
  );
}

const Tab = createBottomTabNavigator();

export default function Main () {
   React.useEffect(()=>{
    StartDb().then(()=>setStart(true))
  },[])

   
  return(
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
  
   <App />
   
   
      
    </ApplicationProvider>
    </>
    )
}
 
    



function App() {
  return (
    <NavigationContainer>
        
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
               
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen   name="Home" component={HomeScreen}/>

        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}