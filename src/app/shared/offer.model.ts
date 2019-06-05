export class Offer {
    public name: string;
    public shortName: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, shortName: string, desc: string,imagePath: string){
        this.name = name;
        this.shortName = shortName;
        this.description = desc;
        this.imagePath = imagePath;
    }
}