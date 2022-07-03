import {style} from "@vanilla-extract/css";
import {cssVars} from "@styles/styles.css";

export const headerStyles = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginBottom: 15,
    backgroundColor: cssVars.colors.brand,
    boxShadow: '0px 3px 0px 0px #246a43',
    color: cssVars.colors.white,
})

export const headerMenuStyles = style({
    display: "flex",
    alignItems: "center",
})

export const headerMenuItemStyles = style({
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    selectors: {
        [`${headerMenuStyles} &:not(:last-child)`]: {
            marginRight: 20,
        }
    }
})


export const headerAsideIcon = style({
    cursor: 'pointer',
})
