import React from "react";
import { Drawer, Box, Divider, Typography, ListItem, Button, List } from "@material-ui/core";
import { NavLink, useLocation, matchPath } from "react-router-dom";
import { Users as UsersIcon, Calendar as CalendarIcon } from "react-feather";
import { makeStyles } from "@material-ui/core/styles";

// remember to cleanup

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        flex: "1 1 auto",
        overflow: "hidden",
        paddingLeft: 256,
    },
    container: { display: "flex", flex: "1 1 auto", overflow: "hidden" },
    content: { flex: "1 1 auto", height: "100vh", overflow: "auto" },
}));

const NavItem = (props) => {
    const { href, icon: Icon, title, ...rest } = props;
    const location = useLocation();
    // prettier-ignore
    const active = href? 
        !!matchPath(
            { path: href,end: false,},
            location.pathname
        )
        : false;

    // active change color not working

    return (
        <ListItem
            disableGutters
            style={{
                display: "flex",
                py: 0,
            }}
            {...rest}
        >
            <Button
                component={NavLink}
                style={{
                    color: "text.secondary", // set global font color
                    fontWeight: "medium",
                    justifyContent: "flex-start",
                    letterSpacing: 0,
                    py: 1.25,
                    textTransform: "none",
                    width: "100%",
                    ...(active && {
                        color: "#895714",
                    }),
                    "& svg": {
                        mr: 1,
                    },
                }}
                to={href}
            >
                {Icon && <Icon size="20" />} {title}
            </Button>
        </ListItem>
    );
};

// side bar nav
const NavSidebar = () => {
    const items = [
        {
            href: "/admin",
            icon: UsersIcon,
            title: "Manage Users",
        },
        {
            href: "/admin/events/",
            icon: CalendarIcon,
            title: "Manage Events",
        },
    ];
    const navContent = (
        <Box style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <Box style={{ alignItems: "center", display: "flex", flexDirection: "column", p: 2 }}>
                <Typography variant="body">UserAvatar</Typography>
                <Typography variant="h5">UserName</Typography>
            </Box>
            <Divider />

            {/* listing link buttons */}
            {/* need to put into list to do active */}
            <Box style={{ p: 2 }}>
                <List>
                    {items.map((e) => (
                        <NavItem href={e.href} key={e.title} title={e.title} icon={e.icon} />
                    ))}
                </List>
            </Box>
        </Box>
    );
    return (
        <Drawer
            anchor="left"
            open
            variant="persistent"
            PaperProps={{
                style: {
                    width: 256,
                    top: 64,
                    height: "calc(100% - 64px)",
                },
            }}
        >
            {navContent}
        </Drawer>
    );
};

// layout stuff to match nav
const AdminLayoutWrapper = ({ children }) => {
    const classes = useStyles();
    return <Box className={classes.wrapper}>{children}</Box>;
};

const AdminLayoutContainer = ({ children }) => {
    const classes = useStyles();
    return <Box className={classes.container}>{children}</Box>;
};

const AdminLayoutContent = ({ children }) => {
    const classes = useStyles();
    return <Box className={classes.content}>{children}</Box>;
};

// admin layout
const AdminLayout = ({ children }) => {
    return (
        <>
            <NavSidebar />
            <AdminLayoutWrapper>
                <AdminLayoutContainer>
                    <AdminLayoutContent>{children}</AdminLayoutContent>
                </AdminLayoutContainer>
            </AdminLayoutWrapper>
        </>
    );
};

export default AdminLayout;
