import React from 'react';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import PhonesListContainer from './modules/phones-list/PhonesListContainer';
import PhoneDetailsContainer from './modules/phone-details/PhoneDetailsContainer';

const useStyles = makeStyles({
  appBar: {
    padding: '1rem'
  },
  topBarSeparator: {
    marginBottom: '5rem'
  }
});

function App() {
  const classes = useStyles();
  return (
    <Container fixed>
      <AppBar className={classes.appBar}>
        <Typography variant="h6">Phones Catalogue</Typography>
      </AppBar>
      <div className={classes.topBarSeparator} />
      <Route path="/phones-list" component={PhonesListContainer}></Route>
      <Route path="/phone-details/:id" component={PhoneDetailsContainer}></Route>
    </Container>
  );
}

export default App;
