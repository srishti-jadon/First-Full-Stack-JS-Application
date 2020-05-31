var http = require('http');
var url = require('url');


var profileList = [{
        email: 'srishti@gmail.com',
        password: '12345678',
        photo: 'Assets/WhatsApp Image 2020-05-28 at 12.12.15.jpeg',
        name: 'Srishti Singh Jadon',
        college: 'SIRT',
        designation: "FULLSTACK MERN DEVELOPER",
        description: "My name is Srishti Singh Jadon and I'm a full stact MERN developer.I'm looking forward to continuously enhance my knowledge,skills and experience by getting involved in various projects.",
        video: "Assets/Screenrecorder-2020-05-26-20-35-32-984.mp4",
        project_description: "The todo list application in which a user can create alist of tasks, add a task, mark a task as completed and delete an already added task."
    },
    {
        email: 'devansh@gmail.com',
        password: '12345678',
        photo: 'Assets/WhatsApp Image 2020-05-28 at 12.12.15.jpeg',
        name: 'Devansh Shrivastava',
        college: 'MIT',
        designation: "FULLSTACK MERN DEVELOPER",
        description: "Available for tech jobs on - Java, Blockchain, Nodejs, AWS, Angular. Also does Remote training session, virtual instructor led training.I do create effective product development strategies and work with developers and testers to meet the requirements. Over 4 years of experience in product development, system design and strategy.Along with technical part, I am good at strategizing and experimenting growth hacking for the constant evolution of any solution.",
        video: "Assets/Screenrecorder-2020-05-26-20-35-32-984.mp4",
        project_description: "Have done projects in -Spring Boot and related frameworks.MEAN Stack.AWS web aation.POCs on R3 corda and Hyperledger fabric.Optimized Relational DB design.GDPR Implementation."

    }, {
        email: 'gaurav@gmail.com',
        password: '12345678',
        photo: 'Assets/WhatsApp Image 2020-05-28 at 12.12.15.jpeg',
        name: 'Gaurav Chauhan',
        college: 'MEDICAPS',
        designation: "FULLSTACK MERN DEVELOPER",
        description: "Available for tech jobs on - Java, Blockchain, Nodejs, AWS, Angular. Also does Remote training session, virtual instructor led training.I do create effective product development strategies and work with developers and testers to meet the requirements. Over 4 years of experience in product development, system design and strategy.Along with technical part, I am good at strategizing and experimenting growth hacking for the constant evolution of any solution.",
        video: "Assets/Screenrecorder-2020-05-26-20-35-32-984.mp4",
        project_description: "Have done projects in -Spring Boot and related frameworks.MEAN Stack.AWS web aation.POCs on R3 corda and Hyperledger fabric.Optimized Relational DB design.GDPR Implementation."

    },
    {
        email: 'rushika@gmail.com',
        password: '12345678',
        photo: 'Assets/WhatsApp Image 2020-05-28 at 12.12.15.jpeg',
        name: 'Rushika Nalamwar',
        college: 'GHRCE',
        designation: "FULLSTACK MERN DEVELOPER",
        description: "Available for tech jobs on - Java, Blockchain, Nodejs, AWS, Angular. Also does Remote training session, virtual instructor led training.I do create effective product development strategies and work with developers and testers to meet the requirements. Over 4 years of experience in product development, system design and strategy.Along with technical part, I am good at strategizing and experimenting growth hacking for the constant evolution of any solution.",
        video: "Assets/Screenrecorder-2020-05-26-20-35-32-984.mp4",
        project_description: "Have done projects in -Spring Boot and related frameworks.MEAN Stack.AWS web aation.POCs on R3 corda and Hyperledger fabric.Optimized Relational DB design.GDPR Implementation."

    }, {
        email: 'rohit@gmail.com',
        password: '12345678',
        photo: 'Assets/WhatsApp Image 2020-05-28 at 12.12.15.jpeg',
        name: 'Rohit Sahu',
        college: 'SIRT',
        designation: "FULLSTACK MERN DEVELOPER",
        description: "Available for tech jobs on - Java, Blockchain, Nodejs, AWS, Angular. Also does Remote training session, virtual instructor led training.I do create effective product development strategies and work with developers and testers to meet the requirements. Over 4 years of experience in product development, system design and strategy.Along with technical part, I am good at strategizing and experimenting growth hacking for the constant evolution of any solution.",
        video: "Assets/Screenrecorder-2020-05-26-20-35-32-984.mp4",
        project_description: "Have done projects in -Spring Boot and related frameworks.MEAN Stack.AWS web aation.POCs on R3 corda and Hyperledger fabric.Optimized Relational DB design.GDPR Implementation."

    }, {
        email: 'tanya@gmail.com',
        password: '12345678',
        photo: 'Assets/WhatsApp Image 2020-05-28 at 12.12.15.jpeg',
        name: 'Tanya Bose',
        college: 'VIT',
        designation: "FULLSTACK MERN DEVELOPER",
        description: "Available for tech jobs on - Java, Blockchain, Nodejs, AWS, Angular. Also does Remote training session, virtual instructor led training.I do create effective product development strategies and work with developers and testers to meet the requirements. Over 4 years of experience in product development, system design and strategy.Along with technical part, I am good at strategizing and experimenting growth hacking for the constant evolution of any solution.",
        video: "Assets/Screenrecorder-2020-05-26-20-35-32-984.mp4",
        project_description: "Have done projects in -Spring Boot and related frameworks.MEAN Stack.AWS web aation.POCs on R3 corda and Hyperledger fabric.Optimized Relational DB design.GDPR Implementation."

    }
];

var server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        res.writeHead(404);
    }

    var queryString = url.parse(req.url, true).query;
    var Filter = queryString.q;

    var responseArray = [];

    for (var i = 0; i < profileList.length; i++) {
        var student = profileList[i];
        var student_name_arr = student.name.split(" ");
        student_name_arr = student_name_arr.map(function(x) { return x.toLowerCase() });

        if (student_name_arr.includes(Filter) == true || student.college.toLowerCase() === Filter) {
            responseArray.push(student);
        }
    }


    var len = responseArray.length;


    if (len > 0) {

        var responseString = JSON.stringify(responseArray);
        res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
        res.write(responseString);
    } else {

        var responseString = JSON.stringify(profileList);
        res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
        res.write(responseString);
    }

    res.end();
});

server.listen(8080);