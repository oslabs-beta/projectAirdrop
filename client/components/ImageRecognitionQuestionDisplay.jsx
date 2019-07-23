import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import UserSubmitBtn from "./UserSubmitBTN";

const useStyles = makeStyles(theme => ({
  root: {
  },
  formControl: {
    margin: theme.spacing(3),
    display: 'flex',
  },
  group: {
    margin: theme.spacing(1, 0),
    display: 'inline-table',
    justifyContent: 'center'
  },
}));

const ImageRecognitionQuestionDisplay = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.question}
      <FormControl component={"fieldset"} className={classes.formControl}>
        <FormLabel component={"legend"}>
          <RadioGroup className={classes.group}>
            <FormControlLabel
              value={props.choices[0]}
              control={<Radio />}
              label={props.choices[0]}
              checked={props.currentChoice === props.choices[0]}
              onChange={props.qid ? (e) => props.onChangeHandler(e, props.qid) : props.onPracticeHandler}
            />
            <FormControlLabel
              value={props.choices[1]}
              control={<Radio />}
              label={props.choices[1]}
              checked={props.currentChoice === props.choices[1]}
              onChange={props.qid ? (e) => props.onChangeHandler(e, props.qid) : props.onPracticeHandler}
            />
          </RadioGroup>
        </FormLabel>
      </FormControl>
      <UserSubmitBtn onSubmit={props.onSubmit}/>
    </div>
  )
};

export default ImageRecognitionQuestionDisplay
