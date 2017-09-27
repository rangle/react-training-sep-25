import { connect } from 'react-redux';
import { updateUsers } from './reducers';
import { App } from './components/App';

export const RootContainer = connect(null, { fetchUsers: updateUsers })(App);
