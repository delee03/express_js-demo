const express = require("express");
const path = require("path");
// const browserSync = require("browser-sync").create();

const app = express();
const port = 3000;

// Cấu hình view engine là EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Cấu hình static files (CSS, JS, hình ảnh)
app.use("/static", express.static(path.join(__dirname, "public")));

// Route trang chủ
app.get("/", (req, res) => {
    res.render("index", { title: "Welcome to My Express App!" });
});

// Route trang product
app.get("/product", (req, res) => {
    res.render("product", { title: "Welcome to Products" });
});

// Khởi động server
app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
    // browserSync.init({
    //     proxy: `localhost:${port}`,
    //     files: ["views/**/*.*", "public/**/*.*"], //các file cần theo dõi để reload
    //     port: 4000, //port của browser-sync
    //     notify: false, //tắt thông báo của browser-sync
    //     open: false, //tắt mở trình duyệt khi khởi động
    // });
});
