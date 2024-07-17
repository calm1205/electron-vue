import electronInstaller from "electron-winstaller";

try {
  await electronInstaller.createWindowsInstaller({
    appDirectory: "/release/min-electron-win32-x64",
    outputDirectory: "/win",
    authors: "calm1205",
    exe: "myapp.exe",
  });
  console.log("It worked!");
} catch (e) {
  console.log(`No dice: ${e.message}`);
}
