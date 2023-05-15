import React from 'react';

const userInfoContext = React.createContext({
  userInfo: {},
  setUserInfo: (user: any) => {},
});

const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = React.useState(null);

  return (
    <userInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </userInfoContext.Provider>
  );
};

export { userInfoContext, UserInfoProvider };
