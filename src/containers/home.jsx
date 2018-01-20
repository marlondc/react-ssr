import { connect } from 'react-redux';
import Home from '../pages/home';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  what: () => dispatch(() => console.log('what')),
  hello: () => console.log('hello'),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
