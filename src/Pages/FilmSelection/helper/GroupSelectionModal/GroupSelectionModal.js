import React, {memo} from "react";
import {useStyles} from "../../FilmSelection.style";
import {Button, Grid, Modal} from "@material-ui/core";
import {TextBox} from "../../../../components/TextBox/TextBox";

export const GroupSelectionModal = memo(({
                                             isModal,
                                             handleCloseModal,
                                             selectedGroup,
                                             handleGroupSelection,
                                             groups
                                         }) => {
    const classes = useStyles()

    return (
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
                            <TextBox handleClick={() => handleGroupSelection(group)} variant={'add'}>
                                {group}
                            </TextBox>
                        </Grid>
                    ))}
                </Grid>
                {selectedGroup ? (
                    <Button style={{marginLeft: 'auto', display: 'block'}} onClick={() => handleGroupSelection(null)}>
                        Clear
                    </Button>
                ) : null}
            </div>
        </Modal>
    )
})