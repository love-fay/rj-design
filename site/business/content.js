import React from 'react';
import {
    document
} from './menu';
import Document from './document';
// import Icon from './icon';
// import Grid from './grid';
// import Layout from './layout';
// import Table from './table';
// import Wait from './wait';

const Home = () => <div>基础组件</div>;

export const getBasicComponentContent = {
    ['/business']: {
        name: '业务组件',
        component: <Home/>
    },
    [document.path]: {
        name: document.name,
        component: <Document/>
    }
};