import virtualWanderHome from '../assets/img/virtualWanderHome.png';
import allergyTrackingHome from '../assets/img/allergyTrackingHome.png';
import shutterstockHome from '../assets/img/shutterstockHome.png';
import whosthatpokemonHome from '../assets/img/whosthatpokemonHome.png';


export const projectData = [
    {
        "id": 1,
        "name": "Reaction",
        "img": allergyTrackingHome,
        "description": "Full-stack web application to help you track your allergies or food intolerance.",
        "details": "Allergy log also group each entry by food item for easy look-back and comparison, ",
        "techstack": "Javascript | React | Sass | Css | NodeJs | Express | KnexJS | MySQL ",
        "tools": "thunder client to test back-end API, host server on heroku. ",
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
        "description": "Proof of design concept, recreation of shutterstock homepage with additional feature section, and new full feature page.",
        "details": "24 hours Shutterstock x BrainStation Hackathon collaboration between 3 UX designers and 2 developers.  ",
        "techstack": "Javascript | React | Sass | Css ",
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
        "description": "24hours pair-programming: This is a full stack web application that takes you wandering through pre-picked youtube videos.",
        "techstack": "Javascript | React | Sass | Css | NodeJs | Express ",
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
        "techstack": "Javascript | Sass | Css  ",
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