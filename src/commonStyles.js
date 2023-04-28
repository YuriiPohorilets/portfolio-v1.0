export const centeringElementsStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const containerStyle = {
  mx: 'auto',
  px: '15px',
  maxWidth: '1280px',
};

export const wrapperStyle = {
  width: '100%',
  height: '100vh',

  backgroundSize: 'cover',
  scrollSnapAlign: 'start',
};

export const sectionStyle = {
  pt: '110px',
  pb: '60px',
};

export const smoothContainerStyle = {
  position: 'relative',

  width: '100%',
  height: '100vh',

  scrollBehavior: 'smooth',
  scrollSnapType: 'y mandatory',
  overflow: 'auto',
};

export const titleStyle = {
  mb: '48px',

  fontWeight: 700,
  fontSize: '36px',
  lineHeight: 1.22,
  color: 'primary.accent',
};

export const headerStyle = {
  position: 'fixed',
  zIndex: 99,

  py: '8px',
  width: '100%',

  bgcolor: 'primary.darker',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};

export const buttonStyle = {
  p: '12px 48px',

  fontWeight: '400',
  fontSize: '24px',
  lineHeight: 1.21,
  textTransform: 'none',

  borderRadius: '8px',
  boxShadow: '0 2px 2px rgba(0, 0, 0, 0.25)',
};

export const outlinedButtonStyle = {
  ...buttonStyle,

  color: 'neutral.main',

  bgcolor: 'transparent',
  border: '1px solid #AA8B56',
  borderColor: 'primary.accent',

  '&:hover': {
    bgcolor: 'active.accent',
    border: '1px solid #AA8B56',
    borderColor: 'primary.accent',
  },
};

export const containedButtonStyle = {
  ...buttonStyle,

  color: 'primary.darker',

  bgcolor: 'primary.accent',

  '&:hover': {
    bgcolor: 'active.main',
  },
};
