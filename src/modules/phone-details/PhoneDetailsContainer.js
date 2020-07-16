import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';

const PhoneDetailsContainer = () => {
    return (
        <div>Phone Details Container</div>
    );
};

const mapStateToProps = ({phoneDetails}) => phoneDetails;

const mapDispatchToProps = dispatch => ({
    actions
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneDetailsContainer);