import { zip } from "electron-installer-zip";

zip(
  {
    dir: "./release/min-electron-darwin-arm64/min-electron.app",
    // out can either be a directory or a path for a ZIP file
    out: "./dist/",
    // out: 'dist/App.zip',
  },
  (err, res) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log("Zip file written to: ", res);
  }
);
