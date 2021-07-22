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
        backgroundColor: '#fff',
        width: '50%',
        margin: '0 auto',
        borderRadius: '16px',
        padding: '16px 32px 32px 32px',
        marginTop: 16
    }
});
