//libs
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
//components
import Main from './Main';
import SliderLayout from './components/SliderLayout';
import Login from '@/pages/LoginPage'
import { UserProvider } from "@/context/UserContext";
// others
import { store } from '@/configs/Redux/store';
import 'antd/dist/antd.css';

const App = () => (
  <ConfigProvider>
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact component={Login} />
        <UserProvider>
          <Provider store={store}>
            <Suspense fallback='Application Loading'>
              <SliderLayout>
                <Main />
              </SliderLayout>
            </Suspense>
          </Provider>
        </UserProvider>
      </Switch>
    </BrowserRouter>
  </ConfigProvider>
);

export default App;
