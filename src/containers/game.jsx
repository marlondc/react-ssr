import { connect } from 'react-redux';

import Game from '../pages/game';
import {
  pick,
} from '../actions/game';

const mapStateToProps = ({ game }) => game;

const mapDispatchToProps = dispatch => ({
  pick: pos => dispatch(pick(pos)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
