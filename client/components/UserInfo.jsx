import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 400,
    marginTop: 10,
    // maxWidth: 400,
    display: 'flex',

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: '1.5rem',
  },
  pos: {
    marginBottom: 12,
  },
});
const UserInfo = (props) => {
  console.log('userdata', props)
  const classes = useStyles();
  return (
    <Card className={classes.card}>
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
      <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'column'}}>
      <li>First Name: {props.firstName}</li>
      <li>Last Name: {props.lastName}</li>
      <li>Middle Initial: {props.middleInitial}</li>
      <li>Rank: {props.rank}</li>
      <li>Years In Service: {props.yearsInService}</li>
      <li>Years In Special Ops: {props.yearsInSpecialOps}</li>
      <li>Military Occupational Specialty: {props.MOS}</li>
      <li>Date of Assessment: {props.dateOfAssessment}</li>
      </ul>
      </Typography>
    </CardContent>

  </Card>

  )
}

// MOS: ""
// dateOfAssessment: ""
// firstName: ""
// lastName: ""
// middleInitial: ""
// rank: ""
// yearsInService: ""
// yearsInSpecialOps: ""

export default UserInfo
