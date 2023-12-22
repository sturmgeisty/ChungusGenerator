// ChungusGenerator - globalThis packages \\

var gt = globalThis;
gt.pckgs = {};
////////////////////////////////////////////
module.exports = (...any) => 
{
    //pckgs
    gt.pckgs.fs = require("fs")
    gt.pckgs.axios = require("axios")
    gt.pckgs.useragents = require("../functions/randomOperaUserAgents")
    gt.pckgs.headers = require("../functions/headersRetriever")
    gt.pckgs.randomstring = require("randomstring")
    gt.pckgs.colors = require("colors")
    gt.pckgs.rl = require("readline")

    return gt.pckgs
}