const browserSync = require("browser-sync").create();
const nodemon = require("nodemon");

nodemon({
    script: "app.js", // File ứng dụng chính
    ignore: ["node_modules/"], // Không theo dõi thay đổi trong thư mục này
});

nodemon.on("start", function () {
    if (!browserSync.active) {
        // Khởi động BrowserSync
        browserSync.init({
            proxy: "http://localhost:3000", // Proxy Express.js qua BrowserSync
            files: ["views/**/*.*", "public/**/*.*"], // Theo dõi các file để reload
            port: 4000, // Port của BrowserSync
            open: false, // Tự động mở trình duyệt khi server khởi động
            notify: false, // Tắt thông báo trên trang web khi reload
        });
    }
});

nodemon.on("restart", function () {
    // Reload lại trang khi nodemon restart
    setTimeout(function () {
        browserSync.reload();
    }, 500);
});
