import { connect } from 'react-redux';
import { updateQuery } from '../reducers';
import { Home } from '../components/Home';

const mapStateToProps = state => ({
  query: state.ui.query,
  users: state.users,
});
const mapDispatchToActions = {
  onQueryChange: updateQuery,
};

export const HomeContainer = connect(mapStateToProps, mapDispatchToActions)(
  Home,
);
