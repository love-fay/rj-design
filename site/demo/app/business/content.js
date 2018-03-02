import React from 'react';
import Document from './document/index';

export const getComponentContent = {
    ['document']: {
        component: (props) => <Document {...props}/>
    }
};