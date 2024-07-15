import packager from "@electron/packager";

try {
  const appPath = await packager({
    dir: ".",
    out: "./release",
    overwrite: true,
    platform: "darwin",
    arch: "arm64",
  });
  console.log("exported at: ", appPath);
} catch (error) {
  console.error(error);
}
