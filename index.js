import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

let StorybookUI = App;
StorybookUI = __DEV__ ? require('./storybook').default : App;

AppRegistry.registerComponent('StorybookUI', () => StorybookUI);
AppRegistry.registerComponent(appName, () => App);
