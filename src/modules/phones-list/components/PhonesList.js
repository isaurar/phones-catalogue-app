import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {
    List,
    ListItem,
    ListItemIcon,
    Divider
} from '@material-ui/core';
import IconAndroidPhone from '@material-ui/icons/PhoneAndroid';
import {useHistory} from 'react-router-dom';

const PhonesList = ({data}) => {
    const history = useHistory();
    return data ? <div>
        <List dense>
            {data.map(({id, title}, i) => <Fragment  key={i}>
                <ListItem onClick={() => history.push(`/phone-details/${id}`)}>
                    <ListItemIcon>
                        <IconAndroidPhone />
                    </ListItemIcon>
                        #{id} {title}
                </ListItem>
                <Divider />
            </Fragment>)}
        </List>
    </div> : 'Empty';
};

PhonesList.propTypes = {
    data: PropTypes.array
};

export default PhonesList