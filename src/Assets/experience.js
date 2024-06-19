import pic1 from "../Assets/Images/freelance1.png";
import pic2 from "../Assets/Images/bestcleaning.png";
import pic3 from "../Assets/Images/ltos.png";
import pic4 from "../Assets/Images/grp.png";

const experience = [
    {
        id: 1,
        title: "Time Table",
        duration: "1 week",
        description1: "Freelance",
        description2: "Wrote 800+ lines of vanillaJS",
        description3: "Provide suggestions and advices for optimization",
        description4: "Fixed responsiveness of the time table",
        link: "https://abcereno.github.io/firstTask/",
        note: "*Limited Functionality, Backend not hosted (headless CMS)*",
        pic: pic1,
    },
    {
        id: 2,
        title: "Calculator",
        duration: "2 weeks",
        description1: "Freelance",
        description2: "Wrote 100+ lines of JQuery in wix",
        description3: "Added a webhook from stripe to record all those who paid",
        description4: "Fixed the responsiveness of the whole website",
        link: "https://www.bestcleaning.co/service-calculator",
        note: "Things might have changed (I am not the only dev who worked on this)",
        pic: pic2,
    },
    {
        id: 3,
        title: "LT Outsourcing Solutions",
        duration: "2 weeks",
        description1: "Freelance",
        description2: "coded from scratch, then reworked in ninja automations",
        description3: "Client also worked on this by trying to design it",
        description4: "Made some workflows for the automations and pipelines",
        link: "https://ltoutsourcingsolutions.com/",
        note: "There might be slight changes from time to time by the client",
        pic: pic3,
    },
    {
        id: 4,
        title: "GRP Financial Solutions",
        duration: "1 week",
        description1: "Freelance",
        description2: "coded from scratch (frontend & backend), original design",
        description3: "Headless CMS using React + Laravel",
        description4: "SEO configured for searchability in google",
        link: "https://grpfinancialsolutions.com/",
        note: "some graphics and layout are made by my wife",
        pic: pic4,
    },
]

export default experience