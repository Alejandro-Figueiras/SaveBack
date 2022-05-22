import Configuracion from "./Configuracion";
import fs from "fs";
import Archivo from "./Archivo";

export default class CopyBox {
    private id:string;
    private nombre:string;
    private ruta: string;
    private archivos:Archivo[];

    constructor(id:string, nombre:string, ruta:string) {
        this.id = id;
        this.nombre = nombre;
        this.ruta = ruta;
        
        let info = JSON.parse(fs.readFileSync(`${Configuracion.ruta}boxes/${id}/box.json`,'utf-8'));
        if (info.id==id&&info.nombre==nombre&&info.ruta==ruta) {
            // TODO rellenar con la informacion del archivo json
            this.archivos=[];
        } else {
            throw "Los datos no coinciden";
        }
    }

    static iniciarJSON(json: any) {
        return new CopyBox(json.id, json.nombre, json.ruta);
    }

    guardarDatos(ruta:string) {
        let json = {
            id:this.id,
            nombre:this.nombre,
            ruta:this.ruta,
            archivos:this.archivos
        }

        fs.writeFileSync(`${Configuracion.ruta}boxes/${this.id}/box.json`,JSON.stringify(json));
    }

    getID() {
        return this.id;
    } 

    getNombre() {
        return this.nombre;
    }

    getRuta() {
        return this.ruta;
    }

    getArchivos() {
        return this.archivos;
    }

    toJSON() {
        return {
            id:this.id,
            nombre:this.nombre,
            ruta:this.ruta
        }
    }

}