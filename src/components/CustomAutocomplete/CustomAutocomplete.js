import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import React, {memo} from "react";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import {Autocomplete} from "@material-ui/lab";

export const CustomAutocomplete = memo(({values, setValue, options, groupBy = 'group'}) => {

    return (
        <Autocomplete
            multiple
            options={options}
            value={values}
            select
            onChange={(_, values) => {
                setValue(values)
            }}
            groupBy={(option) => option[groupBy]}
            getOptionLabel={(option) => option.title}
            disableCloseOnSelect
            renderOption={(option, {selected}) => (
                <>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{marginRight: 8}}
                        checked={selected}
                    />
                    {option.title}
                </>
            )}
            style={{width: 500}}
            renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Select Film" placeholder="Select From All Groups..."/>
            )}
        />
    )
})

const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
const checkedIcon = <CheckBoxIcon fontSize="small"/>;