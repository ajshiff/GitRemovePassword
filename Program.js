var ps = require("./ProgramSettings.json");
var d3 = require("d3-dsv")

function ConnectToDatabase(connectionString, username, password)
{
    console.log(`Connecting to database: ${connectionString}`)
    console.log(`Username: ${username}`)
    console.log(`Password: ${password.split('').map( c => '•' ).join('')}`)
    if (username == ""  || password == "")
        throw "invalid username or password!"
    return [
        {
            city: "Las Vegas",
            season: "summer",
            weather: "hot"
        },
        {
            city: "New York",
            season: "autumn",
            weather: "windy"
        },
        {
            city: "Rexburg",
            season: "spring",
            weather: "super cold"
        },
    ]
}

function WriteOutput (outputType, data)
{
    var results = "";
    if (outputType === "csv")
        results = d3.csvFormat(data);
    else if (outputType === "json")
        results = JSON.stringify(data, null, 4)
    console.log(results);
}

var data = ConnectToDatabase(ps.DatabaseConnectionString, ps.Username, ps.Password);
WriteOutput(ps.OutputType, data);