import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from '@material-ui/core/MenuItem';
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import Chip from "@material-ui/core/Chip";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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
  let columnField;
  let valueField;
  let valueSuggestions;
  // const inputLabel = React.useRef(null);
  // const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);
  switch(props.currentColumn){
    case "Rank":
      valueSuggestions = props.valueSuggestions.rank;
      break;
    case "MOS":
      valueSuggestions = props.valueSuggestions.mos;
      break;
    case "Years in Service":
      valueSuggestions = props.valueSuggestions.years;
      break;
    default:
      valueSuggestions = [];
  }
  if(props.displayValueField){
    console.log("help")
    valueField = 
    <span>
      <p> = </p>
      <DownshiftMultiple
        suggestions={valueSuggestions}
        updateTable={props.updateColumns}
      />
    </span>
  }
  if(props.displayColumnField){
    columnField = <div> 
      <p>Filter By</p>
      <DownshiftMultiple
        suggestions={props.columnSuggestions}
        updateTable={props.updateColumns}
      />
      {valueField}
  </div>
  }

  return (
    <div>
      <button onClick={props.addFilter}>Add Filter</button>
      {columnField}
      <DownshiftMultiple 
      suggestions={props.sectionSuggestions}
      updateTable={props.updateTable}
      />
    </div>
  );
};

export default AdminQueryFilterCMPT;
