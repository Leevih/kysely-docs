import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import { FormControlLabel, FormControl, FormLabel, RadioGroup } from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

const TypeMenu = ({ state }) => {
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    state.setType(event.target.name)
  };

  return (
    <div className="more-margin">
      <FormControl>
        <FormLabel component="legend">Vastausmuoto</FormLabel>
        <div className="more-margin">
          <RadioGroup aria-label="position" name="position" /* value={value} */ onChange={handleChange} row>
            <FormControlLabel
              value="top"
              control={
                <Radio color="primary"
                  checked={selectedValue === 'avoin'}
                  onChange={handleChange}
                  value="avoin"
                  name="avoin"
                  inputProps={{ 'aria-label': 'A' }}
                />}
              label="Avoin"
              labelPlacement="top"
            />
            <FormControlLabel
              value="top"
              control={
                <Radio
                  color="primary"
                  checked={selectedValue === 'monivalinta'}
                  onChange={handleChange}
                  value="monivalinta"
                  name="monivalinta"
                  inputProps={{ 'aria-label': 'B' }}
                />}
              label="Monivalinta"
              labelPlacement="top"
            />
          </RadioGroup>
        </div>
      </FormControl>
    </div>
  );
}


export default TypeMenu;