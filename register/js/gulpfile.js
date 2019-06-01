var gulp = require('gulp'); 
var browserSync = require('browser-sync');
gulp.task('serve',function(){
    browserSync.init({
        server:'./'
    });
    gulp.watch('./index.html').on('change',browserSync.reload);
    gulp.watch('./login.js').on('change',browserSync.reload)   //监控的文件
})