const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#fff',
    heading: '#000',
    text: '#3B454E',
    preFormattedText: 'rgb(245, 247, 249)',
    link: '#1000EE',
    primary: 'rgba(0,51,173,1)'
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#1d1e21',
    heading: '#fff',
    text: '#fff',
    preFormattedText: '#000',
    link: '#1ED3C6',
    primary: 'rgba(0,51,173,1)'
  },
};

export { lightTheme, darkTheme };
