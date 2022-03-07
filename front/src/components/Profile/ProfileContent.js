
import React from 'react';
import { Upload as UploadIcon } from '../../icons/upload';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PermIdentity from '@mui/icons-material/PermIdentity';
import MailOutline from '@mui/icons-material/MailOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AddIcon from '@mui/icons-material/Add';
import Publish from '@mui/icons-material/Publish';
import { TextField, TextareaAutosize, Typography, Fab } from '@mui/material';

import { UserContainer, UserShow, UserShowTop, UserShowTopTitle, UserShowBottom, UserShowInfo } from "./Profile.CSS"
import { UserUpdate, UserUpdateTitle, User, UserTitle, UserTitleContainer, UserShowUsername, UserShowUserTitle, UserShowTitle, UserShowInfoTitle } from "./Profile.CSS"

export default function ProfileContent()
{
    return(
        <User>
            <UserTitleContainer>
                <UserTitle>Edit User</UserTitle>
            </UserTitleContainer>

            <UserContainer>
                <UserShow>
                    <UserShowTop>
                        <AccountCircleIcon fontSize='large' />
                        <UserShowTopTitle>
                            <UserShowUsername>Anna Becker</UserShowUsername>
                            <UserShowUserTitle>Software Engineer</UserShowUserTitle>
                        </UserShowTopTitle>
                    </UserShowTop>
                    <UserShowBottom>
                        <UserShowTitle>Information du patient</UserShowTitle>
                        <UserShowInfo>
                            <PermIdentity />
                            <UserShowInfoTitle>Anna Becker</UserShowInfoTitle>
                        </UserShowInfo>

                        <UserShowInfo>
                            <CreditCardIcon />
                            <UserShowInfoTitle>2 94 03 75 120 005 22</UserShowInfoTitle>
                        </UserShowInfo>
                        
                        <UserShowTitle>Information de contact</UserShowTitle>

                        <UserShowInfo>
                            <MailOutline />
                            <UserShowInfoTitle>annabecker@gmail.com</UserShowInfoTitle>
                        </UserShowInfo>

                        <UserShowInfo>
                            <PhoneIphoneIcon />
                            <UserShowInfoTitle>06 44 64 90 21</UserShowInfoTitle>
                        </UserShowInfo>

                        <UserShowTitle>Status</UserShowTitle>

                        <UserShowInfo>
                            <InfoIcon />
                            <UserShowInfoTitle>En cours de traitement</UserShowInfoTitle>
                        </UserShowInfo>


                    </UserShowBottom>
                </UserShow>

                <UserUpdate>
                    <UserUpdateTitle>Commentaire</UserUpdateTitle>

                    <TextareaAutosize
                    aria-label="minimum height"
                    minRows={10}
                    style={{ width: 750 }}
                    />

                    <label htmlFor="upload-photo">
                    <input
                        style={{ display: 'none' }}
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                    />

                    <Fab
                        color="secondary"
                        size="small"
                        component="span"
                        aria-label="add"
                        variant="extended"
                    >
                        <AddIcon /> Import
                    </Fab>
                    <br />
                    <br />

                    </label>

                    
                </UserUpdate>
                
                

            </UserContainer>
        </User>
    );

} 