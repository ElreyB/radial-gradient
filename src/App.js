import React, { Component } from 'react';
import style, { ThemeProvider } from 'styled-components';

const RedialCard = style.div`
  font-size: ${props => {
    if (props.xl) return props.theme.fontSize.xl;
    if (props.lg) return props.theme.fontSize.lg;
    if (props.md) return props.theme.fontSize.md;
    if (props.sm) return props.theme.fontSize.sm;
    return props.theme.fontSize.nm;
  }};
  width: 500px;
  height: 500px;
  background: ${props => {
    // console.log(typeof props.radial);
    if (typeof props.radial === 'string') return props.radial;
    if (typeof props.radial === 'object') {
      const shape = props.radial.shape ? `${props.radial.shape},` : '';
      const size = props.radial.size ? `${props.radial.size},` : '';
      const position = props.radial.position ? `${props.radial.position},` : '';
      return `radial-gradient( ${position} ${props.radial.startColor}, ${
        props.radial.lastColor
      })`;
    }
    if (props.radial) return 'radial-gradient(at top right, red, green, blue)';
    return props.theme.colors.primary;
  }};
`;

const theme = {
  colors: {
    primary: 'royalblue',
    secondary: 'teal',
    text: 'black'
  },
  fontSize: {
    xl: '2.4rem',
    lg: '1.8rem',
    md: '1.3rem',
    nm: '1rem',
    sm: '0.75rem'
  }
};

const diffRadial = 'radial-gradient(red, blue)';
const objRadial = {
  startColor: 'green',
  lastColor: 'yellow'
};
const bigObjRadial = {
  shape: 'circle',
  size: 'farthest-corner',
  position: 'at bottom left',
  startColor: 'white',
  lastColor: 'black'
};

class App extends Component {
  render() {
    // console.log(diffRadial);

    return (
      <div>
        <ThemeProvider theme={theme}>
          <div>
            <RedialCard radial xl>
              stuff
            </RedialCard>

            <RedialCard xl>stuff</RedialCard>

            <RedialCard radial={diffRadial} xl>
              stuff
            </RedialCard>

            <RedialCard radial={objRadial} xl>
              stuff
            </RedialCard>

            <RedialCard radial={bigObjRadial} xl>
              stuff
            </RedialCard>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
