import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import NavDashboard from "../NavDashboard";
import { IconButton } from "@mui/material";
import { Card } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Tooltip } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Avatar, Toolbar, CardContent, TextField, InputAdornment, SvgIcon } from "@mui/material";
import { Bell as BellIcon } from '../../icons/bell';
import { UserCircle as UserCircleIcon } from '../../icons/user-circle';
import { Users as UsersIcon } from '../../icons/users';
import EmployeCRUD from "./EmployeCRUD";



export default function Employe()
{
    return(

        <div style={{display:"flex"}}>
         <NavDashboard />

            <div style={{width:"100%"}}>
                <Card  elevation={3}>
                <Toolbar
                disableGutters
                sx={{
                    minHeight: 64,
                    left: 0,
                    px: 2
                }}
                >
                <IconButton
                    sx={{
                    display: {
                        xs: 'inline-flex',
                        lg: 'none'
                    }
                    }}
                >
                    <MenuIcon fontSize="small" />
                </IconButton>
                {/* <Tooltip title="Search">
                    <IconButton sx={{ ml: 1 }}>
                    <SearchIcon fontSize="small" />
                    </IconButton>
                </Tooltip> */}
                <Box sx={{ flexGrow: 1 }} />
                <Tooltip title="Contacts">
                    <IconButton sx={{ ml: 1 }}>
                    <UsersIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Notifications">
                    <IconButton sx={{ ml: 1 }}>
                    <Badge
                        badgeContent={4}
                        color="primary"
                        variant="dot"
                    >
                        <BellIcon fontSize="small" />
                    </Badge>
                    </IconButton>
                </Tooltip>
                <Avatar
                    sx={{
                    height: 40,
                    width: 40,
                    ml: 1
                    }}
                    src="/static/images/avatars/avatar_1.png"
                >
                    <UserCircleIcon fontSize="small" />
                </Avatar>
                </Toolbar>
                </Card>


                {/* <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8,
                    display: "-webkit-box", paddingTop: "64px", paddingBottom: "64px"
                }}
                >
                    <Container style={{ maxWidth:"none", paddingRight: "24px", paddingBottom: "24px", width: "100%",
                    marginLeft: "auto", boxSizing: "border-box", marginLeft: "0px", marginRight: "0px", display: "block" }}>
                        <Box>
                            <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                m: -1
                            }}
                            >
                                <Typography
                                    sx={{ m: 1, fontWeight: "700" }}
                                    variant="h4"
                                >
                                    Patients
                                </Typography>
                                <Box sx={{ m: 1}}>
                                    <Button
                                    startIcon={(<UploadIcon fontSize="small" />)}
                                    sx={{ mr: 1 }}
                                    >
                                    Import
                                    </Button>
                                    <Button
                                    startIcon={(<DownloadIcon fontSize="small" />)}
                                    sx={{ mr: 1 }}
                                    >
                                    Export
                                    </Button>
                                    <Button
                                    color="primary"
                                    variant="contained"
                                    >
                                    Ajouter des patients
                                    </Button>
                                </Box>
                            </Box>
                            <Box sx={{ mt: 3 }}>
                                <Card>
                                    <CardContent>
                                    <Box style={{ maxWidth: 500 }}>
                                        <TextField
                                                label="Recherche"
                                                id="outlined-start-adornment"
                                                sx={{ m: 1, width: '100%' }}
                                                InputProps={{
                                                    startAdornment: <InputAdornment xs={{width:"500px"}} position="start">
                                                        <SearchIcon />
                                                    </InputAdornment>,
                                                }}
                                        />
                                    </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Box>
                    

                        <PatientCRUD2 />
                    </Container>
                </Box> */}
                <EmployeCRUD />
            </div>

        </div>



    );
}