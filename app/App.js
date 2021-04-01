import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import configureStore from './redux/configureStore'
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import Navigation from './view';

function App() {
  const { persistor, store } = configureStore();
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>

  );
}
export default App;