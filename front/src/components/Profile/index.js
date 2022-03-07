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
import { Download as DownloadIcon } from '../../icons/download';
import { DataGrid } from '@mui/x-data-grid';
import ProfileContent from "./ProfileContent";



export default function Profile()
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


                <ProfileContent />
            </div>

        </div>



    );
}