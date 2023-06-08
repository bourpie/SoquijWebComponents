import { Typography } from "@mui/material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import './SqTypo.scss'

interface SqTypoProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body2';
    component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    text?: string;
}

const typoTheme = createTheme({
  typography: {
    h1: {
      fontSize: '2.75rem',
      fontWeight: 700,
      lineHeight: '3.25rem',
      letterSpacing: '.0275rem',
    },
    h2: {
      fontSize: '2.125rem',
      fontWeight: 700,
      lineHeight: '2.625rem',
      letterSpacing: '.02125rem',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: '2rem',
      letterSpacing: '.015rem',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: '2rem',
      letterSpacing: '.0125rem',
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: '1.25rem',
      letterSpacing: '.008125rem',
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: '1.25rem',
      letterSpacing: '.008125rem',
    },
    h6: {
      fontSize: '.8125rem',
      fontWeight: 500,
      lineHeight: '1.21875rem',
      letterSpacing: '0.008125rem',
    },
  },
});

export const SqTypo = ({
    text,
    variant,
    component,
    ...props
  }: SqTypoProps) => {
  return (
    <ThemeProvider theme={typoTheme}>
    <Typography 
        variant={variant} 
        component={component} 
        {...props}
    >{text}
    </Typography>

    </ThemeProvider>

  )
}
