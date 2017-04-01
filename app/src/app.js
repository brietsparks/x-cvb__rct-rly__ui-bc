import React from 'react';
import ReactDom from 'react-dom';
import Relay from 'react-relay';
import AppRoute from './routes/AppRoute'
import ProfileBuilder from './components/ProfileBuilder'

// get this from cookie
const profileId = '1b0fc480-3a83-4531-9207-35a53ae1dfa4';

ReactDom.render(
  <Relay.RootContainer
    Component={ProfileBuilder}
    route={new AppRoute({
      profileId: profileId
    })}
  />,
  document.getElementById('app')
);