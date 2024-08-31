/** @param {NS} ns */
export async function main(ns) {
    let n = ns.getServerMaxRam / 2.65;
    for (let i = 0; i <= n; i++) {
        ns.run("hack.js");
    }
}
