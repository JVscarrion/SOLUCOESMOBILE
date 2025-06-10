
import Home from './Screens/homee';
import Login from './Screens/Login';
import feed from './Screens/feed';
import Product from './Screens/Produto';
import Cadastrar from './Screens/cadastrar';
import CadastroProdutos from './Screens/CadastroProduto';
import { CarrinhoProvider } from './carrinhoProvider';
import Carrinho from './Screens/Carrinho';
import  'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from '@expo/vector-icons/AntDesign';


import  Count from './Screens/count';

function BottomTab(){
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator>
      <Tab.Screen name="Hometab" component={Home} />
      <Tab.Screen name="Feedtab" component={feed} />
      <Tab.Screen name="Counttab" component={Count} />
      <Tab.Screen name="Productab" component={Product} />
      <Tab.Screen name="CarrinhoTab" component={Carrinho} />
      <Tab.Screen name="CadastroProdutoTab" component={CadastroProdutos}/>
    </Tab.Navigator>
  );
}
export default function App() {
  const Stack = createStackNavigator();
  return (
  <CarrinhoProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaLogin" component={Login} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen  options={{headerShown:false}} name="Home" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  </CarrinhoProvider>
  );
}

