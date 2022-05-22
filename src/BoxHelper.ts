import Configuracion from "./Configuracion";
import fs from "fs";
import CopyBox from "./CopyBox";

export const nuevaBox = (id:string, nombre:string, ruta:string) => {
    // TODO hacer comprobacion de caracteres en la id
    let boxpath = `${Configuracion.ruta}boxes/${id}/`;
    if (!fs.existsSync(boxpath)) {
        fs.mkdirSync(boxpath);
        fs.writeFileSync(ruta, JSON.stringify({
            id,
            nombre,
            ruta,
            archivos:[]
        }));
        let box = new CopyBox(id, nombre, ruta);
        return box;
    } else {
        throw "La box ya existe en la ruta de la configuracion";
    }
    
};

