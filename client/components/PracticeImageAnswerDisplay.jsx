import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import NextCMPT from "./NextCMPT";
import {Typography} from "@material-ui/core";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
    display: 'inline-table',
    // justifyContent: 'center'
  },
}));

const PracticeImageAnswerDisplay = (props) => {
  const classes = useStyles();

  return (
    <div>
      <img src={props.url}/>
      <div className={classes.root}>
        <Typography>
          <Box pt={5}>
            {props.question}
          </Box>
        </Typography>
      </div>
      {
        (!props.choices[2] || props.choices[2] === 'n/a') ?
          (
            <div className={classes.root}>
              <FormControl component={"fieldset"} className={classes.formControl}>
                <FormLabel component={"legend"}>
                  <RadioGroup className={classes.group}>
                    <FormControlLabel
                      value={props.choices[0]}
                      control={<Radio />}
                      label={props.choices[0]}
                      checked={true}
                    />
                    <FormControlLabel
                      value={props.choices[1]}
                      control={<Radio />}
                      label={props.choices[1]}
                      disabled
                    />
                  </RadioGroup>
                </FormLabel>
              </FormControl>
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
                      checked={true}
                    />
                    <FormControlLabel
                      value={props.choices[1]}
                      control={<Radio />}
                      label={props.choices[1]}
                      disabled
                    />
                    <FormControlLabel
                      value={props.choices[2]}
                      control={<Radio />}
                      label={props.choices[2]}
                      disabled
                    />
                    <FormControlLabel
                      value={props.choices[3]}
                      control={<Radio />}
                      label={props.choices[3]}
                      disabled
                    />
                  </RadioGroup>
                </FormLabel>
              </FormControl>
            </div>
          )
      }
      <NextCMPT changeSlide={props.changeSlide}/>
    </div>
  )
};

export default PracticeImageAnswerDisplay;
