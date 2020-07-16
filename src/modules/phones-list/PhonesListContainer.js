import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {fetchPhones} from './actions';

const PhonesListContainer = () => {
    const phones = useSelector(({phones}) => phones);
    const {search} = useLocation();
    const params = new URLSearchParams(search);
    const limit = params.get('limit');
    const page = params.get('page');
    //TODO: move to custom hook
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPhones());
    }, [search, dispatch]);
    console.log(phones);
    return (
        <div>
            <h2>Phones List Container (offset: {limit}; page: {page})</h2>
        </div>
    );
};

export default PhonesListContainer;