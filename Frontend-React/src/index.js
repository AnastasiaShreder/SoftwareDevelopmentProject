import React from 'react';
import ReactDom from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {Provider} from "react-redux";
import store from "@/store/store";
import { BrowserRouter as Router } from 'react-router-dom';
import APP from '@/components/wrapComponents/App_w';

ReactDom.render(
    <Provider store={store}>
        <Router>
            <APP />
        </Router>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
