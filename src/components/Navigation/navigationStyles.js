export const navListStyle = {
  p: 0,
  display: 'flex',
  gap: '18px',
};

export const navItemStyle = {
  p: 0,
  width: 'auto',
};

export const navButtonStyle = {
  position: 'relative',
  p: '8px 16px',

  fontWeight: 300,
  lineHeight: 1.21,
  fontSize: '18px',
  color: 'neutral.main',
  textTransform: 'capitalize',

  '&:hover': { color: 'primary.accent' },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: 0,

    width: '100%',
    height: '1px',

    bgcolor: 'primary.accent',
    borderRadius: '8px',

    transform: 'scaleX(0)',
    transformOrigin: 'bottom right',
    transition: 'transform 300ms ease-in-out',
  },

  '&.active': {
    color: 'primary.accent',

    '&::after': {
      transform: 'scaleX(1)',
      transformOrigin: 'bottom left',
    },
  },
};
