import React from 'react';
import { Button, Space } from 'rjd';

export default () => {
    return (
        <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
            <Button type="primary" ghost>Primary</Button>
            <Space/>
            <Button ghost>Default</Button>
            <Space/>
            <Button type="dashed" ghost>Dashed</Button>
            <Space/>
            <Button type="danger" ghost>danger</Button>
        </div>
    );
}