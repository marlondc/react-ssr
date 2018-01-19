import { connect } from 'react-redux';
import Main from '../components/main';
import { increment } from '../actions';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  hello: () => dispatch(increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
