const express = require("express");
const app = express();
const path = require("path");


app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname+"/html/home.html"));
});

app.get("/about", (req, res)=>{
    res.sendFile(path.join(__dirname+"/html/about.html"));
});

app.get("/blog", (req, res)=>{
    res.sendFile(path.join(__dirname+"/html/blog.html"));
});

app.get("/careers", (req, res)=>{
    res.sendFile(path.join(__dirname+"/html/careers.html"));
});

app.get("/contact", (req, res)=>{
    res.sendFile(path.join(__dirname+"/html/contact.html"));
});

app.get("/mission", (req, res)=>{
    res.sendFile(path.join(__dirname+"/html/mission.html"));
});

app.get("/repair", (req, res)=>{
    res.sendFile(path.join(__dirname+"/html/repairs.html"));
});

app.get("/trainings", (req, res)=>{
    res.sendFile(path.join(__dirname+"/html/trainings.html"));
});

app.get("/offices", (req, res)=>{
    res.sendFile(path.join(__dirname+"/html/offices.html"));
});

//services
app.get("/services", (req, res)=>{
    res.sendFile(path.join(__dirname+"/html/industryservices.html"));
});

app.get("/services/inspection", (req, res)=>{
    res.sendFile(path.join(__dirname+"/html/inspectionservices.html"));
});

app.get("/services/railways", (req, res)=>{
    res.sendFile(path.join(__dirname+"/html/railwayindustries.html"));
});

app.get("/services/agriculture", (req, res)=>{
    res.sendFile(path.join(__dirname+"/html/agricultureservices.html"));
});

app.get("/services/defense", (req, res)=>{
    res.sendFile(path.join(__dirname+"/html/securityservices.html"));
});

app.get("/services/agriculture/aerialseeding", (req, res)=>{
    res.sendFile(path.join(__dirname+"/html/aerialseeding.html"));
});

app.get("/services/agriculture/aerialspraying", (req, res)=>{
    res.sendFile(path.join(__dirname+"/html/aerialspraying.html"));
});

app.get("/services/inspection/roadinspection", (req, res)=>{
    res.sendFile(path.join(__dirname+"/html/roadinspection.html"));
});

app.get("/services/dronemapping", (req, res)=>{
    res.sendFile(path.join(__dirname+"/html/dronemapping.html"));
});

app.get("/services/inspection/pipelineinspection", (req, res)=> {
    res.sendFile(path.join(__dirname+"/html/pipelineinspection.html"));
});

// R&D
app.get("/research", (req, res)=>{
    res.sendFile(path.join(__dirname+"/html/research.html"));
});

app.get("/research/iot", (req, res)=> {
    res.sendFile(path.join(__dirname+"/html/iotresearch.html"));
});

app.get("/research/ai", (req, res)=> {
    res.sendFile(path.join(__dirname+"/html/airesearch.html"));
});

app.get("/research/cybersecurity", (req, res)=> {
    res.sendFile(path.join(__dirname+"/html/cybersecurityresearch.html"));
});

app.get("/research/digitalplatforms", (req, res)=> {
    res.sendFile(path.join(__dirname+"/html/digitalplotformresearch.html"));
});

app.get("/research/drones", (req, res)=> {
    res.sendFile(path.join(__dirname+"/html/droneresearch.html"));
});

app.get("/research/quantumcomputing", (req, res)=> {
    res.sendFile(path.join(__dirname+"/html/quatumcompres.html"));
});

app.get("/research/robotics", (req, res)=> {
    res.sendFile(path.join(__dirname+"/html/roboticsandautomationres.html"));
});

app.listen(process.env.port || 3000);