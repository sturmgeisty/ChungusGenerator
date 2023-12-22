<img src="https://media.discordapp.net/attachments/1167886221490524230/1187880228803072051/z7lPt5f.png?ex=65987eac&is=658609ac&hm=81582344b66a041217ed66e0fead6522e037e7895cc05db81c09f6b27d7b8823&=&format=webp&quality=lossless" alt="Chungus logo" width="100" height="100" align="right" />

# ChungusGenerator
> _The discord nitro promotion code generator, thanks to Opera GX_

[Installation Guide](https://github.com/orisyn/ChungusGenerator/blob/main/README.txt) | [Developer](<https://discord.com/users/1160157358610206750>)

[![Discord Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/boronide)

(coded in a hurry)
https://cdn.discordapp.com/attachments/1185526265231450212/1187877696148090960/j4ZlXZY.mp4
[![Preview](https://a.allegroimg.com/original/1ee933/e30d6d6a444e84ca52e74bb1be63)](https://cdn.discordapp.com/attachments/1185526265231450212/1187877696148090960/j4ZlXZY.mp4)

## Features

- Debugging of codes
- Patch test (check to see if opera gx patched this)
- Generator
- CLI
- Code file saving (save codes to a file)
- Clear all txt files from the codes folder

## Quick Start

**Install all NPM packages**
```bash
$ npm install fs axios randomstrings colors readline
```

**Using the init**
```
node index
```

**Using the generator globally**
You can modify the generator code to where it can have everything in 1 file, and not more, and then run the Generator js file, or keep the packager file, retriever and debugger, and use it globally by doing:
```js
var generator = require("./Generator")
var count = 50 // generate 50 codes
generator(50)
```

**Credit**
Made by sturmgeist/zirt/orisyn.
