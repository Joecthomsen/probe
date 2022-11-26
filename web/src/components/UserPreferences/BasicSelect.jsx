import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props) {
    const [stuff, setStuff] = React.useState("");

    const handleChange = (event) => {
        setStuff(event.target.value);
        props.onValueChanged(event.target.value)
    };

    const selectorArray = props.myArray.map((element) => (
            <MenuItem value={element} key={props.labelName + element.id}> {element.text} </MenuItem>
        ));

    if (selectorArray.length > 0) {

        return (
            <Box sx={{minWidth: 120}}>
                <FormControl fullWidth>
                    <InputLabel id="basic-select-label"> {props.labelName} </InputLabel>
                    <Select
                        labelId="basic-select-label"
                        id="demo-simple-select"
                        value={stuff}
                        label="Age"
                        onChange={handleChange}
                    >
                        {selectorArray}
                    </Select>
                </FormControl>
            </Box>
        );

    } else {
        return (
            <p> Sorry no values available</p>
        )
    }
}
