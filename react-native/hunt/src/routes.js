import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/main'
import Product from './pages/product'

const Stack = createStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
                name='Home' 
                component={Main} 
                options={{
                    title: 'JSHunt',
                    headerStyle: {
                        backgroundColor: '#DA552F'
                    },
                    headerTintColor: '#FFF',
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen 
                name='Product' 
                component={Product} 
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;