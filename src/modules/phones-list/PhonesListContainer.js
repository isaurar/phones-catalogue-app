import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './actions';

const PhonesListContainer = props => {
    console.log('props', props);
    return (
        <div>Phones List Container</div>
    );
};

const mapStateToProps = ({phones}) => phones || {};
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonesListContainer);