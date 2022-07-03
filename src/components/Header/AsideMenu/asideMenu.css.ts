import {style} from "@vanilla-extract/css";
import {cssVars} from "@styles/styles.css";

export const asideMenuWrapperStyles = style({
    zIndex: 10,
    position: 'fixed',
    left: 0, top: 0,
    height: '100%',
    width: 300,
    color: cssVars.colors.primary,
    backgroundColor: cssVars.colors.white,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '-7px 0px 15px 0px #000',
})

export const asideMenuCloseBtnStyles = style({
    display: 'flex',
    justifyContent: 'flex-end',
    cursor: "pointer",
})

export const asideMenuOverlayStyles = style({
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#0000004f'
})
