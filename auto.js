/** @param {NS} ns */
export async function main(ns) {
    for (let i = 0; i <= (ns.getServerMaxRam(ns.getHostname()) /  2.45); i++) {
        ns.run("hack.js");
    }
}
