import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './Home';
import DetailScreen from './Detail';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen  },
  Detail: {screen: DetailScreen},
});

const App = createAppContainer(MainNavigator);

export default App;