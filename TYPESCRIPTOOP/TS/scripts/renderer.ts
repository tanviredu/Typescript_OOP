export class Renderer{
    
    // stop the class for initialize
    private constructor(){}
    
    // static way
    // this is a default data type
    // for type script
    static viewTemplate:HTMLDivElement;
    
    static render(html:string){
        Renderer.viewTemplate.innerHTML = html;
    }
}