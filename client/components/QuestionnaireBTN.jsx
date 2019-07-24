import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    // justifyContent: 'center'
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
    // display: 'inline-table',
  },
}));

const QuestionnaireBTN = (props) => {
  const classes = useStyles();

  return (
  <div className={classes.root}>
    {props.questionnaire === 'CNAAQ' && (
      <FormControl className={classes.formControl} component={"fieldset"}>
        <FormLabel component={"legend"}>
          <RadioGroup className={classes.group}>
            <FormControlLabel
              type="radio"
              control={<Radio/>}
              checked={props.currentChoice[props.qid] === '1'}
              value={1}
              onChange={(e) => props.handleChange(e, props.qid)}
              label={"Strongly Disagree"}
              labelPlacement={"end"}
            />
            <FormControlLabel
              type="radio"
              control={<Radio/>}
              checked={props.currentChoice[props.qid] === '2'}
              value={2}
              onChange={(e) => props.handleChange(e, props.qid)}
              label={"Disagree"}
              labelPlacement={"end"}
            />
            <FormControlLabel
              type="radio"
              control={<Radio/>}
              checked={props.currentChoice[props.qid] === '3'}
              value={3}
              onChange={(e) => props.handleChange(e, props.qid)}
              label={"Neutral"}
              labelPlacement={"end"}
            />
            <FormControlLabel
              type="radio"
              control={<Radio/>}
              checked={props.currentChoice[props.qid] === '4'}
              value={4}
              onChange={(e) => props.handleChange(e, props.qid)}
              label={"Agree"}
              labelPlacement={"end"}
            />
            <FormControlLabel
              type="radio"
              control={<Radio/>}
              checked={props.currentChoice[props.qid] === '5'}
              value={5}
              onChange={(e) => props.handleChange(e, props.qid)}
              label={"Strongly Agree"}
              labelPlacement={"end"}
            />
          </RadioGroup>
        </FormLabel>
      </FormControl>
    )}

    {props.questionnaire !== 'CNAAQ' && (
      <FormControl className={classes.formControl} component={"fieldset"}>
        <FormLabel component={"legend"}>
          <RadioGroup className={classes.group}>
            <FormControlLabel
              type="radio"
              control={<Radio/>}
              checked={props.currentChoice[props.qid] === '1'}
              value={1}
              onChange={(e) => props.handleChange(e, props.qid)}
              label={"Strongly Disagree"}
              labelPlacement={"end"}
            />
            <FormControlLabel
              type="radio"
              control={<Radio/>}
              checked={props.currentChoice[props.qid] === '2'}
              value={2}
              onChange={(e) => props.handleChange(e, props.qid)}
              label={"Disagree"}
              labelPlacement={"end"}
            />
            <FormControlLabel
              type="radio"
              control={<Radio/>}
              checked={props.currentChoice[props.qid] === '3'}
              value={3}
              onChange={(e) => props.handleChange(e, props.qid)}
              label={"Mostly Disagree"}
              labelPlacement={"end"}
            />
            <FormControlLabel
              type="radio"
              control={<Radio/>}
              checked={props.currentChoice[props.qid] === '4'}
              value={4}
              onChange={(e) => props.handleChange(e, props.qid)}
              label={"Mostly Agree"}
              labelPlacement={"end"}
            />
            <FormControlLabel
              type="radio"
              control={<Radio/>}
              checked={props.currentChoice[props.qid] === '5'}
              value={5}
              onChange={(e) => props.handleChange(e, props.qid)}
              label={"Agree"}
              labelPlacement={"end"}
            />
            <FormControlLabel
              type="radio"
              control={<Radio/>}
              checked={props.currentChoice[props.qid] === '6'}
              value={6}
              onChange={(e) => props.handleChange(e, props.qid)}
              label={"Strongly Agree"}
              labelPlacement={"end"}
            />
          </RadioGroup>
        </FormLabel>
      </FormControl>
    )}
  </div>
)
};

export default QuestionnaireBTN
