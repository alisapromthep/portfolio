import React from 'react';
import { Link, List, ListItem } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import {LinkItem} from './MyLinksStyle';

const MyLinks = () => {
    return (
        <List
        sx={{
            display: "flex",
            justifyContent: "end",
        }}>
            <LinkItem>
                <Link
                href="https://www.linkedin.com/in/alisa-promthep/"
                target="_blank"
                rel="noopener"
                color="inherit"
                >
                    <LinkedInIcon color='primary'/>
                </Link>
            </LinkItem>
            <LinkItem>
                <Link
                href="https://github.com/alisapromthep"
                target="_blank"
                rel="noopener"
                color="inherit"
                >
                    <GitHubIcon color='primary'/>
                </Link>
            </LinkItem>
            <LinkItem>
                <Link
                href="https://instagram.com/chemists_freetime"
                target="_blank"
                rel="noopener"
                color="inherit"
                >
                    <InstagramIcon color='primary'/>
                </Link>
            </LinkItem>
        </List>
    )
}

export default MyLinks