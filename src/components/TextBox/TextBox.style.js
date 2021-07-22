import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
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
            backgroundColor: props => props.variant === 'add' ? '#4CAF50' : '#F44336',
            color: '#F5F5F5'
        }
    }
});
