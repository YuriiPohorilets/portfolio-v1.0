export const itemStyle = {
  p: '16px',
  maxWidth: '366px',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
};

export const titleStyle = {
  fontWeight: 700,
  fontSize: '36px',
  lineHeight: 1.22,
};

export const imageWrapperStyle = {
  width: '334px',
  height: '170px',

  borderRadius: '8px',

  overflow: 'hidden',
};

export const imageStyle = {
  maxWidth: '100%',
  height: '170px',
};

export const skillListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  flexGrow: 1,
  alignItems: 'flex-start',
};

export const skillItemStyle = {
  p: '8px 16px',
  width: 'auto',
  height: 'auto',

  fontSize: '12px',
  lineHeight: 1.25,

  border: '1px solid #AA8B56',
  borderColor: 'primary.accent',
  borderRadius: '8px',
};

export const linkWrapperStyle = {
  display: 'flex',
  gap: '16px',
};

export const linkStyle = {
  p: 0,

  fontWeight: 300,
  fontSize: '16px',
  lineHeight: 1.25,
  color: 'neutral.main',
  textDecoration: 'underline',
  textTransform: 'none',

  '&:hover': { color: 'primary.accent', textDecoration: 'underline' },
};
