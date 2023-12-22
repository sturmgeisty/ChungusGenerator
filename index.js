// ChungusGenerator - Initializator \\
var packages = require("./misc/packager")();
var retrieve = require("./functions/Retriever");
var _debugger = require("./console/debugger");
var generator = require("./Generator")

var GEN_TEST_CODE = true; // if should gen a test code to see if its patched or not

var DEBUG = true; // debug stuff like what was used for generating the nitro code for init
var GEN_DEBUG = false; // enable this and ur pc will lag n

var test=async()=>{
    var retrieved=await retrieve(DEBUG)
    return retrieved
}
var joemama=async()=>{
    try{
        var farts=await test()
        _debugger("testcode",farts)
    }catch(err){
        //j
    }
}
if(GEN_TEST_CODE===true){joemama()}
//lets goo joe mama
//actual gen handler
var rl = packages.rl
var colors = packages.colors
setTimeout(() => {
    var intf = rl.createInterface({input:process.stdin,output:process.stdout,
        prompt:`${colors.green("[ChungusGenerator] ::")} ${colors.bold("How many codes would you wish to generate: ")}`})
        intf.prompt()
        intf.on("line", (line) => {
            var count = Number(line);
            if (count >= 1) {
                console.log(`${colors.green("[ChungusGenerator] ::")} Generating ${colors.bold(count)} codes...`)
                generator(count);
                intf.close();
                console.log(`${colors.green("[ChungusGenerator] ::")} ${colors.bold("SUCCESS.")} Generated ${colors.bold(count)} codes!`)
            }
        })
        intf.on("sigint", () => {
            console.log(`${colors.red("[ChungusGenerator] ::")} ${colors.bold("Stopping chungus generator...")}`)
            intf.close();
            process.exit(128);
        })
}, 3000);
