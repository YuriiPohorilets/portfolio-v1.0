export const centeringElementsStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const buttonStyle = {
  p: '12px 48px',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: 1.21,
  textTransform: 'capitalize',
  borderRadius: '8px',
  boxShadow: '0 2px 2px rgba(0, 0, 0, 0.25)',
};

export const outlinedButtonStyle = {
  '&:hover': {
    bgcolor: 'active.accent',
    border: '1px solid #AA8B56',
    borderColor: 'primary.accent',
  },
  ...buttonStyle,
  color: 'neutral.main',
  bgcolor: 'transparent',
  border: '1px solid #AA8B56',
  borderColor: 'primary.accent',
};

export const containedButtonStyle = {
  '&:hover': {
    bgcolor: 'active.main',
  },
  ...buttonStyle,
  color: 'primary.darker',
  bgcolor: 'primary.accent',
};
