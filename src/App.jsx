import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { createGlobalStyle } from 'styled-components';
import AppLayout from "./components/AppLayout.jsx";

library.add(fas);

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
`;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'light',
        };
    }

    toggleTheme = () => {
        this.setState(prev => ({
            color: prev.color === 'light' ? 'dark' : 'light'
        }));
    };

    render() {
        return (
            <>
                <GlobalStyle />
                <AppLayout
                    color={this.state.color}
                    onThemeToggle={this.toggleTheme} // передаём в AppLayout
                />
            </>
        );
    }
}