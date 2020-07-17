import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhoneDetails } from './actions';
import {
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    CardActions,
    Button,
    Typography
} from '@material-ui/core';

const PhoneDetailsContainer = () => {
    const history = useHistory();
    const { id } = useParams();
    const { data, isFetching } = useSelector(({ phoneDetails }) => phoneDetails);
    const { title, image, brand, technology, announced, dimensions } = data || {};
    const description = Object.entries({ brand, technology, announced, dimensions });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPhoneDetails(id));
    }, [id, dispatch]);
    return !data || isFetching ? 'progress' : <Card>
        <Card variant="outlined">
            <CardActions>
                <Button size="small" color="primary" onClick={() => history.goBack()}>
                    Back
                </Button>
            </CardActions>
            <CardHeader title={title}></CardHeader>
            <CardMedia
                component="img"
                alt={description}
                height="600"
                image={image}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
                {
                    description.map(([key, val], i) =>
                        <Typography
                            key={i}
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {key.toUpperCase()}: {val}
                        </Typography>
                    )
                }
            </CardContent>
        </Card>
    </Card>;
};

export default PhoneDetailsContainer;