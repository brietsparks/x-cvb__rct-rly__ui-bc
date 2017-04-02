import React from 'react';
import ReactDom from 'react-dom';
import Relay, {
  DefaultNetworkLayer,
  RootContainer,
} from 'react-relay';
import AppRoute from './routes/AppRoute'
import Profile from './components/Profile'

// get this from cookie
const profileId = '1b0fc480-3a83-4531-9207-35a53ae1dfa4';

Relay.injectNetworkLayer(
  new DefaultNetworkLayer('http://localhost:8000/graphql')
);

ReactDom.render(
  <Relay.RootContainer
    Component={Profile}
    route={new AppRoute({
      profileId: profileId
    })}
  />,
  document.getElementById('app')
);