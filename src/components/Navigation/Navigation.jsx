import { List, ListItem, Button } from '@mui/material';
import { navListStyle, navItemStyle, navButtonStyle } from './navigationStyles';
import { navList } from 'services/constants';

export const Navigation = () => {
  return (
    <List sx={navListStyle}>
      {navList.map(item => {
        return (
          <ListItem key={item} sx={navItemStyle}>
            <Button component="a" href={`#${item}`} sx={navButtonStyle}>
              {item}
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};
