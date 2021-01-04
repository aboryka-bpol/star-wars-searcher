import React from 'react';
import { Grid } from '@material-ui/core';
import { StyledTextField } from './styled';

interface IProps {
  placeholder: string;
  onSearchChange: (search: string) => void;
}

const Searchbar = ({ placeholder, onSearchChange }: IProps) => {
  return (
    <Grid container>
      <StyledTextField
        variant='outlined'
        label={placeholder}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </Grid>
  );
};

export default Searchbar;
