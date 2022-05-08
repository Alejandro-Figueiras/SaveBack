import { app, BrowserWindow } from "electron";
import Configuracion from "./Configuracion";
import path from "path";
import fs from "fs";


app.on("ready", e => {
    Configuracion.ruta = process.env['USERPROFILE']+path.sep+((!app.isPackaged)?".saveback-dev":".saveback")+path.sep;
    Configuracion.cargar();
    console.log(Configuracion.boxes);

    test();
});

function test() {
    let a = fs.statSync("E:\\Proyectos\\Vuzux\\vuzux\\vuzux\\src\\configuracion\\Configuracion.js");
    console.log(a);
    
}