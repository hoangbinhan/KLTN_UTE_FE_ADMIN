//libs
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
//components
import Main from './Main';
import SliderLayout from './components/SliderLayout';
// others
import { store } from '@/configs/Redux/store';
import 'antd/dist/antd.css';

const App = () => (
  <ConfigProvider>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback='Application Loading'>
          <SliderLayout>
            <Main />
          </SliderLayout>
        </Suspense>
      </Provider>
    </BrowserRouter>
  </ConfigProvider>
);

export default App;
