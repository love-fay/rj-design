import React from 'react';
import { Button, Space } from 'rjd';

export default () => {
    return (
        <div>
            <Button type="primary">Primary</Button>
            <Space/>
            <Button>Default</Button>
            <Space/>
            <Button type="dashed">Dashed</Button>
            <Space/>
            <Button type="danger">Danger</Button>
        </div>
    );
}