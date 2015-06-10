
var commands;

// This list is in alphabetical order by commandName
function loadCommands()
{
    commands = [];
    commands.push({ commandName: "click", method: "POST", path: "/session/SESSION_ID/element/ELEMENT_ID/click", requestBody: "{\"id\":\"ELEMENT_ID\"}" });
    commands.push({ commandName: "executeScript", method: "POST", path: "/session/SESSION_ID/execute", requestBody: "{\"script\": \"return arguments[0].second;\",\"args\": [{\"first\":\"1st\", \"second\":\"2nd\", \"third\":\"3rd\"}]}" });
    commands.push({ commandName: "findElement", method: "POST", path: "/session/SESSION_ID/element", requestBody: "{\"locator\": \"id\",\"value\": \"clickAnchorElement\"}" });
    commands.push({ commandName: "getCapabilities", method: "GET", path: "/session/SESSION_ID", requestBody: "" });
    commands.push({ commandName: "getCurrentUrl", method: "GET", path: "/session/SESSION_ID/url", requestBody: "" });
    commands.push({ commandName: "getTitle", method: "GET", path: "/session/SESSION_ID/title", requestBody: "" });
    commands.push({ commandName: "newSession", method: "POST", path: "/session", requestBody: "{\"name\":\"newSession\",\"sessionId\":\"\",\"parameters\":{\"desiredCapabilities\":{ \"browserName\":\"<browserName>\", \"browserVersion\":\"<browserVersion>\", \"platformName\":\"Windows NT\", \"platformVersion\":\"10\"},\"requiredCapabilities\":{ }}}" });
    commands.push({ commandName: "sessions", method: "GET", path: "/sessions", requestBody: "" });
    commands.push({ commandName: "status", method: "GET", path: "/status", requestBody: "" });
    commands.push({ commandName: "quit", method: "DELETE", path: "/session/SESSION_ID", requestBody: "" });
}

function getTimeString() {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth() + 1) + "/"
                + currentdate.getFullYear() + " "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();

    return datetime;
}
