import React from "react";
import { NavLink } from "react-router-dom";
import { Aside, NavDashItem } from "./NavDashboard.css";
import logo from '../../assets/pastel.png';
import styled from "styled-components";
import Box from '@mui/material/Box';
import Divider  from "@mui/material/Divider";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LogoutIcon from '@mui/icons-material/Logout';
import BallotIcon from '@mui/icons-material/Ballot';
import BadgeIcon from '@mui/icons-material/Badge';

function NavDashboard() {
    
    const Divider1 = styled.hr`
        border-bottom-width: thin;
        border-color: #2D3748;
        margin-top: 24px;
        margin-bottom: 24px;
    `;
    return (
        <div>
            <Aside>
                <div style={{height:"100vh"}}>
                    <div>
                        <NavLink to='/'>
                            <img src={logo} height='88px' width='230px' />
                        </NavLink>
                    </div>
                    <Divider1 />

                    <Box>
                        <List style={{display:"flex", flexDirection:"column", alignItems:"flex-start"}} component="nav" aria-label="SideBar Dashboard">

                            <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon style={{color:"white"}} />
                            </ListItemIcon>
                            <NavLink to ="/dashboard">
                                <ListItemText style={{color:"white"}} primary="Dashboard" />
                            </NavLink>
                            </ListItemButton>

                            <ListItemButton>
                            <ListItemIcon>
                                <MedicalServicesIcon style={{color:"white"}} />
                            </ListItemIcon>
                            <NavLink to ="/Patients">
                                <ListItemText style={{color:"white"}} primary="Patients" />
                            </NavLink>
                            </ListItemButton>

                            <ListItemButton>
                            <ListItemIcon>
                                <BadgeIcon style={{color:"white"}} />
                            </ListItemIcon>
                            <NavLink to ="/Employe">
                                <ListItemText style={{color:"white"}} primary="Employés" />
                            </NavLink>
                            </ListItemButton>

                            <ListItemButton>
                            <ListItemIcon>
                                <BallotIcon style={{color:"white"}} />
                            </ListItemIcon>
                            <NavLink to ="/association">
                                <ListItemText style={{color:"white"}} primary="Association" />
                            </NavLink>
                            </ListItemButton>

                            <ListItemButton>
                            <ListItemIcon>
                                <LogoutIcon style={{color:"white"}} />
                            </ListItemIcon>
                            <NavLink to ="/">
                                <ListItemText style={{color:"white"}} primary="Logout" />
                            </NavLink>
                            </ListItemButton>

                        </List>

                    </Box>
                </div>
            </Aside>

            
        </div>
    );
}

export default NavDashboard;