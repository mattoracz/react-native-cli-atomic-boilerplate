import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import Config from 'react-native-config';
export { default } from './storybook';

console.log('APP_MODE', Config.APP_MODE);

const storybookUI =
  Config.APP_MODE === 'STORYBOOK' ? require('./storybook').default : App;

AppRegistry.registerComponent(appName, () => storybookUI);
