import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useFetching = (someFetchActionCreator) => {
    console.log('USE FETCHING');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(someFetchActionCreator());
    });
};
