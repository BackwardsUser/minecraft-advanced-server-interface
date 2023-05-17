const ServersDir = join(__dirname, "..", "..", "..", "Servers");

if (!readdirSync(join(__dirname, "..", "..", "..")).includes("Servers")) {
    mkdirSync(ServersDir);
};

const nav_ul = document.getElementById("nav-ul");
const files = readdirSync(ServersDir);

function createNavItem(serverName, nav) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    li.appendChild(a);
    a.text = serverName;
    li.classList.add("nav-item", "server")
    nav.appendChild(li);
}

// a = [
//     "ServerName",
//     "ServerName",
//     "ServerName",
//     "ServerName",
//     "ServerName",
//     "ServerName",
//     "ServerName",
//     "ServerName",
//     "ServerName",
//     "ServerName",
//     "ServerName"
// ]

// a.forEach(b => {
//     createNavItem(b, nav_ul);
// });

for (var file of files) {
    if (!lstatSync(ServersDir + `/${file}`).isDirectory()) {
        console.error(`File ${file} should not be in the "Servers" file, Please remove it.`);
        continue;
    };
    const contents = readdirSync(ServersDir + `/${file}`);
    var containsServer = false;
    contents.forEach(item => {
        if (config.FileOptions.jarFileNames.includes(item.split(".").shift())) containsServer = true
        else containsServer = false;
    })
    if (contents <= 0) console.error(`File ${file} is empty. Please remove it.`)
    else if (!containsServer) console.error(`File ${file} Does not contain a server.jar.\nIf this is an error, consider adding the .jar file name to the config.`)
    else createNavItem(file, nav_ul);
}