const fs = require("fs");

function loadData() {
    try {
        const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
        console.log("📌 Loaded Data:", data);
        return data;
    } catch (err) {
        console.error("❌ Error reading data.json:", err);
        return {};
    }
}

const groupedMH = loadData();