import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';
import * as S from './Sidebar.styles';
import NavGroup from './NavGroup';

const routes = [
    { title: 'Home', icon: 'fas fa-house', path: '/' },
    { title: 'Sales', icon: 'fas fa-chart-line', path: '/sales' },
    { title: 'Costs', icon: 'fas fa-chart-column', path: '/costs' },
    { title: 'Payments', icon: 'fas fa-wallet', path: '/payments' },
    { title: 'Finances', icon: 'fas fa-chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'fas fa-envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'fas fa-sliders', path: '/settings' },
    { title: 'Support', icon: 'fas fa-phone-volume', path: '/support' },
    { title: 'Theme', icon: 'moon', action: 'toggle-theme' },
];

const Sidebar = ({ isOpened, color, onThemeToggle }) => {
    return (
        <S.SidebarContainer $isOpened={isOpened} $color={color}>
            <S.TopSection>
                <S.LogoWrapper $isOpened={isOpened}>
                    <S.Logo src={logo} alt="Logo" />
                    <S.LogoText $isOpened={isOpened} $color={color}>
                        TensorFlow
                    </S.LogoText>
                </S.LogoWrapper>
            </S.TopSection>

            <S.RoutesWrapper>
                <NavGroup
                    routes={routes}
                    isOpened={isOpened}
                    color={color}
                    onThemeToggle={onThemeToggle}
                />
            </S.RoutesWrapper>

            <S.BottomRoutesWrapper>
                <NavGroup
                    routes={bottomRoutes}
                    isOpened={isOpened}
                    color={color}
                    onThemeToggle={onThemeToggle}
                />
            </S.BottomRoutesWrapper>
        </S.SidebarContainer>
    );
};

Sidebar.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    color: PropTypes.oneOf(['light', 'dark']).isRequired,
    onThemeToggle: PropTypes.func.isRequired,
};

export default Sidebar;