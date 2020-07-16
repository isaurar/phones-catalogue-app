import React from 'react';
import { useLocation, useHistory } from "react-router-dom";
import Pagination from '@material-ui/lab/Pagination';

const PhonesListPagination = ({page, limit, total}) => {
    const history = useHistory();
    const location = useLocation();
    const {pathname} = location;
    const count = Math.ceil(total / limit);
    const handleChange = (event, page) => {
        const params = new URLSearchParams({limit, page}).toString();
        history.push(`${pathname}?${params}`);
    };
    return <Pagination
        count={count}
        page={page}
        onChange={handleChange}
    />
};

export default PhonesListPagination;