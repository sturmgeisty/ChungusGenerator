// ChungusGenerator - headers retriever (for the request) \\
var headers = {}
headers["accept"] = "*/*"
headers["accept-language"] = "en-US,en;q=0.5"
headers["content-type"] = "application/json"
headers["sec-ch-ua"] = '"Opera GX";v="105", "Chromium";v="119", "Not?A_Brand";v="24"'
headers["sec-ch-ua-mobile"] = "?0"
headers["sec-ch-ua-platform"] = '"Windows"'
headers["sec-fetch-dest"] = "empty"
headers["sec-fetch-mode"] = "cors"
headers["sec-fetch-site"] = "cross-site"
//useragent

module.exports = (...any) => 
{
    return headers
}