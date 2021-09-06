import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 25,
  },
  pos: {
    marginBottom: 12,
  },
});

function SimpleCard(props: any) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;


  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {props.task.title}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
            {props.task.description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
            <DeleteIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default SimpleCard