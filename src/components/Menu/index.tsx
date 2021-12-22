import * as React from "react";
import { Text } from "alisson-application";
import { useTranslation } from "../../contexts/Localization";
import { languageList } from "../../config/languages";
import { useTheme } from "../../contexts/ThemeContext";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TranslateIcon from "@mui/icons-material/Translate";
import Switch from "@mui/material/Switch";
import { Container } from "./styles";

export default function TemporaryDrawer() {
    const [state, setState] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const { t, setLanguage } = useTranslation();
    const { currentTheme, lightTheme, darkTheme } = useTheme();
    const handleClick = () => {
        setOpen(!open);
    };

    console.log(currentTheme);

    return (
        <Container>
            <IconButton
                color="primary"
                aria-label="open drawer"
                onClick={() => setState(!state)}
                edge="start"
            >
                <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={state} onClose={() => setState(false)}>
                <Box
                    sx={{
                        width: 250,
                    }}
                    role="presentation"
                >
                    <List
                        sx={{
                            width: "100%",
                            maxWidth: 360,
                            bgcolor: "background.paper",
                        }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader
                                component="div"
                                id="nested-list-subheader"
                            >
                                <Text color="white">Nested List Items</Text>
                            </ListSubheader>
                        }
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <SendIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText>
                                <Text mr="10px" color="white">
                                    Sent mail
                                </Text>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <DraftsIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText>
                                <Text mr="10px" color="white">
                                    Drafts
                                </Text>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton onClick={handleClick}>
                            <ListItemIcon>
                                <TranslateIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText>
                                <Text color="white">{t("Mudar idioma")}</Text>
                            </ListItemText>
                            {open ? (
                                <ExpandLess color="primary" />
                            ) : (
                                <ExpandMore color="primary" />
                            )}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            {languageList.map((lang) => {
                                return (
                                    <List component="div" disablePadding>
                                        <ListItemButton
                                            sx={{ pl: 4 }}
                                            onClick={() => {
                                                setLanguage(lang);
                                            }}
                                        >
                                            <ChevronRightIcon color="primary" />
                                            <Text color="white">
                                                {lang.language}
                                            </Text>
                                        </ListItemButton>
                                    </List>
                                );
                            })}
                        </Collapse>
                    </List>
                </Box>
                <div className="theme">
                    <Text mr="10px" color="white">
                        {t(currentTheme.isDark ? "Tema escuro" : "Tema claro")}
                    </Text>
                    <Switch
                        checked={currentTheme.isDark}
                        onClick={() => {
                            currentTheme.isDark ? lightTheme() : darkTheme();
                        }}
                    />
                </div>
            </Drawer>
        </Container>
    );
}
