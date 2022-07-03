import {createGlobalTheme, createTheme, style} from '@vanilla-extract/css';

export const cssVars = createGlobalTheme(':root',{
    colors: {
        primary: '#17223b',
        secondary: '#B1938B',
        white: '#FFF',
        brand: '#43c47c'
    },
    font: {
        body: 'arial'
    }
});

export const exampleStyle = style({
    backgroundColor: cssVars.colors.brand,
    fontFamily: cssVars.font.body,
    color: 'white',
    padding: 10
});

console.log(exampleStyle)
