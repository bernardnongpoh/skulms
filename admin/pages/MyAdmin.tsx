
// admin/pages/MyCustomPage.tsx
/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@keystone-ui/core';

export default function () {
    return (
        <>
            <h1 css={{
                fontSize: '3rem'
            }}>This is a custom Admin UI Page</h1>
            <p>It can be accessed via the route '/MyCustomPage'</p>
        </>
    )
}