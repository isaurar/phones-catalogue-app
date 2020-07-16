import React, {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPhoneDetails} from './actions';
import {
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    CardActions,
    Button,
    Typography
} from '@material-ui/core';

const PhoneDetailsContainer = () => {
    const history = useHistory();
    const {id} = useParams();
    const {data, isFetching} = useSelector(({phoneDetails}) => phoneDetails);
    const {title, image, description} = data || {};
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPhoneDetails(id));
    }, [id, dispatch]);
    return !data || isFetching ? 'progress' : <Card>
        <CardActionArea>
            <CardMedia
                component="img"
                alt={description}
                height="140"
                image={image}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" onClick={() => history.goBack()}>
                Back
            </Button>
        </CardActions>
    </Card>;
};

export default PhoneDetailsContainer;