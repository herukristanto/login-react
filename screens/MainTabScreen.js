import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';


const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ProfileStack = createStackNavigator();


const MainTabScreen = () => {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
            tabBarLabel: 'Home',
            tabBarColor: '#009387',
            tabBarIcon: ({ color }) => (
                <Feather
                    name="home"
                    color={color}
                    size={26}
                />
            ),
          }}
        />
        
      
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
            tabBarLabel: 'Details',
            tabBarColor: '#009387',
            tabBarIcon: ({ color }) => (
                <MaterialIcons
                    name="details"
                    color={color}
                    size={26}
                />
            ),
          }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
            tabBarLabel: 'Explore',
            tabBarColor: '#009387',
            tabBarIcon: ({ color }) => (
                <MaterialIcons
                    name="explore"
                    color={color}
                    size={26}
                />
            ),
          }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
            tabBarLabel: 'Profile',
            tabBarColor: '#009387',
            tabBarIcon: ({ color }) => (
                <EvilIcons
                    name="user"
                    color={color}
                    size={26}
                />
            ),
          }}
      />
    </Tab.Navigator>
  );
}

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <HomeStack.Screen name="Home" component={HomeScreen} options={{
          title:'Overview',
          
          }} />
  </HomeStack.Navigator>
  );
  
  const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
          
          }} />
  </DetailsStack.Navigator>
  );

  const ExploreStackScreen = ({navigation}) => (
    <ExploreStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <ExploreStack.Screen name="Explore" component={ExploreScreen} options={{
            
            }} />
    </ExploreStack.Navigator>
    );

    const ProfileStackScreen = ({navigation}) => (
      <ProfileStack.Navigator screenOptions={{
              headerStyle: {
              backgroundColor: '#009387',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold'
              }
          }}>
              <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
              
              }} />
      </ProfileStack.Navigator>
      );

