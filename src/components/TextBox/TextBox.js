import React, {memo} from "react";
import AddIcon from "@material-ui/icons/Add";
import {useStyles} from "./TextBox.style";
import CloseIcon from "@material-ui/icons/Close";
import {Tooltip} from "@material-ui/core";

export const TextBox = memo(({handleClick, children, variant = 'add'}) => {
    const classes = useStyles({variant})

    return (
        <Tooltip title={children} aria-label={children}>
        <span
            className={classes.eachSelected}
            onClick={handleClick}>
            {variant === 'add'
                ? <AddIcon fontSize={'small'}/>
                : <CloseIcon fontSize={'small'}/>}

            <span>
                {children}
            </span>
        </span>
        </Tooltip>
    )
})