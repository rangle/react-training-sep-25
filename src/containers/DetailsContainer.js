import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Details } from '../components/Details';

const userSelector = createSelector(
  [state => state.users, (state, props) => +props.match.params.uid],
  (users, uid) => users.find(user => user.uid === uid),
);

const mapStateToProps = (state, props) => ({
  user: userSelector(state, props),
});

const DetailsContainer = connect(mapStateToProps, null)(Details);

export default DetailsContainer;
