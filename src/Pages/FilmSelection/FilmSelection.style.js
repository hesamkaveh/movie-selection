import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    autocompleteContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    eachSelected: {
        transition: 'all linear 0.1s',
        border: '1px solid #333',
        borderRadius: '16px',
        padding: '4px 8px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        '&>span': {
            maxWidth: '100px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
        '&>span svg': {},
        '&:hover': {
            transition: 'all linear 0.1s',
            '&>span svg': {},
            backgroundColor: '#F44336',
            color: '#F5F5F5'
        }
    },
    eachSelectedGroup: {
        '&:hover': {
            backgroundColor: '#4CAF50',
            color: '#F5F5F5'
        }

    },
    modalContainer: {
        width: '50%',
        padding: '16px 32px 32px 32px',
        marginTop: '16px',
        borderRadius: '16px',
        backgroundColor: '#fff',
        position: 'absolute',
        top: '20%',
        left: '25%',
    }
});
