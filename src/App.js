import React, { Component } from 'react';
import style, { ThemeProvider } from 'styled-components';

const gradientPaser = value => {
  if (typeof value === 'object' && value.constructor === Object) {
    const gradientType = value.type
      ? `${value.type}-gradient`
      : 'radial-gradient';
    const gradientRepeat = value.repeat
      ? `repeating-${gradientType}`
      : `${gradientType}`;
    const shape = value.shape ? `${value.shape}` : '';
    const size = value.size ? `${value.size}` : '';
    const position = value.position ? `${value.position},` : '';
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
    return props.gradient
      ? gradientPaser(props.gradient)
      : props.theme.colors.primary;
  }};
  color: ${props => props.theme.colors.text};
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
    text: 'white'
  },
  fontSize: {
    xl: '2.4rem',
    lg: '1.8rem',
    md: '1.3rem',
    nm: '1rem',
    sm: '0.75rem'
  }
};

const objGradient = {
  colors: ['red', 'green', 'yellow', 'purple', 'blue']
};

const objGradient1 = {
  colors: ['#708090', '#48D1CC', '#FF00FF']
};

const objRepeatRadial = {
  repeat: true,
  colors: ['yellow 10%', 'green 15%']
};

const smObjGradient = {
  position: 'at bottom right',
  colors: ['purple 30%', '#FFA07A 45%', '	#9400D3 20%']
};

const mObjGradient = {
  size: 'closest-corner',
  position: 'at 60% 55%',
  colors: ['#F08080', 'rgba(255,0,0,1)']
};

const lObjGradient = {
  shape: 'circle',
  position: 'at bottom left',
  colors: ['white', 'black']
};

const wontWorkGradient = {
  size: 'closest-side',
  shape: 'circle',
  position: 'at bottom left',
  colors: ['white', 'black']
};

const objLinear = {
  type: 'linear',
  colors: ['red', 'green', 'yellow', 'purple', 'blue']
};

const objLinear1 = {
  type: 'linear',
  colors: ['#708090', '#48D1CC', '#FF00FF']
};

const objRepeatLinear = {
  type: 'linear',
  repeat: true,
  colors: ['yellow 10%', 'green 15%']
};

const toRightObjLinear = {
  type: 'linear',
  position: 'to right',
  colors: ['purple 30%', '#FFA07A 45%', '	#9400D3 20%']
};

const toLeftObjLinear = {
  type: 'linear',
  position: 'to left',
  colors: ['#F08080', '#9400D3']
};

const toLeftTopObjLinear = {
  type: 'linear',
  position: 'to left top',
  colors: ['white 35%', 'black 10%']
};

const toRightBottomObjLinear = {
  type: 'linear',
  position: 'to right bottom',
  colors: ['#F4A460 35%', 'black 10%', '#663399']
};

const degreeObjLinear = {
  type: 'linear',
  position: '90deg',
  colors: ['#F4A460 35%', 'black 10%', '#663399']
};

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <GridContainer>
            <Slide xl>NO gradient</Slide>
            <Slide xl>NO gradient</Slide>

            <Slide gradient xl>
              gradient default
            </Slide>
            <Slide gradient xl>
              gradient default
            </Slide>

            <Slide gradient={objGradient} xl>
              Radial-gradient 1 objGradient
            </Slide>
            <Slide gradient={objLinear} xl>
              Linear-gradient 1 objLinear
            </Slide>

            <Slide gradient={objGradient1} xl>
              Radial-gradient 2 objGradient1
            </Slide>
            <Slide gradient={objLinear1} xl>
              Linear-gradient 2 objLinear1
            </Slide>

            <Slide gradient={objRepeatRadial} xl>
              Radial-gradient 3 objRepeatRadial
            </Slide>
            <Slide gradient={objRepeatLinear} xl>
              Linear-gradient 3 objRepeatLinear
            </Slide>

            <Slide gradient={smObjGradient} xl>
              Radial-gradient 4 smObjGradient
            </Slide>
            <Slide gradient={toRightObjLinear} xl>
              Linear-gradient 4 toRightObjLinear
            </Slide>

            <Slide gradient={mObjGradient} xl>
              Radial-gradient 5 mObjGradient
            </Slide>
            <Slide gradient={toLeftObjLinear} xl>
              Linear-gradient 5 toLeftObjLinear
            </Slide>

            <Slide gradient={lObjGradient} xl>
              Radial-gradient 6 lObjGradient
            </Slide>

            <Slide gradient={toLeftTopObjLinear} xl>
              Linear-gradient 6 toLeftTopObjLinear
            </Slide>

            <Slide gradient={toRightBottomObjLinear} xl>
              Linear-gradient 7 toRightBottomObjLinear
            </Slide>

            <Slide gradient={degreeObjLinear} xl>
              Linear-gradient 7 degreeObjLinear
            </Slide>
          </GridContainer>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
