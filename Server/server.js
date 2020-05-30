var http = require('http');
var url = require('url');


var profileList = [{
        name: 'SRISHTI',
        branch: 'CS',
        college: 'SIRT'
    }, {
        name: 'RAHUL',
        branch: 'CE',
        college: 'NRI'
    }, {
        name: 'NOUREEN',
        branch: 'ex',
        college: 'ORIENTAL'
    },
    {
        name: 'ROOPAL',
        branch: 'CS',
        college: 'SIRT'
    }, {
        name: 'NAVEEN',
        branch: 'ME',
        college: 'LNCT'
    }, {
        name: 'GAURAV',
        branch: 'IT',
        college: 'SIRTE'
    }, {
        name: 'RUCHIKA',
        branch: 'EC',
        college: 'SIRTS'
    }
];

var server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        res.writeHead(404);
    }

    var queryString = url.parse(req.url, true).query;
    var nameFilter = queryString.q;
    console.log(nameFilter);
    var branchFilter = queryString.q;
    var collegeFilter = queryString.q;

    var responseArray = [];

    for (var i = 0; i < profileList.length; i++) {
        var student = profileList[i];
        if (student.name.toLowerCase() === nameFilter || student.branch.toLowerCase() === branchFilter || student.college.toLowerCase() === collegeFilter) {
            responseArray.push(student);
            console.log(responseArray);
        }
    }
    console.log("hey");

    var len = responseArray.length;
    console.log(len);


    if (len > 0) {
        console.log("responseaee");
        var responseString = JSON.stringify(responseArray);
        res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
        res.write(responseString);
    } else {
        console.log("list");
        var responseString = JSON.stringify(profileList);
        res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
        res.write(responseString);
    }

    res.end();
});

server.listen(8080);