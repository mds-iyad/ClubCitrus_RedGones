import React from "react";
import { Card, Table, Paper, TableContainer, TableHead, TableRow, TableCell, TableBody, Box } from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";
import NavDashboard from "../NavDashboard";
import { Tooltip, IconButton, Toolbar, Badge, Avatar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Bell as BellIcon } from '../../icons/bell';
import { UserCircle as UserCircleIcon } from '../../icons/user-circle';
import { Users as UsersIcon } from '../../icons/users';
import CollapsibleTable from "./CollapsableTable";

function createData(name, calories) {
    return { name, calories};
  }
  
  const rows = [
    createData('Association 1', 'Activites'),
    createData('Association 1', 'Activites'),
    createData('Association 2', 'Activites'),
    createData('Association 3', 'Acivities'),
    createData('Association 4', 'Acivities'),
  ];



export default function Association()
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

                <Box sx={{ mt: 3 }}>
                    <Card>
                        <PerfectScrollbar>
                            {/* <TableContainer component={Paper}>
                                <Table style={{ minWidth: 400 }} aria-label="simple table">
                                    <TableHead>
                                    <TableRow xs={{FontWeight:"700"}}>
                                        <TableCell >Intitulé de l'association</TableCell>
                                        <TableCell xs={{width:300}}>Activité</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell>{row.calories}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer> */}
                            <CollapsibleTable />


                        </PerfectScrollbar>
                    </Card>
                </Box>
            </div>

        </div>
    );
}