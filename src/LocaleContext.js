import React from 'react';

const LocaleContext = React.createContext({
    locale: 'en',
    handleChange: () => {},
});

export default LocaleContext;
