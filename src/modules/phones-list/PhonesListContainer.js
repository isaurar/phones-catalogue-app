import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {fetchPhones} from './actions';
import PhoneList from './components/PhonesList.js';
import {CircularProgress} from '@material-ui/core';
import PhonesListPagination from './components/PhonesListPagination.js';

const PhonesListContainer = () => {
    const {
        data,
        metadata,
        isFetching
    } = useSelector(({phones}) => phones);
    const location = useLocation();
    const {search} = location;
    const params = new URLSearchParams(search);
    const limit = Number(params.get('limit'));
    const page = Number(params.get('page'));
    //TODO: move to custom hook
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPhones(page));
    }, [location, page, dispatch]);
    return (
        <div>
            <h2>Phones List Container</h2>
            {!data || isFetching ? <CircularProgress></CircularProgress> : <Fragment>
                <PhoneList data={data} />
                {
                    metadata &&
                    <PhonesListPagination
                        limit={limit}
                        total={metadata.total}
                        page={page}
                    />
                }
            </Fragment>}
        </div>
    );
};

export default PhonesListContainer;