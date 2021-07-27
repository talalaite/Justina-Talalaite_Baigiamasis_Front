import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.style';

import Logo from '../../assets/Logo.png';

const Header = ({ links }) => (
  <S.NavigationWraper>
    <S.NavigationBlock>
      <S.Logo src={Logo} alt="Bitenu medus logo" />
      <S.LinksBlock>
        {links &&
          links.map((link) => (
            <S.StyledLink
              key={link.url}
              exact
              to={link.url}
              activeClassName="active"
            >
              {link.title}
            </S.StyledLink>
          ))}

        {localStorage.getItem('user') ? (
          <S.Button
            onClick={() => {
              localStorage.removeItem('user');
              window.location.replace(
                'https://bitenu-medus-nef34.ondigitalocean.app/',
              );
            }}
          >
            logout
          </S.Button>
        ) : (
          <></>
        )}
      </S.LinksBlock>
    </S.NavigationBlock>
  </S.NavigationWraper>
);

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Header;
