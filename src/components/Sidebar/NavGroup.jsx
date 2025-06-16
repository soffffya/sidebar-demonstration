import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as S from './NavGroup.styles';

const NavGroup = ({ routes, isOpened, color, onThemeToggle }) => (
    <S.NavSection>
        {routes.map(route => {
            const isThemeToggle = route.action === 'toggle-theme';
            const icon = isThemeToggle
                ? color === 'light' ? 'moon' : 'sun'
                : route.icon;

            const handleClick = isThemeToggle ? onThemeToggle : undefined;

            return (
                <S.NavItem
                    key={route.title}
                    $color={color}
                    onClick={handleClick}>
                    <S.NavContent className="nav-content" $isOpened={isOpened} $color={color}>
                        <div className="icon">
                            <FontAwesomeIcon icon={icon} />
                        </div>
                        <span>{route.title}</span>
                    </S.NavContent>
                </S.NavItem>
            );
        })}
    </S.NavSection>
);

NavGroup.propTypes = {
    routes: PropTypes.array.isRequired,
    isOpened: PropTypes.bool.isRequired,
    color: PropTypes.oneOf(['light', 'dark']).isRequired,
    onThemeToggle: PropTypes.func.isRequired,
};

export default NavGroup;