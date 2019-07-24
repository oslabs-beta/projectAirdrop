import React from 'react';
import {Typography} from "@material-ui/core";

const SectionInstructions = (props) => (
  <div>
    <Typography>
      {props.instructions}
    </Typography>
  </div>
);

export default SectionInstructions;
