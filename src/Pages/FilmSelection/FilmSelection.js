import {useState} from "react";
import React from 'react';
import {options} from "./sampleData";
import {Button, Grid} from "@material-ui/core";
import {useStyles} from "./FilmSelection.style";
import {CustomAutocomplete} from "../../components/CustomAutocomplete/CustomAutocomplete";
import {GroupSelectionModal} from "./helper/GroupSelectionModal/GroupSelectionModal";
import {TextBox} from "../../components/TextBox/TextBox";

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
                                    values={values}
                                    setValue={handleReplaceValues}
                                    groupBy={'group'}
                />

                <span>OR</span>
                <Button variant={"outlined"} onClick={handleOpenModal}>Select Group</Button>
            </div>

            {selectedGroup ? <GroupSection
                selectedGroup={selectedGroup}
                values={values}
                handleAdd={handleAdd}
            /> : null}

            {values.length ? <SelectedOptionsSection
                values={values}
                handleDeleteValue={handleDeleteValue}
            /> : null}

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


const SelectedOptionsSection = React.memo(({
                                               values,
                                               handleDeleteValue,
                                           }) => (
    <div>
        <h3>selected options ({values.length}):</h3>
        <Grid container spacing={2}>
            {values.map(({title, year, group}) => (
                <Grid item>
                    <TextBox handleClick={() => handleDeleteValue(title)} variant={'delete'}>
                        {title}
                    </TextBox>
                </Grid>
            ))}
        </Grid>
    </div>
))

const GroupSection = React.memo(({
                                     selectedGroup,
                                     values,
                                     handleAdd,
                                 }) => (
    <div>
        <h3>{`<<${selectedGroup}>> Options`}:</h3>
        <Grid container spacing={2}>
            {options.filter(option => option.group === selectedGroup).map((option) => (
                !values.find(({title}) => title === option.title) ? (
                    <Grid item key={option.title}>
                        <TextBox handleClick={() => handleAdd(option)} variant={'add'}>
                            {option.title}
                        </TextBox>
                    </Grid>
                ) : null
            ))}
        </Grid>
    </div>
))
