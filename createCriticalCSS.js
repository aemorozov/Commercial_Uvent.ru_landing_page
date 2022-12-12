var request = require("request");
var path = require("path");
var criticalcss = require("criticalcss");
var fs = require("fs");
var tmpDir = require("os").tmpdir();

var cssUrl = "http://localhost:8080/styles/style.css";
var cssPath = path.join(tmpDir, "style.css");

// setTimeout(createCriticalCSS(), 3000)

// function createCriticalCSS() {
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
              fs.writeFile("dist/styles/critical.css", output, function (err) {
                if (err) return console.log(err);
              });
            }
          }
        );
      }
    });
  });
// }
