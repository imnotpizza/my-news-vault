import React from 'react';
import Style from './Style';
import Categories from '../Categories';
import UserProfile from '../UserProfile';

const Header = () => {
  return (
    <Style>
      <div>
        <div>
          <div>logo</div>
        </div>
        <div>
          <Categories />
        </div>
      </div>
      <div>
        <UserProfile />
      </div>
    </Style>
  );
};

export default Header;
