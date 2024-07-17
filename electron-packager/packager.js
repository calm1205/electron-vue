import packager from "@electron/packager";

try {
  const appPath = await packager({
    dir: "./dist",
    out: "./release",
    overwrite: true,
    // platform: "darwin",
    // arch: "arm64",
    platform: "win32",
    arch: "x64",
  });
  console.log("exported at: ", appPath);
} catch (error) {
  console.error(error);
}
