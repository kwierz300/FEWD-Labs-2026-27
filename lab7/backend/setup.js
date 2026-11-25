import { existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import Datastore from "nedb-promises";

const path = name => fileURLToPath(new URL(name, import.meta.url));
mkdirSync(path("./data/"), { recursive: true });
if (!existsSync(path("./id_rsa_priv.pem")) || !existsSync(path("./id_rsa_pub.pem"))) {
    await import("./generateKeypair.js");
}
const { genPassword } = await import("./lib/utils.js");
const users = Datastore.create({ filename: path("./data/users.db"), autoload: true });
if (!(await users.findOne({ username: "test" }))) {
    await users.insert({ username: "test", ...genPassword(process.env.LAB_STAFF_PASSWORD || "test") });
}
const orders = Datastore.create({ filename: path("./data/orders.db"), autoload: true });
if (!(await orders.findOne({}))) {
    await orders.insert({ order: ["Demo customer", "2", ["coffee", "pizza"]] });
}
