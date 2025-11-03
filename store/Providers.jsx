'use client';

import { Provider } from 'react-redux';

export default function Providers({ store, children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}