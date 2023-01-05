var FStream = require('fs');
var { VERSION } = require('./version');

function VersionBuildPlugin(options) {
  this.options = options || {};
  !this.options.versionDirectory && (this.options.versionDirectory = 'static');
}

VersionBuildPlugin.prototype.apply = function (compiler) {
  var self = this;
  compiler.hooks.afterEmit.tap('VersionBuildPlugin', function () {
    // 生成版本信息文件路径
    var dir_path =
      self.options.assetsPath + '/' + self.options.versionDirectory;
    var version_file = dir_path + '/version.json';
    var content = '{"version":"' + VERSION + '"}';
    FStream.exists(dir_path, function (exist) {
      if (exist) {
        writeVersion(self, version_file, content);
        return;
      }
      FStream.mkdir(dir_path, function (err) {
        if (err) throw err;
        console.log('\n创建目录[' + dir_path + ']成功');
        writeVersion(self, version_file, content);
      });
    });
  });
  // 编译器对'所有任务已经完成'这个事件的监听
  compiler.hooks.afterEmit.tap('VersionBuildPlugin', function (stats) {
    console.log('应用编译完成！');
  });
};

const writeVersion = (self, versionFile, content) => {
  console.log('\n当前版本号：' + VERSION);
  console.log('开始写入版本信息...');
  // 写入文件
  FStream.writeFile(versionFile, content, function (err) {
    if (err) throw err;
    console.log('版本信息写入成功！');
  });
};

module.exports = { VersionBuildPlugin, VERSION };
