import {
  Link,
} from 'react-router-dom';

import {
  MenuItem,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    style: {
      color: '#F9F9F8',
      fontSize: 20,
      textDecoration: 'none',
    },
  }));

function ButtonLink(props) {
  const classes = useStyles();
  return (
      <MenuItem>
        <Link
        className={classes.style}
        to={props.redirection} >
        {props.title}
        </Link>
      </MenuItem>
  );
}

export default ButtonLink;
