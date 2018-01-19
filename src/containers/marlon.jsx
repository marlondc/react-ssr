import { connect } from 'react-redux';
import Marlon from '../components/marlon';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  hello: () => dispatch(() => console.log('hello')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Marlon);
