import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justify: 'center'
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
    display: 'inline-table'
  },
}));

const WMQuestionDisplay = props => {
  const classes = useStyles();

  return (
    <div>
    {props.question}
    {
      (props.choices[2] === "n/a") ?
        (
          <div className={classes.root}>
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
          <Button onClick={props.onSubmit}>Submit</Button>
          </div>
      ) : (
          <div className={classes.root}>
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
                  <FormControlLabel
                    value={props.choices[2]}
                    control={<Radio />}
                    label={props.choices[2]}
                    checked={props.currentChoice === props.choices[2]}
                    onChange={props.qid ? (e) => props.onChangeHandler(e, props.qid) : props.onPracticeHandler}
                  />
                  <FormControlLabel
                    value={props.choices[3]}
                    control={<Radio />}
                    label={props.choices[3]}
                    checked={props.currentChoice === props.choices[3]}
                    onChange={props.qid ? (e) => props.onChangeHandler(e, props.qid) : props.onPracticeHandler}
                  />
                </RadioGroup>
              </FormLabel>
            </FormControl>
          <Button onClick={props.onSubmit}>Submit</Button>
          </div>
      )
    }
    </div>
  )
};

export default WMQuestionDisplay;
