
var commands;

// This list is in alphabetical order by commandName
function loadCommands()
{
    commands = [];
    commands.push({ commandName: "clear", method: "POST", path: "/session/SESSION_ID/element/ELEMENT_ID/clear", requestBody: "" });
    commands.push({ commandName: "click", method: "POST", path: "/session/SESSION_ID/element/ELEMENT_ID/click", requestBody: "{\"id\":\"ELEMENT_ID\"}" });
    commands.push({ commandName: "executeScript", method: "POST", path: "/session/SESSION_ID/execute", requestBody: "{\"script\": \"return arguments[0].second;\",\"args\": [{\"first\":\"1st\", \"second\":\"2nd\", \"third\":\"3rd\"}]}" });
    commands.push({ commandName: "findElement", method: "POST", path: "/session/SESSION_ID/element", requestBody: "{\"locator\": \"id\",\"value\": \"clickAnchorElement\"}" });
    commands.push({ commandName: "getCapabilities", method: "GET", path: "/session/SESSION_ID", requestBody: "" });
    commands.push({ commandName: "getCssValue", method: "GET", path: "/session/SESSION_ID/element/ELEMENT_ID/css/:propertyName", requestBody: "" });
    commands.push({ commandName: "getCurrentUrl", method: "GET", path: "/session/SESSION_ID/url", requestBody: "" });
    commands.push({ commandName: "getElementAttribute", method: "GET", path: "/session/SESSION_ID/element/ELEMENT_ID/attribute/:name", requestBody: "" });
    commands.push({ commandName: "getElementTagName", method: "GET", path: "/session/SESSION_ID/element/ELEMENT_ID/name", requestBody: "" });
    commands.push({ commandName: "getElementText", method: "GET", path: "/session/SESSION_ID/element/ELEMENT_ID/text", requestBody: "" });
    commands.push({ commandName: "getTitle", method: "GET", path: "/session/SESSION_ID/title", requestBody: "" });
    commands.push({ commandName: "isDisplayed", method: "GET", path: "/session/SESSION_ID/element/ELEMENT_ID/displayed", requestBody: "" });
    commands.push({ commandName: "isEnabled", method: "GET", path: "/session/SESSION_ID/element/ELEMENT_ID/enabled", requestBody: "" });
    commands.push({ commandName: "isSelected", method: "GET", path: "/session/SESSION_ID/element/ELEMENT_ID/selected", requestBody: "" });
    commands.push({ commandName: "newSession", method: "POST", path: "/session", requestBody: "{\"desiredCapabilities\":{ \"browserName\":\"<browserName>\", \"browserVersion\":\"<browserVersion>\", \"platformName\":\"Windows NT\", \"platformVersion\":\"10\"},\"requiredCapabilities\":{}}" });
    commands.push({ commandName: "quit", method: "DELETE", path: "/session/SESSION_ID", requestBody: "" });
    commands.push({ commandName: "screenshot", method: "GET", path: "/session/SESSION_ID/screenshot", requestBody: "" });
    commands.push({ commandName: "sessions", method: "GET", path: "/sessions", requestBody: "" });
    commands.push({ commandName: "status", method: "GET", path: "/status", requestBody: "" });
    commands.push({ commandName: "url", method: "POST", path: "/session/SESSION_ID/url", requestBody: "{\"url\":\"http://bing.com\"}" });
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
