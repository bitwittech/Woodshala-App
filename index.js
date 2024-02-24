/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {store,persistor} from './src/redux/store'
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
export default function ProviderApp() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => ProviderApp);
