const request = require("request");
const path = require("path");
const criticalcss = require("criticalcss");
const fs = require("fs");
const tmpDir = require("os").tmpdir();

const cssUrl = "http://localhost:8080/styles/style.css";
const cssPath = path.join(tmpDir, "style.css");

request(cssUrl)
  .pipe(fs.createWriteStream(cssPath))
  .on("close", function () {
    criticalcss.getRules(cssPath, function (err, output) {
      if (err) {
        console.log(err);
      } else {
        criticalcss.findCritical(
          "http://localhost:8080/",
          { rules: JSON.parse(output) },
          function (err, output) {
            if (err) {
              console.log(err);
            } else {
              fs.writeFile(
                "public/styles/critical.css",
                output,
                function (err) {
                  if (err) return console.log(err);
                }
              );
            }
          }
        );
      }
    });
  });
