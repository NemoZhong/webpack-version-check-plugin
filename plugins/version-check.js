module.exports = function VersionUpdateCheck(
  version,
  JSONUrl = '/static/version.json',
) {
  return new Promise((resolve) => {
    if (!version) return resolve(false);

    fetch(JSONUrl + '?t=' + +new Date())
      .then((response) => response.json())
      .then((data) => {
        if (data.version !== version) {
          return resolve(true);
        }
        return resolve(false);
      })
      .catch(() => {
        return resolve(false);
      });
  });
};
