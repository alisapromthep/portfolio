import virtualWanderHome from '../assets/img/virtualWanderHome.png';
import allergyTrackingHome from '../assets/img/allergyTrackingHome.png';
import shutterstockHome from '../assets/img/shutterstockHome.png';
import cssIcon from '../assets/icons/css-3.svg';
import expressIcon from '../assets/icons/express.svg';
import gitIcon from '../assets/icons/git-icon.svg';
import htmlIcon from '../assets/icons/html-5.svg';
import jsIcon from '../assets/icons/javascript.svg';
import muiIcon from '../assets/icons/material-ui.svg';
import knexIcon from '../assets/icons/knex.svg';
import mysqlIcon from '../assets/icons/mysql.svg';
import nodeIcon from '../assets/icons/nodejs-icon.svg';
import reactIcon from '../assets/icons/react.svg';
import sassIcon from '../assets/icons/sass.svg';
import herokuIcon from '../assets/icons/heroku-icon.svg';
import netlifyIcon from '../assets/icons/netlify.svg';

export const projectData = [
    {
        "id": 1,
        "name": "Reaction",
        "img": allergyTrackingHome,
        "description": "Full-stack tracking web application for allergies and food intolerance.",
        "techstack": [reactIcon, expressIcon, nodeIcon, knexIcon, mysqlIcon, herokuIcon, netlifyIcon ],
        "links": [
            {
                "name": "visit site",
                "url": "https://track-reaction.netlify.com"
            },
            {
                "name": "github front-end",
                "url": "https://github.com/alisapromthep/alisa-promthep-reaction-client"
            },
            {
                "name": "github back-end",
                "url": "https://github.com/alisapromthep/alisa-promthep-reaction-server"
            }
        ],
        "casestudy": {
            "authentication & authorization": "JWT, building a back-end database to store user information",

        }
    },
    {
        "id": 2,
        "name": "Shutterstock",
        "img": shutterstockHome,
        "description": "2 Developers, 3 Ux designers, a challenge problem and 24 hours",
        "techstack": [htmlIcon, cssIcon, sassIcon, reactIcon],
        "links": [
            {
                "name":"DEMO",
                "url": "https://shutterstock-bstn-hackathon.netlify.app/"
            },
            {
                "name": "github",
                "url": "https://github.com/Orloaft/shutterstock-hackathon"
            },

        ]
    },
    {
        "id": 3,
        "name": "Virtual Wanderer",
        "img": virtualWanderHome,
        "description": "2 Developer, 24hours: A full stack web application that allows you to virtually travel around in different city",
        "techstack": [htmlIcon, cssIcon, sassIcon, reactIcon, nodeIcon, expressIcon],
        "links": [
            {
                "name": "github",
                "url": "https://github.com/alisapromthep/virtual-wander"
            },

        ]
    },


];