var versions_json = require("../../../../ServerURLs.json");
function simplifyVersions() {
    var simplified_versions = {
        Branches: []
    };
    versions_json.Branches.forEach(function (branch) {
        var simplified_branch = {
            Name: branch.Name.toString(),
            versions: []
        };
        branch.Majors.forEach(function (Major) {
            Major.Patches.forEach(function (Patch) {
                simplified_branch.versions.push(Major.Name + "." + Patch.Name);
            });
        });
        simplified_versions.Branches.push(simplified_branch);
    });
    return simplified_versions;
}
;
function createVersionItem(versions) {
    var versions_select = document.getElementById("versions");
    versions.Branches.forEach(function (branch) {
        var branch_separator = document.createElement("optgroup");
        branch_separator.label = branch.Name;
        versions_select.appendChild(branch_separator);
        branch.versions.forEach(function (version) {
            var version_opt = document.createElement("option");

            var splitVersion = version.split(".");
            if (splitVersion[splitVersion.length-1] == "0") {
                splitVersion.pop();
            }
            
            version_opt.innerText = splitVersion.join(".");
            version_opt.value = version
            branch_separator.appendChild(version_opt);
        });
    });
}
document.addEventListener("DOMContentLoaded", function () {
    var simplified_versions = simplifyVersions();
    createVersionItem(simplified_versions);
});