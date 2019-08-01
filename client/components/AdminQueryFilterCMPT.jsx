import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DownshiftMultiple from './DownshiftMultiple';
// import DownshiftTest from './DownshiftTest';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
  },
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const AdminQueryFilterCMPT = props => {
  const classes = useStyles();
  // const inputLabel = React.useRef(null);
  // const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);

  return (
    <div>
      {/* <Card >
        <CardContent>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
          Age
        </InputLabel>
        <Select
          native
          // value={state.age}
          // onChange={handleChange("age")}
          onChange={props.handleChange}
          input={
            <OutlinedInput
              name="age"
              labelWidth={labelWidth}
              id="outlined-age-native-simple"
            />
          }
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      </CardContent>
      </Card> */}

      <DownshiftMultiple 
      suggestions={props.suggestions}
      updateTable={props.updateTable}
      />
      {/* <DownshiftTest 

      /> */}
    </div>
  );
};

export default AdminQueryFilterCMPT;
