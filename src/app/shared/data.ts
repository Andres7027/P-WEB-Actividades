export interface modelos{
    id:String;
    date_create:Date;
    date_updat:Date;

}
export interface Cliente{
    username:String;
    phone:Number;
    handle:String;
}


export interface Catalogo{
    productos: String;   
    
}
export interface Producto{
    name: String;
    price: Number;


}