var serverCreator = document.getElementById("serverCreator");

/***
 * @param {Element} version_element
 */
function getVersion(version_element) {
    var selected_element = version_element.options[version_element.selectedIndex];
    var branch = selected_element.parentElement.label;
    var version = selected_element.value;

    var LocalMajor = version.split(".");
    var LocalPatch = LocalMajor.pop();
    
    var branchIndex = versions_json.Branches.findIndex(Branch => Branch.Name === branch);
    if (branchIndex == -1) return console.error(`Something went wrong searching for Branch: ${branch}`)

    var MajorIndex = versions_json.Branches[branchIndex].Majors.findIndex(Major => Major.Name === LocalMajor.join("."));
    if (MajorIndex == -1) return console.error(`Something went wrong searching for Major: ${LocalMajor.join(".")}`)

    var PatchIndex = versions_json.Branches[branchIndex].Majors[MajorIndex].Patches.findIndex(Patch => Patch.Name === LocalPatch);
    if (PatchIndex == -1) return console.error(`Something went wrong searching for Patch: ${LocalPatch}`)

    return versions_json.Branches[branchIndex].Majors[MajorIndex].Patches[PatchIndex].URL;
}

serverCreator.addEventListener("submit", e => {
    if (env === "development") {
        e.preventDefault();
    }
    var serverName = document.getElementById("servername").value;
    var port = document.getElementById("port").value;
    var versions = document.getElementById("versions");

    port = (port == "") ? "25565" : port;

    var versionURL = getVersion(versions);

    var servers_loc = join(__dirname, "..", "..", "..", "Servers")
    var servers = readdirSync(servers_loc).filter(file => file.startsWith(serverName))
    if (servers.length > 0) {
        serverName += servers.length
    }
    var serverLoc = `${servers_loc}/${serverName}`;
    mkdirSync(serverLoc)
    var serverWrite = createWriteStream(`${serverLoc}/server.jar`);
    var intConfig = {
        timeout: 5000,
        retries: 3,
        domain: "google.com"
    }
    checkInternetConnected(intConfig).then(() => {
        console.log(versionURL)
        var request = https.get(versionURL, function(res) {
            res.pipe(serverWrite);
            serverWrite.on("finish", () => {
                serverWrite.close();
                console.log("Successfully Downloaded the Server!")
            })
        })
    })
})