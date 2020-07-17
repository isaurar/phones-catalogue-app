import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchPhones } from './actions';
import PhoneList from './components/PhonesList.js';
import { CircularProgress, Box, Typography } from '@material-ui/core';
import PhonesListPagination from './components/PhonesListPagination.js';

const PhonesListContainer = () => {
    const {
        data,
        metadata,
        isFetching
    } = useSelector(({ phones }) => phones);
    const location = useLocation();
    const { search } = location;
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
            <Typography variant="h5">Phones List</Typography>
            {
                !data || isFetching ?
                    <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <CircularProgress></CircularProgress>
                    </Box> :
                    <Fragment>
                            <PhoneList data={data} />
                            {
                                metadata &&
                                <PhonesListPagination
                                    limit={limit}
                                    total={metadata.total}
                                    page={page}
                                />
                            }
                        </Fragment>
            }
        </div>
    );
};

export default PhonesListContainer;