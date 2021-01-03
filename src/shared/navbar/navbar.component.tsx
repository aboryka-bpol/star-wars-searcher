import { Breadcrumbs, Container, Grid, Link } from '@material-ui/core';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Title from './styled';
import { theme, GrayBackground } from '../../styled';

const Navbar = () => {
  const location = useLocation();
  const isActive = (value: string) => (location.pathname === value ? 'textPrimary' : 'primary')
    return (
      <React.Fragment>
        <Container>
          <Title theme={theme}>Star Wars API searcher</Title>
        </Container>
        <GrayBackground>
        <Container>
        <Grid 
          container
          justify="flex-end"
          alignItems="flex-start">
          <Breadcrumbs aria-label="breadcrumb">
            <Link href="/planets" color={isActive('/planets')}>Planets</Link>
            <Link href="/spaceships" color={isActive('/spaceships')}>Spaceships</Link>
            <Link href="/vehicles" color={isActive('/vehicles')}>Vehicles</Link>
            <Link href="/people" color={isActive('/people')}>People</Link>
            <Link href="/films" color={isActive('/films')}>Films</Link>
            <Link href="/species" color={isActive('/species')}>Species</Link>
          </Breadcrumbs>
        </Grid>
        </Container>
        </GrayBackground>
      </React.Fragment>
    );
  }
  
  export default Navbar;
  