
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 }
];

class ConfigFileForm extends React.Component {
    render() {
        return (
            <form>
                <Paper style={{ padding: '16px' }}>
                    <h3>XYZ Details</h3>
                    <Grid container spacing={1}>
                        <Grid item xs={3}>

                            <TextField margin="dense" fullWidth id="outlined-basic" label="Sample Id" variant="outlined" />

                        </Grid>
                        <Grid item xs={9}>

                            <TextField margin="dense" fullWidth id="outlined-basic" label="Sample Name" variant="outlined" />

                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>

                            <TextField margin="dense" fullWidth id="outlined-basic" label="Sample field 1" variant="outlined" />

                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>

                            <TextField margin="dense" fullWidth id="outlined-basic" label="Sample field 2" variant="outlined" />

                        </Grid>
                    </Grid>

                    <h3>Sample Details</h3>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>

                            <FormControl variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">SAMPLE NAME</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value="TEST1"
                                    label="SAMPLE NAME"
                                    margin="dense"
                                    style={{ width: '100%' }}
                                >
                                    <MenuItem value="">
                                        <em>Module</em>
                                    </MenuItem>
                                    <MenuItem value={'TEST1'}>TEST 1</MenuItem>
                                    <MenuItem value={'TEST2'}>TEST 2</MenuItem>
                                    <MenuItem value={'TEST3'}>TEST 3</MenuItem>
                                </Select>
                            </FormControl>

                        </Grid>
                    </Grid>

                    <Grid container spacing={1}>
                        <Grid item xs={6}>

                            <FormControl variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">PRIMARY KEY</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value="0000"
                                    label="PRIMARY KEY"
                                    margin="dense"
                                    style={{ width: '100%' }}
                                >
                                    <MenuItem value="0000">
                                        <em>PRIMARY KEY</em>
                                    </MenuItem>
                                    <MenuItem value={2006}>2006</MenuItem>
                                    <MenuItem value={3456}>3456</MenuItem>
                                    <MenuItem value={2345}>2345</MenuItem>
                                </Select>
                            </FormControl>

                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="outlined" color="primary">
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
        );
    }
}




