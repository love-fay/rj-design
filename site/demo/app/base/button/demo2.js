import React from 'react';
import { Button, Space } from 'rjd';

export default () => {
    return (
        <div>
            <Button type="primary" shape="circle" icon="search" />
            <Space/>
            <Button type="primary" icon="search">Search</Button>
            <Space/>
            <Button shape="circle" icon="search" />
            <Space/>
            <Button icon="search">Search</Button>
            <br /><br />
            <Button shape="circle" icon="search" />
            <Space/>
            <Button icon="search">Search</Button>
            <Space/>
            <Button type="dashed" shape="circle" icon="search" />
            <Space/>
            <Button type="dashed" icon="search">Search</Button>
        </div>
    );
}