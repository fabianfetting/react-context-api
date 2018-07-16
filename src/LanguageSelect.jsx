import React, { Component } from 'react';
import LocaleContext from './LocaleContext';

class LanguageSelect extends Component {
    render() {
        return (
            <LocaleContext.Consumer>
                {context => (
                    <select value={context.locale} onChange={e => context.handleChange(e.target.value)}>
                        <option value="en">
                            <span role="img" aria-label="sheep">
                                🇺🇸 EN
                            </span>
                        </option>
                        <option value="de">
                            <span role="img" aria-label="sheep">
                                🇩🇪 DE
                            </span>
                        </option>
                    </select>
                )}
            </LocaleContext.Consumer>
        );
    }
}

export default LanguageSelect;
