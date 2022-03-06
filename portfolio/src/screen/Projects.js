import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Projectform from '../modules/components/Projectform';
import { Container } from '@mui/material';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';

function Projects() {
    return (
        <React.Fragment>
            <AppAppBar />
            <Container>
                <Grid sx={{ flexGrow: 1 }} container spacing={2}>

                    <Grid container justifyContent="center" spacing={2}>
                        {[0, 1, 2, 3, 4].map((value) => (
                            <Grid key={value} item xs>
                                <Projectform></Projectform>
                            </Grid>
                        ))}
                    </Grid>

                </Grid>
            </Container>

        </React.Fragment>
    )
}
export default withRoot(Projects);
