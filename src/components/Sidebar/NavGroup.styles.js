import styled from "styled-components";

export const NavSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 25px;
`;

export const NavItem = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover .nav-content {
        background-color: ${({ $color }) => `var(--color-sidebar-background-${$color}-hover)`};
        color: ${({ $color }) => `var(--color-text-${$color}-hover)`};
    }

    &:active .nav-content {
        background-color: ${({ $color }) => `var(--color-sidebar-background-${$color}-active)`};
        color: ${({ $color }) => `var(--color-text-${$color}-active)`};
    }
`;

export const NavContent = styled.div`
    all: unset;
    display: flex;
    align-items: center;
    height: 100%;
    width: ${({ $isOpened }) => ($isOpened ? '100%' : '40px')};
    padding: 0 16px;
    border-radius: 8px;
    transition: background-color 0.2s ease, color 0.2s ease, width 0.3s ease;

    color: ${({ $color }) => `var(--color-text-${$color}-default)`};

    .icon {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
    }

    .icon svg {
        fill: currentColor;
        color: inherit;
    }

    span {
        overflow: hidden;
        white-space: nowrap;
        margin-left: ${({ $isOpened }) => ($isOpened ? '12px' : '0')};
        opacity: ${({ $isOpened }) => ($isOpened ? 1 : 0)};
        max-width: ${({ $isOpened }) => ($isOpened ? '160px' : '0')};
        pointer-events: ${({ $isOpened }) => ($isOpened ? 'auto' : 'none')};
        visibility: ${({ $isOpened }) => ($isOpened ? 'visible' : 'hidden')};

        transition:
                opacity 0.3s ease,
                max-width 0.3s ease,
                margin-left 0.3s ease,
                visibility 0s linear ${({ $isOpened }) => ($isOpened ? '0s' : '0.3s')};
    }
`;