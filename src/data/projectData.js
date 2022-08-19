import virtualWanderHome from '../assets/img/virtualWanderHome.png';
import allergyTrackingHome from '../assets/img/allergyTrackingHome.png';
import shutterstockHome from '../assets/img/shutterstockHome.png';
import whosthatpokemonHome from '../assets/img/whosthatpokemonHome.png';
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
import { Javascript } from '@mui/icons-material';

export const projectData = [
    {
        "id": 1,
        "name": "Reaction",
        "img": allergyTrackingHome,
        "description": "Full-stack web application to help people track their allergies or food tolerance.",
        "techstack": [jsIcon, reactIcon, expressIcon, nodeIcon, knexIcon, mysqlIcon, herokuIcon, netlifyIcon ],
        "links": [
            {
                "name": "visit site",
                "url": "https://track-reaction.netlify.com"
            },
            {
                "name": "Front-end",
                "url": "https://github.com/alisapromthep/alisa-promthep-reaction-client"
            },
            {
                "name": "Back-end",
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
        "description": "A collaboration between 2 Developers, 3 UX designers and 24 hours.",
        "techstack": [htmlIcon, cssIcon, jsIcon, reactIcon],
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
        "description": "24hours pair-programming hackathon created a full stack web application that takes you on a walk or bike through youtube videos pre-picked for you.",
        "techstack": [ reactIcon, nodeIcon, expressIcon],
        "links": [
            {
                "name": "VISIT SITE",
                "url": "https://virtual-wanderer.netlify.app"
            },
            {
                "name": "github",
                "url": "https://github.com/alisapromthep/virtual-wander"
            },

        ]
    },
    {
        "id": 4,
        "name": "Who's that Pokemon",
        "img": whosthatpokemonHome,
        "description": "24 hours hackathon using Pokemon API and vanila javascript to create whos that pokemon game.",
        "techstack": [htmlIcon, cssIcon, jsIcon],
        "links": [
            {
                "name": "VISIT SITE",
                "url": "https://virtual-wanderer.netlify.app"
            },
            {
                "name": "github",
                "url": "https://github.com/alisapromthep/virtual-wander"
            },

        ]
    },


];