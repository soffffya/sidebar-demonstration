import styled, { css } from 'styled-components';

export const SidebarContainer = styled.div`
    width: ${({ $isOpened }) => ($isOpened ? '240px' : '80px')};
    transition: width 0.3s ease;
    background-color: ${({ $color }) => `var(--color-sidebar-background-${$color}-default)`};
    color: ${({ $color }) => `var(--color-text-${$color}-default)`};
    display: flex;
    flex-direction: column;
    height: 100dvh;
    overflow: hidden;
`;

export const RoutesWrapper = styled.div`
    padding: 0 16px;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
`;

export const BottomRoutesWrapper = styled.div`
    padding: 0 16px;
`;

export const TopSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 21px;
    margin-bottom: 24px;
`;

export const LogoWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: ${({ $isOpened }) => ($isOpened ? 'flex-start' : 'center')};
    width: ${({ $isOpened }) => ($isOpened ? 'auto' : '80px')};
`;

export const Logo = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;

export const LogoText = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: ${({ $color }) => `var(--color-text-${$color}-active)`};

    ${({ $isOpened }) =>
            css`
                opacity: ${$isOpened ? 1 : 0};
                max-width: ${$isOpened ? '200px' : '0'};
                white-space: nowrap;
                overflow: hidden;
                transition: opacity 0.3s ease, max-width 0.3s ease;
            `}
`;