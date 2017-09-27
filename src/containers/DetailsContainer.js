import { connect } from 'react-redux';
import { Details } from '../components/Details';

const mapStateToProps = state => ({
  users: state.users,
});

export const DetailsContainer = connect(mapStateToProps, null)(Details);
