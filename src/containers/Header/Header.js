import React, {useContext} from 'react';
import {Text, View} from '@unthinkable/react-core-components';
import {MediaQueryContext} from '@unthinkable/react-theme';

import HeaderName from '../../components/HeaderName';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import LocaleSwitcher from '../../components/LocaleSwitcher/LocaleSwitcher';

import {TwoColumn} from '../../core/layouts';

import {AuthContext} from '../../globalContext/auth/authProvider';
import {clearAuthAndLogout} from './../../globalContext/auth/authActions';

import Styles from './header.style';

function useHeader() {
  const [, authDispatch] = useContext(AuthContext);

  const onLogout = () => {
    authDispatch(clearAuthAndLogout());
  };

  return {
    onLogout,
  };
}

function HeaderContainer() {
  const {onLogout} = useHeader();
  const {current: currentBreakpoint} = useContext(MediaQueryContext);

  return (
    <TwoColumn
      style={Styles.headerContainer}
      leftSection={<HeaderName />}
      rightSection={
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {currentBreakpoint !== 'md' ? (
            <>
              <ThemeSwitcher />
              <LocaleSwitcher />
            </>
          ) : null}
          <View
            style={{
              cursor: 'pointer',
              height: 48,
              padding: 15,
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={onLogout}>
            <Text>Logout</Text>
          </View>
        </View>
      }
      isLeftFillSpace={true}
      isRightFillSpace={false}
    />
  );
}
export default HeaderContainer;
