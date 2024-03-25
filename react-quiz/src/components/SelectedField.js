'use client';
import * as React from 'react';

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  handleChnageCategory,
  handleChnageDifficulty,
  handleChnageType,
} from '@/redux/feature/questionSlice';
import { useDispatch } from 'react-redux';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const SelectedField = ({ select, label }) => {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);

    switch (label) {
      case 'Category':
        dispatch(handleChnageCategory(event.target.value));
        break;
      case 'Difficulty':
        dispatch(handleChnageDifficulty(event.target.value));
        break;
      case 'Type':
        dispatch(handleChnageType(event.target.value));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <FormControl sx={{ width: '100%', mt: 1 }}>
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          //   MenuProps={MenuProps}
        >
          {select.map(({ name, id }) => {
            return (
              <MenuItem
                key={id}
                value={id}
                // style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectedField;
