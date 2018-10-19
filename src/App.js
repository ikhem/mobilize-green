import React, { Component } from 'react';
import './App.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    maxWidth: 845,
    margin: 10,
  },
  media: {
    height: 140,
  },
};


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      workshops: [
        {
          title: 'General Session',
          facilitator: 'Leah Allen',
          location: 'Main Hall',
          description: 'Dissecting the Intersectiong of Race Environmental Equity and Pop Culture',
          time: '11:00-12:00',
        },
        {
          title: 'Gender in Todays Modern Era',
          facilitator: 'Kathy Vue',
          location: 'Main Hall',
          description: 'Dissecting the Intersectiong of Race Environmental Equity and Pop Culture',
          time: '01:00-02:00',
        },
        {
          title: 'What is Wrong with Todays Youth',
          facilitator: 'Paul Allen',
          location: 'Lobby',
          description: 'Why wont youth today go out and vote',
          time: '03:00-400',
        }
      ]
    }
  }

  render() {

    const { classes } = this.props;
    const { workshops } = this.state;

    return (
      <div className={classes.root}>
        {
          workshops.map((item) => {
            return (
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography component="p">
                      <b>Facilitator:</b> {item.facilitator}
                    </Typography>
                    <Typography component="p">
                      <b>Description:</b> {item.description}
                    </Typography>
                    <Typography component="p">
                      <b>Duration:</b> {item.time}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Register
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            )
          })
        }
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);


