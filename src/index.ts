import { app, BrowserWindow } from "electron";
import Configuracion from "./Configuracion";
import path from "path";
import fs from "fs";
import { backup } from "./Backuper";
import CopyBox from "./CopyBox";


app.on("ready", e => {
    Configuracion.ruta = process.env['USERPROFILE']+path.sep+((!app.isPackaged)?".saveback-dev":".saveback")+path.sep;
    Configuracion.cargar();
    console.log(Configuracion.boxes);

    test();
});

app.on("quit", e => {
    Configuracion.guardar();
})

function test() {
    console.log(backup(new CopyBox("a", "a", "A:/Usuario/Desktop/SaveBack/dist/")));
    
}