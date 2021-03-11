console.clear();

const app = require("express")(),
      fs = require("fs"),
      consoleHelper = require("./consoleHelper.js");

app.get("*", (req, res) => {
    req.url = req.url.split("?")[0];
    if (req.url == "/") req.url = "index";
    if (req.url == "/index") req.url = "index";
    switch (req.url) {
        case "index":
            return res.send(`Binato Profile Picture Server<hr><a href=""></a>`);

        default:
            // Make sure the file exists
            fs.access(`${__dirname}/ProfilePictures${req.url}.png`, (error) => {
                consoleHelper.printInfo(`Profile picture [${req.url.replace("/", "")}] was requested`);
                // If the user does not have a pfp send the default one
                if (error) return res.sendFile(`${__dirname}/ProfilePictures/DefaultProfilePicture.png`);
                // User does have a profile picture, send theirs back
                else return res.sendFile(`${__dirname}/ProfilePictures${req.url}.png`);
            });
        break;
    }
});

// TODO: Not have a predefined port,
//       doesn't matter for me so not top priority
app.listen(5000, () => consoleHelper.printInfo(`Binato-ProfilePicture is up, listening at port ${5000}`));