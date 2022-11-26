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
function valuevisits(value) {
    return `${value} visits`;
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
    const marksVisits = [
        {
            value: 20,
            label: '20',
        },
        {
            value: 50,
            label: '50',
        },
        {
            value: 80,
            label: '80',
        }
    ];

    const [value, setValue] = React.useState([20, 37]);
    const [valueVisits, setValueVisits] = React.useState(25);

    const [checked, setChecked] = React.useState(true);

    const handleChangeAutoSwitch = (event) => {
        setChecked(event.target.checked);
    };

    const handleChangeAge = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeVisits = (event, newValue) => {
        setValueVisits(newValue);
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
            {<ul className="filter-list">
                <li className ="filter-option">

                </li>

                <li className="filter-option">
                    Age Range
                    <Slider

                        disabled={checked}
                        getAriaLabel={() => 'Age range'}
                        value={value}
                        onChange={handleChangeAge}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        marks={marks}
                    />
                </li>

                <li className="filter-option">
                    <FormControl fullWidth>
                        <InputLabel
                            id="country-select-label">Country</InputLabel>
                        <Select
                            sx={{
                                '.MuiOutlinedInput-notchedOutline': {
                                    borderColor: "primary.main"
                                }
                            }}
                            disabled={checked}
                            labelId="country-label"
                            id="country-select"
                            value={date}
                            label="Country"
                            onChange={handleChangeDate}
                        >
                            {["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua & Deps","Argentina",
                                "Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh",
                                "Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia Herzegovina",
                                "Botswana","Brazil","Brunei","Bulgaria","Burkina","Burundi","Cambodia","Cameroon",
                                "Canada","Cape Verde","Central African Rep","Chad","Chile","China","Colombia","Comoros",
                                "Congo","Congo {Democratic Rep}","Costa Rica","Croatia","Cuba","Cyprus",
                                "Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor",
                                "Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia",
                                "Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece",
                                "Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary",
                                "Iceland","India","Indonesia","Iran","Iraq","Ireland {Republic}","Israel","Italy",
                                "Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea North",
                                "Korea South","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho",
                                "Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar",
                                "Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania",
                                "Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro", "Morocco",
                                "Mozambique","Myanmar, {Burma}","Namibia","Nauru","Nepal","Netherlands","New Zealand",
                                "Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palau","Panama",
                                "Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar",
                                "Romania","Russian Federation","Rwanda","St Kitts & Nevis","St Lucia",
                                "Saint Vincent & the Grenadines","Samoa","San Marino","Sao Tome & Principe",
                                "Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia",
                                "Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka",
                                "Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan",
                                "Tanzania","Thailand","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey",
                                "Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom",
                                "United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam",
                                "Yemen","Zambia","Zimbabwe"].map((val,ind) =>
                                <MenuItem key={ind} value={val}>{val}</MenuItem>)}
                        </Select>
                    </FormControl>

                </li>

                <li className="filter-option">
                    <Box
                        sx={{
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: "primary.main"
                            }
                        }}
                        disabled={checked}
                        component="form"

                        noValidate
                        autoComplete="off"
                    >
                        <TextField disabled={checked}
                                   sx={{
                                       '.MuiOutlinedInput-notchedOutline': {
                                           borderColor: "primary.main"
                                       }
                                   }}
                                   id="city-picker" label="City" variant="outlined" />
                    </Box>
                </li>

                <li className="filter-option">
                    <FormControl fullWidth>
                        <InputLabel id="distance-select-label">Max Distance</InputLabel>
                        <Select
                            sx={{
                                '.MuiOutlinedInput-notchedOutline': {
                                    borderColor: "primary.main"
                                }
                            }}
                            disabled={checked}
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
                        sx={{
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: "primary.main"
                            }
                        }}
                        disabled={checked}
                        component="form"

                        noValidate
                        autoComplete="off"
                    >
                        <TextField disabled={checked}
                                   sx={{
                                       '.MuiOutlinedInput-notchedOutline': {
                                           borderColor: "primary.main"
                                       }
                                   }}
                                   id="diagnosis-picker" label="Diagnosis Code" variant="outlined" />
                    </Box>
                </li>

                <li className="filter-option">
                    <FormControl fullWidth>
                        <InputLabel
                            id="date-select-label">Date Posted</InputLabel>
                        <Select
                            sx={{
                                '.MuiOutlinedInput-notchedOutline': {
                                    borderColor: "primary.main"
                                }
                            }}
                            disabled={checked}
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
                            sx={{
                                '.MuiOutlinedInput-notchedOutline': {
                                    borderColor: "primary.main"
                                }
                            }}
                            disabled={checked}
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

                <li className="filter-option">
                    Max Visits
                    <Slider

                        disabled={checked}
                        getAriaLabel={() => 'Max Visits'}
                        value={valueVisits}
                        onChange={handleChangeVisits}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuevisits}
                        marks={marksVisits}
                    />
                </li>

            </ul>}

        </div>
    );
}



export default Filter;