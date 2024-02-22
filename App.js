import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import UserProfile from './src/screens/UserProfile';
import ProductPage from './src/screens/ProductPage';
import UserCard from './src/screens/UserCard';
import PlaceOdar from './src/components/PlaceOdar';
import TrackOdar from './src/components/TrackOdar';
import DrawerContent from './src/components/DrawerContent';
import AboutUs from './src/components/AboutUs';
import ContactUs from './src/components/ContactUs';
import Watches from './src/screens/Watches';
import Ring from './src/screens/Ring';
import Bracelet from './src/screens/Bracelet';
import Earring from './src/screens/Earring';
import Chain from './src/screens/Chain';
import EditProduct from './src/screens/EditProduct';
import ForgotPassword from './src/screens/ForgotPassword';
// import Categories from './src/components/Categories';
export default function App() {

  const Stack = createNativeStackNavigator();
 

  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName='welcomepage'>
        <Stack.Screen name="Welocomepage" component={WelcomeScreen}
        options={{
          headerShown:false,
        }}
         />
        <Stack.Screen name="signup" component={SignupScreen} 
          options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="login" component={LoginScreen} 
          options={{
          headerShown:false,
        }}
        />

        <Stack.Screen name="forgot" component={ForgotPassword} 
          options={{
          headerShown:false,
        }}
        />

        <Stack.Screen name="home" component={HomeScreen} 
          options={{
          headerShown:false,
        }}
        />

        <Stack.Screen name="userprofile" component={UserProfile} 
          options={{
          headerShown:false,
        }}
        />

       

      <Stack.Screen name="productpage" component={ProductPage} 
          options={{
          headerShown:false,
        }}
        />

        <Stack.Screen name="card" component={UserCard} 
          options={{
          headerShown:false,
        }}
        />

<Stack.Screen name="EditProduct" component={EditProduct} 
          options={{
          headerShown:false,
        }}
        />
       
       <Stack.Screen name="PlaceOdar" component={PlaceOdar} 
          options={{
          headerShown:false,
        }}
        />

        <Stack.Screen name="TrackOdar" component={TrackOdar} 
          options={{
          headerShown:false,
        }}
        />

        <Stack.Screen name="draw" component={DrawerContent} 
          options={{
          headerShown:false,
        }}
        />

        <Stack.Screen name="AboutUs" component={AboutUs} 
          options={{
          headerShown:false,
        }}
        />
        
        <Stack.Screen name="ContactUs" component={ContactUs} 
          options={{
          headerShown:false,
        }}
        />

        <Stack.Screen name="watches" component={Watches} 
          options={{
          headerShown:false,
        }}
        />

         <Stack.Screen name="ring" component={Ring} 
          options={{
          headerShown:false,
        }}
        />

<Stack.Screen name="bracelet" component={Bracelet} 
          options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="earring" component={Earring} 
          options={{
          headerShown:false,
        }}
        />

<Stack.Screen name="Chain" component={Chain} 
          options={{
          headerShown:false,
        }}
        />

    </Stack.Navigator>

    </NavigationContainer>
  
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
