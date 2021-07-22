import React, {memo} from "react";
import {useStyles} from "../../FilmSelection.style";
import {Grid, Icon, Modal} from "@material-ui/core";
import clsx from "clsx";
import CloseIcon from "@material-ui/icons/Close";

export const GroupSelectionModal=memo(({
                                    isModal,
                                    handleCloseModal,
                                    selectedGroup,
                                    handleGroupSelection,
                                    groups
                                })=>{
    const classes = useStyles()

    return(
        <Modal
            open={isModal}
            onClose={handleCloseModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className={classes.modalContainer}>
                <h3>Select A Group:</h3>
                <Grid container spacing={2}>
                    {groups.filter((group) => group !== selectedGroup).map((group) => (
                        <Grid item>
                                <span className={clsx(classes.eachSelected, classes.eachSelectedGroup)}
                                      onClick={() => handleGroupSelection(group)}
                                      key={group}>
                                    <Icon>
                                    <CloseIcon fontSize={'small'}/>
                                        </Icon>
                                    <span>{group}</span>
                                </span>
                        </Grid>
                    ))}
                </Grid>
                {selectedGroup ? (
                    <span className={clsx(classes.eachSelected, classes.eachSelectedGroup)}
                          style={{marginTop: 40, border: 'unset', marginLeft: 'auto'}}
                          onClick={() => handleGroupSelection(null)}>
                                    <span>Clear</span>
                                </span>
                ) : null}
            </div>
        </Modal>
    )
})