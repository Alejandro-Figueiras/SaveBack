import fs from "fs";
import CopyBox from "./CopyBox";

interface finalJSON {
	boxes: Object[]
}

export default class Configuracion {
	
	static ruta:string = "";
	
	static boxes:CopyBox[];

	static cargar() {
		this.verificar();

		const rutaConfig = this.ruta+"config.json";
		let json:finalJSON;
        if (fs.existsSync(rutaConfig)) {
            let file = fs.readFileSync(rutaConfig, 'utf-8');
            json = JSON.parse(file);
        } else {
            json = {
				boxes:[]
			}
        }

		// Parsing boxes
		this.boxes = [];
		for (let box of json.boxes) {
			this.boxes.push(CopyBox.iniciarJSON(box));
		}
	}

	static guardar() {
		let json:finalJSON = {boxes:[]};
		
		// Parsing boxes
		for (let box of this.boxes) {
			json.boxes.push(box.toJSON());
		}

        this.verificar();
        const ruta = this.ruta+"configuracion.json";
        return fs.writeFileSync(ruta, JSON.stringify(json));
    }

	private static verificar() {
		if(!fs.existsSync(this.ruta)) {
			fs.mkdirSync(this.ruta);
		}
		if(!fs.existsSync(this.ruta + "boxes/")) {
			fs.mkdirSync(this.ruta + "boxes/");
		}
	}

}
