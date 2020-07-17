import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconAndroidPhone from '@material-ui/icons/PhoneAndroid';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles({
    listItem: {
        padding: '1rem'
    }
});

const PhonesList = ({data}) => {
    const history = useHistory();
    const classes = useStyles();
    return data ? <div>
        <List dense>
            {data.map(({id, title}, i) => <Fragment  key={i}>
                <ListItem button className={classes.listItem} onClick={() => history.push(`/phone-details/${id}`)}>
                    <ListItemIcon>
                        <IconAndroidPhone />
                    </ListItemIcon>
                    <ListItemText primary={`${title}`} />
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