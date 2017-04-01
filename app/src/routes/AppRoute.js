import Relay from 'react-relay';

export default class extends Relay.Route {
  static queries = {
    profile: () => Relay.QL`query { profile(id: $profileId) }`,
  };
  static routeName = 'AppRoute';
}