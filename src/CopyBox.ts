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
        
        // TODO archivos list
        this.archivos = [];
    }

    static iniciarJSON(json: any) {
        return new CopyBox(json.id, json.nombre, json.ruta);
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