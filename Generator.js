// ChungusGenerator - Generator \\
var packages = require("./misc/packager")();
var retrieve = require("./functions/Retriever");
var _debugger = require("./console/debugger");

var test = async () => {
    var retrieved = await retrieve(false)
    return retrieved
}

var joemama = async (...any) => {
    try {
        var idx = any[0]
        var farts = await test() // the code
        farts = `https://discord.com/billing/partner-promotions/1180231712274387115/${farts}`
        var random_file_name = packages.randomstring.generate(24);
        var random_file_name_2 = packages.randomstring.generate(3);
        var file_end = `code-${random_file_name}_${random_file_name_2}.txt`
        packages.fs.writeFileSync(`./codes/${file_end}`, farts)
        _debugger("generatedcode", farts, file_end, idx)
    } catch (err) {
        console.error("ChungusGenerator :: Something went wrong.");
    }
}

module.exports = (...any) => {
    var count = any[0] || 5
    count = Number(count);
    for (i = 0; i < count; i++) {
        joemama(i);
    }
}
