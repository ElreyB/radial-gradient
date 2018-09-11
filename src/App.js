import React, { Component } from 'react';
import style, { ThemeProvider } from 'styled-components';

const gradientPaser = value => {
  if (typeof value === 'object' && value.constructor === Object) {
    const gradientRepeat = value.repeat
      ? 'repeating-radial-gradient'
      : 'radial-gradient';
    const shape = value.shape ? `${value.shape}` : '';
    const size = value.size ? `${value.size}` : '';
    const position = value.position ? `at ${value.position},` : '';
    const colors = value.colors.join(',');
    const values = `${shape}${size} ${position} ${colors}`.trimStart();
    return `${gradientRepeat}(${values})`;
  }
  return 'radial-gradient(red, green, blue)';
};

const Slide = style.div`
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
    return props.radial
      ? gradientPaser(props.radial)
      : props.theme.colors.primary;
  }};
`;

const GridContainer = style.div`
  display: grid;
  grid-gap: 50px 50px;
  grid-template-columns: auto auto;
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

const objRadial = {
  colors: ['red', 'green', 'yellow', 'purple', 'blue']
};

const objRadial1 = {
  colors: ['#708090', '#48D1CC', '#FF00FF']
};

const objRepeatRadial = {
  repeat: true,
  colors: ['green', 'yellow']
};

const smObjRadial = {
  position: 'bottom right',
  colors: ['purple 30%', '#FFA07A 45%', '	#9400D3 20%']
};

const mObjRadial = {
  size: 'closest-corner',
  position: '60% 55%',
  colors: ['#F08080', 'rgba(255,0,0,1)']
};

const lObjRadial = {
  shape: 'circle',
  position: 'bottom left',
  colors: ['white', 'black']
};

const wontWork = {
  size: 'closest-side',
  shape: 'circle',
  position: 'bottom left',
  colors: ['white', 'black']
};

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <GridContainer>
            <Slide xl>NO radial-gradient</Slide>

            <Slide radial xl>
              Radial-gradient 1
            </Slide>

            <Slide radial={objRadial} xl>
              Radial-gradient 3 diffRadia
            </Slide>

            <Slide radial={objRadial1} xl>
              Radial-gradient 4 diffRadial2
            </Slide>

            <Slide radial={objRepeatRadial} xl>
              Radial-gradient 5 objRadial
            </Slide>

            <Slide radial={smObjRadial} xl>
              Radial-gradient 6 smObjRadial
            </Slide>

            <Slide radial={mObjRadial} xl>
              Radial-gradient 7 mObjRadial
            </Slide>

            <Slide radial={lObjRadial} xl>
              Radial-gradient 8 lObjRadial
            </Slide>

            <Slide radial={wontWork} xl>
              Radial-gradient 9 wontWork size or shape
            </Slide>
          </GridContainer>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
