import React from 'react';
import Button from './button/index';
import Table from './table/index';

export const getComponentContent = {
    ['button']: {
        component: (props) => <Button {...props}/>
    },
    ['table']: {
        component: (props) => <Table {...props}/>
    },
    ['grid']: {
        component: <Button/>
    },
    ['layout']: {
        component: <Button/>
    },
    ['affix']: {
        component: <Button/>
    },
    ['breadcrumb']: {
        component: <Button/>
    }
};