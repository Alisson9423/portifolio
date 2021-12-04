import * as React from "react";
import { Text } from "alisson-application";
import { useTranslation } from "../../contexts/Localization";
import { languageList } from "../../config/languages";
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
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Container className="asdasd">
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
                                Nested List Items
                            </ListSubheader>
                        }
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sent mail" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItemButton>
                        <ListItemButton onClick={handleClick}>
                            <ListItemIcon>
                                <TranslateIcon />
                            </ListItemIcon>
                            <ListItemText primary={t("Mudar idioma")} />
                            {open ? <ExpandLess /> : <ExpandMore />}
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
                                            <ChevronRightIcon />
                                            {lang.language}
                                        </ListItemButton>
                                    </List>
                                );
                            })}
                        </Collapse>
                    </List>
                </Box>
                <div className="theme">
                    <Text>Tema</Text>
                    <Switch />
                </div>
            </Drawer>
        </Container>
    );
}
