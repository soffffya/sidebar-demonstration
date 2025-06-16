import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types';

const AppLayout = ({ color = 'light', children }) => {
    const [isOpened, setIsOpened] = useState(true);
    const [theme, setTheme] = useState(color);

    const onThemeToggle = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <LayoutWrapper>
            <Sidebar isOpened={isOpened} color={theme} onThemeToggle={onThemeToggle} />
            <ToggleButtonOutside
                onClick={() => setIsOpened(prev => !prev)}
                $isOpened={isOpened}
                $themeColor={theme}
                aria-label={isOpened ? 'Close sidebar' : 'Open sidebar'}>
                <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
            </ToggleButtonOutside>
            <MainContent>{children}</MainContent>
        </LayoutWrapper>
    );
};

AppLayout.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node,
};

export default AppLayout;

const LayoutWrapper = styled.div`
    display: flex;
`;

const MainContent = styled.main`
    flex: 1;
    padding: 24px;
`;

const ToggleButtonOutside = styled.button`
    width: 40px;
    height: 40px;
    background-color: ${({ $isOpened, $themeColor }) =>
            $isOpened
                    ? `var(--color-sidebar-background-${$themeColor}-default)`
                    : `var(--color-sidebar-background-${$themeColor}-hover)`};
    color: ${({ $themeColor }) => `var(--color-text-${$themeColor}-default)`};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    margin-left: 8px;
    margin-top: 16px;
    cursor: pointer;
    z-index: 100;
    transition: background-color 0.3s ease, color 0.3s ease;
    user-select: none;
    outline: none;

    &:hover {
        background-color: ${({ $themeColor }) =>
                `var(--color-sidebar-background-${$themeColor}-hover)`};
        color: ${({ $themeColor }) => `var(--color-text-${$themeColor}-hover)`};
    }
`;