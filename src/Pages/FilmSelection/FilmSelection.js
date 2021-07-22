import {useState} from "react";
import React from 'react';
import {options} from "./sampleData";
import {Button, Grid, Icon, Modal} from "@material-ui/core";
import {useStyles} from "./FilmSelection.style";
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import clsx from "clsx";
import {CustomAutocomplete} from "../../components/CustomAutocomplete/CustomAutocomplete";

function FilmSelection() {
    const classes = useStyles()

    const [selectedValues, setSelectedValues] = useState([])
    const [selectedGroup, isSelectedGroup] = useState(null)
    const [isModal, setIsModal] = useState(null)

    let groups = []
    options.map(({group}) => !groups.includes(group) && groups.push(group))

    const handleOpenModal = () => {
        setIsModal(true)
    }

    const handleCloseModal = () => {
        setIsModal(false)
    }

    const handleDelete = (title) => {
        let tmp = []
        tmp = selectedValues.filter((item) => item.title !== title)
        setSelectedValues(tmp)
    }

    const handleAdd = (option) => {
        setSelectedValues([...selectedValues, option])
    }

    const handleReplaceValues = (newValue) => {
        setSelectedValues(newValue)
    }

    const handleGroupSelection = (group) => {
        isSelectedGroup(group)
        setIsModal(false)
    }

    return (
        <div className="App">
            <h2>Film Selection by Name or Group Name</h2>
            <div className={classes.autocompleteContainer}>
                <CustomAutocomplete options={options}
                                    alues={selectedValues}
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
                                !selectedValues.find(({title}) => title == option.title) ? (
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
            {selectedValues.length ? <div>
                <h3>selected options ({selectedValues.length}):</h3>
                <Grid container spacing={2}>
                    {selectedValues.map(({title, year, group}) => (
                        <Grid item>
                                <span className={classes.eachSelected} onClick={() => handleDelete(title)}
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
            <Modal
                open={isModal}
                onClose={handleCloseModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.modalContainer}>
                    <h3>Select A Group:</h3>
                    <Grid container spacing={2}>
                        {groups.map((group) => (
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
                </div>
            </Modal>
        </div>
    );
}

export default FilmSelection;