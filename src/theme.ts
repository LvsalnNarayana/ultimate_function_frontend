import type { PaletteMode, ThemeOptions } from "@mui/material"

interface AppTheme {
    mode?: PaletteMode
}

export const generateThemeOptions = (appTheme: AppTheme): ThemeOptions => {
    const mode: PaletteMode = appTheme.mode || "light"
    const primaryColor = "#e0e0e0"
    const secondaryColor = "#0288d1"

    const themeOptions: ThemeOptions = {
        palette: {
            mode,
            primary: {
                main: primaryColor,
            },
            secondary: {
                main: secondaryColor,
            },
        },
        typography: {
            fontFamily: ["Montserrat"],
            // fontFamily: ["open sans"],
            overflow: "hidden",
            body1: {
                fontWeight: 500,
                noWrap: true,
                textOverflow: "ellipsis",
            },
            body2: {
                fontWeight: 500,
                noWrap: true,
                textOverflow: "ellipsis",
            },
        },

        components: {
            MuiTypography: {
                styleOverrides: {
                    root: {
                        overflow: "hidden",
                    },
                },
            },
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        scrollbarColor: "#dadada",
                        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                            backgroundColor: "#dadada",
                            width: "6px",
                        },
                        "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                            borderRadius: 8,
                            backgroundColor: "#A7A7A7",
                            border: "3px solid #A7A7A7",
                        },
                        "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
                        {
                            backgroundColor: "#A7A7A7",
                        },
                        "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
                        {
                            backgroundColor: "#A7A7A7",
                        },
                        "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
                        {
                            backgroundColor: "#A7A7A7",
                        },
                        "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                            backgroundColor: "#dadada",
                        },
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontFamily: "Montserrat, sans-serif", // Apply Montserrat to all buttons
                        fontWeight: "500",
                        textTransform: "capitalize",
                        // color: "#FFFFFF", // Make text color white
                        letterSpacing: 0.2,
                        fontSize: "16px",
                        "&:hover :not.MuiButton-outlined": {
                            backgroundColor: "#026ba3", // A darker shade of the secondary color for hover state
                        },
                    },
                },
                defaultProps: {
                    disableElevation: true,
                    disableRipple: true,
                    size:"small",
                    color: "secondary", // Set all buttons to use the secondary palette
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        color: secondaryColor,
                        "&:hover": {
                            backgroundColor: "#f6f5f4",
                        },
                    },
                },
            },
            MuiListItemButton: {
                styleOverrides: {
                    root: {
                        "&.Mui-selected": {
                            backgroundColor: "#e1e1e1",
                        },
                    },
                },
            },
        },
    }

    return themeOptions
}
