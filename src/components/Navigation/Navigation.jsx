import { List, ListItem, Button } from '@mui/material';
import { navList } from 'services/constants';
import { navListStyle, navItemStyle, navButtonStyle } from './navigationStyles';

export const Navigation = ({ selectedPage, setSelectedPage }) => {
  return (
    <List sx={navListStyle}>
      {navList.map(item => {
        return (
          <ListItem key={item} sx={navItemStyle}>
            <Button
              className={selectedPage === item ? 'active' : ''}
              component="a"
              href={`#${item}`}
              onClick={() => setSelectedPage(item)}
              sx={navButtonStyle}
            >
              {item}
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};
