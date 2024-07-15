const zip = require("electron-installer-zip");

zip(
  {
    dir: "./release/min-electron-darwin-arm64/min-electron.app",
    out: "./app",
  },
  (err, res) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log("zip completed!");
  }
);
