import { connect } from 'react-redux';
import Main from '../components/main';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  hello: () => dispatch(() => console.log('hello')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
