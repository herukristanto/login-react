// In App.js in a new project


import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './components/context';
import RootStackScreen from './screens/RootStackScreen';
import MainTabScreen from './screens/MainTabScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Tab = createMaterialBottomTabNavigator();

const stack = createStackNavigator();

const App = () => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null); 

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken("test");
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken("test");
      setIsLoading(false);
    },
  }))

  useEffect(() => {
    setTimeout (()=> {
     setIsLoading(false);
    },1000);
  }, []);

  if( isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
       { userToken !== null ? (
          <MainTabScreen/> 
       )
       :
          <RootStackScreen/>
        }
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;