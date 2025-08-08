"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/api/v1/signup", function (req, res) {
    res.send("Signup endpoint");
});
app.post("/api/v1/signin", function (req, res) {
    res.send("Signin endpoint");
});
app.post("/api/v1/content", function (req, res) {
    res.send("Add content");
});
app.get("/api/v1/content", function (req, res) {
    res.send("Get content");
});
app.delete("/api/v1/content", function (req, res) {
    res.send("Delete content");
});
app.post("/api/v1/brain/share", function (req, res) {
    res.send("Share brain data");
});
app.get("/api/v1/brain/:shareLink", function (req, res) {
    res.send("View brain data with share link: ".concat(req.params.shareLink));
});
app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
