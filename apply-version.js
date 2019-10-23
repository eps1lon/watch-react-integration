console.log(
  JSON.stringify(
    ((global.package = require("./material-ui/package.json")),
    [
      "react",
      "react-dom",
      "react-is",
      "react-test-renderer",
      "scheduler"
    ].reduce((pkg, packageName) => {
      pkg.resolutions[packageName] = "the version string";
      return pkg;
    }, global.package)),
    null,
    2
  )
);
