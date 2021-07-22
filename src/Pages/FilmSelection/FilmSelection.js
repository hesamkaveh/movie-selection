import {memo, useState} from "react";
import React from 'react';
import {options} from "./sampleData";
import {Button, Grid, Icon, Modal} from "@material-ui/core";
import {useStyles} from "./FilmSelection.style";
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import clsx from "clsx";
import {CustomAutocomplete} from "../../components/CustomAutocomplete/CustomAutocomplete";
import {GroupSelectionModal} from "./helper/GroupSelectionModal/GroupSelectionModal";

function FilmSelection() {
    const classes = useStyles()

    const [values, setValues] = useState([])
    const [selectedGroup, isSelectedGroup] = useState(null)
    const [isModal, setIsModal] = useState(false)

    let groups = []
    options.map(({group}) => !groups.includes(group) && groups.push(group))

    const handleOpenModal = () => {
        setIsModal(true)
    }

    const handleCloseModal = () => {
        setIsModal(false)
    }

    const handleDeleteValue = (title) => {
        let tmp = []
        tmp = values.filter((item) => item.title !== title)
        setValues(tmp)
    }

    const handleAdd = (option) => {
        setValues([...values, option])
    }

    const handleReplaceValues = (newValue) => {
        setValues(newValue)
    }

    const handleGroupSelection = (group) => {
        isSelectedGroup(group)
        setIsModal(false)
    }

    return (
        <div>
            <h2>Film Selection by Name or Group Name</h2>
            <div className={classes.autocompleteContainer}>
                <CustomAutocomplete options={options}
                                    alues={values}
                                    setValue={handleReplaceValues}
                                    groupBy={'group'}
                />

                <span>OR</span>
                <Button variant={"outlined"} onClick={handleOpenModal}>Select Group</Button>

            </div>
            <div>
                {selectedGroup ? (
                    <div>
                        <h3>{`<<${selectedGroup}>> Options`}:</h3>
                        <Grid container spacing={2}>

                            {options.filter(option => option.group === selectedGroup).map((option) => (
                                !values.find(({title}) => title == option.title) ? (
                                    <Grid item key={option.title}>
                                <span className={clsx(classes.eachSelected, classes.eachSelectedGroup)}
                                      onClick={() => handleAdd(option)}
                                      key={option.title}>
                                    <Icon>
                                    <AddIcon fontSize={'small'}/>
                                        </Icon>
                                    <span>
                                    {option.title}
                                    </span>
                                </span>
                                    </Grid>
                                ) : null
                            ))}
                        </Grid>
                    </div>
                ) : null}

            </div>
            {values.length ? <div>
                <h3>selected options ({values.length}):</h3>
                <Grid container spacing={2}>
                    {values.map(({title, year, group}) => (
                        <Grid item>
                                <span className={classes.eachSelected} onClick={() => handleDeleteValue(title)}
                                      key={title}>
                                    <Icon>
                                    <CloseIcon fontSize={'small'}/>
                                        </Icon>
                                    <span>{title}</span>
                                </span>
                        </Grid>
                    ))}
                </Grid>
            </div> : null}
            <GroupSelectionModal
                isModal={isModal}
                handleCloseModal={handleCloseModal}
                selectedGroup={selectedGroup}
                handleGroupSelection={handleGroupSelection}
                groups={groups}
            />
        </div>
    );
}

export default FilmSelection;

