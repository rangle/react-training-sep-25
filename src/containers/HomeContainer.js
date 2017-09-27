import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { updateQuery } from '../reducers';
import { Home } from '../components/Home';
import { getFilteredUsers } from '../api/users';

const filteredUsersSelector = createSelector(
  [state => state.ui.query, state => state.users],
  (query, users) => getFilteredUsers(query, users),
);

const mapStateToProps = state => ({
  query: state.ui.query,
  users: filteredUsersSelector(state),
});
const mapDispatchToActions = {
  onQueryChange: updateQuery,
};

const HomeContainer = connect(mapStateToProps, mapDispatchToActions)(Home);

export default HomeContainer;
