
import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountryList from './src/components/countryList/CountryList'
import Home from './src/components/home/Home';
import ReportCase from './src/components/reportcase/ReportCase';

const Stack = createNativeStackNavigator();

const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Coronavirus" component={Home}  options={{ headerShown: false }}/>
        <Stack.Screen name="CountryList" component={CountryList} /> 
        <Stack.Screen name="ReportCase" component={ReportCase} />            
      </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  )
}

export default App;
