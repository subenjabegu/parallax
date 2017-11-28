module.exports = function (grunt) {
  grunt.registerTask('mixins_update', function() {
    var path_global = require('path');
    var file = '';
    var parent_dirname = path_global.resolve(__dirname, '..', '..', '..');
    var mixins_dirname = path_global.resolve(parent_dirname, 'build', 'lesshat.less');
    var version = grunt.file.readJSON(path_global.resolve(parent_dirname, 'package.json')).version;
    if (grunt.file.exists(mixins_dirname)) {
      file = grunt.file.read(mixins_dirname);
      file = file.replace(/{{\s*version\s*}}/, version + ' ' + '(' + grunt.template.today('yyyy-mm-dd') + ')');
      grunt.file.write(mixins_dirname, file);
      grunt.log.ok('lesshat.less version changed!');
      grunt.log.ok('lesshat-prefixed.less version changed!');
      return;
    }
    grunt.fail.fatal('lesshat.less file not found');
  });
};
