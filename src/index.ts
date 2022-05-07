import { app, BrowserWindow } from "electron";
import Configuracion from "./Configuracion";
import path from "path";


app.on("ready", e => {
    Configuracion.ruta = process.env['USERPROFILE']+path.sep+((!app.isPackaged)?".saveback-dev":".saveback")+path.sep;
    
});