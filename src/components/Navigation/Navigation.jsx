import { List, ListItem, Button } from '@mui/material';
import { navButtonStyle } from './navigationStyles';
import { navList } from 'services/constants';

export const Navigation = () => {
  return (
    <List sx={{ display: 'flex', p: 0, gap: '18px' }}>
      {navList.map(item => {
        return (
          <ListItem key={item} sx={{ width: 'auto', p: 0 }}>
            <Button sx={navButtonStyle}>{item}</Button>
          </ListItem>
        );
      })}
    </List>
  );
};
