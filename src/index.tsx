import React from 'react';
import './index.scss';
import {rerenderEntireTree} from "./Render";

import store from "./Redux/state";



rerenderEntireTree(store.getState());









