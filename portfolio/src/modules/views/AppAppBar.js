import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import MenuBar from './MenuBar';

import { useSelector, useDispatch } from "react-redux";
import { signOut } from '../../redux/dataActions'

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};
const leftLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};



function AppAppBar() {

  const dispatch = useDispatch();
  const user = useSelector(state => state);

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 0, display: 'flex', justifyContent: 'flex-start' }}>
            <MenuBar />
          </Box>
          <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start' }}>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/project"
              sx={leftLink}
            >
              {'project'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/portfolio"
              sx={leftLink}
            >
              {'portfolio'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/contact"
              sx={leftLink}
            >
              {'contact'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/about"
              sx={leftLink}
            >
              {'about'}
            </Link>
          </Box>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24, paddingInline: 'inherit' }}
          >
            {'portfolio'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>

            {user.authenticated ? (<Link
              variant="h6"
              underline="none"
              onClick={() => { dispatch(signOut(user.user.token)) }}
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Sign Out'}
            </Link>) : (<Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/signin"
              sx={rightLink}
            >
              {'Sign In'}
            </Link>)}


          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div >
  );
}

export default AppAppBar;
