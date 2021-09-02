import { Link } from 'react-router-dom';


import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { MenuItem } from '@material-ui/core';
import useStyles from './style';

function ButtonLink(props) {
  const classes = useStyles();
  return (
      <MenuItem>
        <Link
        className={classes.link}
        to={props.redirection} >
        { props.title === 'ExitToAppIcon' ? (
          <ExitToAppIcon/>
        ) : (
          props.title
        )
        }
        </Link>
      </MenuItem>
  );
}

export default ButtonLink;
