import { getStorybookUI, configure } from '@storybook/react-native';
import { name as appName } from '../app.json';
import { loadStories } from './storyLoader';
import { AppRegistry } from 'react-native';

import './rn-addons';

// import stories
configure(() => {
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
