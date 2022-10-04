import React from 'react';
import Switch from '@mui/material/Switch';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Slider from '@mui/material/Slider';
import MenuItem from "@mui/material/MenuItem";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function valuetext(value) {
    return `${value} years`;
}
function valuetext2(value) {
    return `${value} km`;
}

const Filter = () => {
    const marks = [
        {
            value: 20,
            label: '20 years',
        },
        {
            value: 50,
            label: '50 years',
        },
        {
            value: 80,
            label: '80 years',
        }
    ];

    const [value, setValue] = React.useState([20, 37]);

    const [checked, setChecked] = React.useState(true);

    const handleChangeAutoSwitch = (event) => {
        setChecked(event.target.checked);
    };

    const handleChangeAge = (event, newValue) => {
        setValue(newValue);
    };

    const [distance, setDistance] = React.useState('');
    const handleChangeDistance = (event) => {
        setDistance(event.target.value);
    };
    const [date, setDate] = React.useState('');
    const handleChangeDate = (event) => {
        setDate(event.target.value);
    };
    const [gendervalue, setGender] = React.useState('');
    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    return (
        <div className="filter-box">
            <FormControlLabel
                value="start"
                control={<Switch color="primary" />}
                checked={checked}
                onChange={handleChangeAutoSwitch}
                label="Automatic Filtering"
                labelPlacement="start"
            />
            {!checked && <ul className="filter-list">
                <li className ="filter-option">

                </li>

                <li className="filter-option">
                    Age Range
                    <Slider
                        getAriaLabel={() => 'Age range'}
                        value={value}
                        onChange={handleChangeAge}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        marks={marks}
                    /></li>

                <li className="filter-option">
                    <FormControl fullWidth>
                        <InputLabel id="distance-select-label">Max Distance</InputLabel>
                        <Select
                            labelId="distance-select-label"
                            id="distance-select"
                            value={distance}
                            label="Distance"
                            onChange={handleChangeDistance}
                        >
                            <MenuItem value={10}>10 km</MenuItem>
                            <MenuItem value={20}>20 km</MenuItem>
                            <MenuItem value={30}>30 km</MenuItem>
                            <MenuItem value={40}>40 km</MenuItem>
                            <MenuItem value={50}>50 km</MenuItem>
                            <MenuItem value={100}>100 km</MenuItem>
                            <MenuItem value={200}>200 km</MenuItem>
                        </Select>
                    </FormControl>

                </li>

                <li className="filter-option">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Diagnosis Code" variant="outlined" />
                    </Box>
                </li>

                <li className="filter-option">
                    <FormControl fullWidth>
                        <InputLabel id="date-select-label">Date Posted</InputLabel>
                        <Select
                            labelId="date-label"
                            id="date-select"
                            value={date}
                            label="Date Posted"
                            onChange={handleChangeDate}
                        >
                            <MenuItem value={0}>Any</MenuItem>
                            <MenuItem value={7}>Last 7 days</MenuItem>
                            <MenuItem value={14}>Last 14 days</MenuItem>
                            <MenuItem value={30}>Last month</MenuItem>
                            <MenuItem value={60}>Last 2 months</MenuItem>
                            <MenuItem value={90}>Last 3 months</MenuItem>
                            <MenuItem value={180}>Last 6 months</MenuItem>
                            <MenuItem value={365}>Last year</MenuItem>
                        </Select>
                    </FormControl>

                </li>

                <li className="filter-option">
                    <FormControl fullWidth>
                        <InputLabel id="gender-select-label">Gender</InputLabel>
                        <Select
                            labelId="gender-label"
                            id="gender-select"
                            value={gendervalue}
                            label="Gender"
                            onChange={handleChangeGender}
                        >
                            <MenuItem value={0}>Male</MenuItem>
                            <MenuItem value={1}>Female</MenuItem>
                            <MenuItem value={2}>Other</MenuItem>
                        </Select>
                    </FormControl>

                </li>
            </ul>}

        </div>
    );
}



export default Filter;