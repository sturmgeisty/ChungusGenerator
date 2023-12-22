// ChungusGenerator - debugger (with colors 🥵) \\
var colors = globalThis.pckgs.colors
var global_watermark = "[ChungusGenerator] :: "
module.exports = (...any) => {
    var reason = any[0] // "testcode", "generatedcode", "code_err", "partner", "header"
    var thingz = any[1] //a
    var lo = any[2]||"temp.txt" // maybe file name for the code 
    var idx = any[3]
    switch(reason){
        //test code (init)
        case "test":
        case "testcode":
            console.log("\n" + colors.green(global_watermark) + `${colors.bold("SUCCESS.")} Generated test code: \n${colors.blue(`https://discord.com/billing/partner-promotions/1180231712274387115/${thingz}`).underline}\n`)
            break
        //retrieve error
        case "err":
        case "codeerr":
        case "code_err":
            console.log("\n" + colors.red(global_watermark) + `${colors.bold("ERROR.")} Failed to retrieve code, error: \n${colors.red(thingz)}`)
            break
        //partner & header
        case "partner":
            console.log(colors.red(global_watermark) + `${colors.bold("Partner ID:")} \n${colors.cyan(thingz)}`)
            break
        case "header":
            console.log(colors.red(global_watermark) + `${colors.bold("Spoofed User-Agent:")} \n${colors.cyan(thingz)}`)
            break
        // generated code
        case "generated":
        case "code":
        case "generatedcode":
            console.log(colors.green(global_watermark) + `${colors.bold("SUCCESS.")} Generated nitro promotion code ⟶  "${colors.yellow(lo).italic}" (${colors.magenta(idx)})`)
            break
    }
}