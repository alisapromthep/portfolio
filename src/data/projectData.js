import virtualWander from '../assets/img/virtualWander.png';
import allergyTracking from '../assets/img/allergyTracking.png';
import shutterstock from '../assets/img/shutterstock.png';

export const projectData = [
    {
        "id": 1,
        "name": "Reaction",
        "img": allergyTracking,
        "description": "Allergy and food intolerance tracking web app",
        "techstack": ["react", "express", "node", "mysql","heroku","netlify" ],
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
        "img": shutterstock,
        "description": "2 Developers, 3 Ux designers, a challenge problem and 24 hours",
        "techstack": ["react", "html", "scss", "css"],
        "links": [
            {
                "name": "github",
                "url": "https://github.com/Orloaft/shutterstock-hackathon"
            },

        ]
    },
    {
        "id": 3,
        "name": "Virtual Wanderer",
        "img": virtualWander,
        "description": "2 Developer and 24hours = a full stack web application",
        "techstack": ["react", "html", "scss", "css", "node", "express"],
        "links": [
            {
                "name": "github",
                "url": "https://github.com/alisapromthep/virtual-wander"
            },

        ]
    },


];