import Archivo from "./Archivo";

interface archivoExplorado {
    ruta:string,
    stat:any
}
export default class ArchivoModificado {

    public archivo:Archivo;
    public archivoexp:archivoExplorado;
    public type:number;

    constructor(arch:Archivo, archivo:archivoExplorado, type:number) {
        this.archivo = arch;
        this.type = type;
        this.archivoexp = archivo;

        // Sobre los tipos:
        // 1 - Modificado
        // 2 - Nuevo
        // 3 - Eliminado
    }

}