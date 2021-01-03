import { Breadcrumbs, Container, Grid, Link } from '@material-ui/core';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Title from './styled';
import { theme } from '../../styled';

const Navbar = () => {
  const location = useLocation();
  const isActive = (value: string) => (location.pathname === value ? 'textPrimary' : 'primary')
    return (
      <Container>
        <Title theme={theme}>Star Wars API searcher</Title>
        <Grid 
          container
          justify="flex-end"
          alignItems="flex-start">
          <Breadcrumbs aria-label="breadcrumb">
            <Link href="/" color={isActive('/')}>Planets</Link>
            <Link href="/spaceships" color={isActive('/spaceships')}>Spaceships</Link>
            <Link href="/vehicles" color={isActive('/vehicles')}>Vehicles</Link>
            <Link href="/people">People</Link>
            <Link href="/films">Films</Link>
            <Link href="/species">Species</Link>
          </Breadcrumbs>
        </Grid>
      </Container>
    );
  }
  
  export default Navbar;
  