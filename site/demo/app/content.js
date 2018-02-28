import React from 'react';
import Button from './button/index';

export const getComponentContent = {
    ['button']: {
        component: (props) => <Button {...props}/>
    },
    ['icon']: {
        component: <Button/>
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