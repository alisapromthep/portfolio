import virtualWanderHome from '../assets/img/virtualWanderHome.png';
import allergyTrackingHome from '../assets/img/allergyTrackingHome.png';
import shutterstockHome from '../assets/img/shutterstockHome.png';
import whosthatpokemonHome from '../assets/img/whosthatpokemonHome.png';


export const projectData = [
    {
        "id": 1,
        "name": "Reaction",
        "img": allergyTrackingHome,
        "description": "Full-stack web application to help you track your allergies or food intolerance, with logs organized by type of food for easy comparison. ",
        "techstack": "Javascript | React | SASS | CSS | NodeJs | Express | KnexJS | MySQL ",
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
        "description": "A recreation of shutterstock homepage with additional feature section, and new full feature page, as proof of design concept for a 24 hours cross-collaboration hackathon with UX Designers ",
        "techstack": "Javascript | React | SASS | CSS  ",
        "tools": "used git for working simultaneously, figma to guide design",
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
        "description": "24hours pair-programming: A full stack web application that takes you on a walk or a bike ride through pre-picked youtube videos.",
        "techstack": "Javascript | React | SASS | CSS | NodeJs | Express ",
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
        "techstack": "Javascript | SASS | CSS  ",
        "links": [
            {
                "name": "VISIT SITE",
                "url": "https://whosthatpokemon-hackathon.netlify.app/"
            },
            {
                "name": "github",
                "url": "https://github.com/menu89/whos-that-pokmon"
            },

        ]
    },


];