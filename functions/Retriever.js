// ChungusGenerator - nitro code retriever \\
var axios = globalThis.pckgs.axios
var randomstring = globalThis.pckgs.randomstring
var randomOperaUserAgent = globalThis.pckgs.useragents
var OperaHeaders = globalThis.pckgs.headers

var _debugger = require("../console/debugger")

var GLOBAL_URL = "https://api.discord.gx.games/v1/direct-fulfillment"
module.exports = async (...any) => 
{
    var debugging = any[0];
    var temp_prtnr = randomstring.generate({
        length: 64,
        capitalization: "lowercase"
    })
    var temp_headers = OperaHeaders();
    var temp_header = randomOperaUserAgent()
    temp_headers["User-Agent"] = temp_header

    if(debugging===true){
        _debugger("partner", temp_prtnr)
        _debugger("header", temp_header)
    }



    try {
        var resp = await axios.post(GLOBAL_URL, {
            partnerUserId: temp_prtnr
        }, {
            headers: temp_headers
        });
        return resp.data.token;
    } catch (err) {
        return _debugger("code_err", err)
    }
}

