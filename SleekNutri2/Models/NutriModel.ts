export class NutriModel {
    //1= male, 2=female
    public sex: number;
    public age: number;
    public centimeters: number;
    public weight: number;
    public ActivityLevel: number;




    //Macros
    public starch: number;
    public sugar: number;
    public protien: number;
    public fat: number;
    public water: number;


    //Vitamins
    
    public VA: number;
    public VC: number;
    public VE: number;
    public sodium: number;
    public fiber: number;


    //personal
    public location: string;






    constructor() {
        this.age = null;
        this.ActivityLevel = null;
        this.centimeters = null;        
        this.fat= null;        
        this.fiber= null;        
        this.location = null;        
        this.protien = null;        
        this.sex = null;        
        this.sodium = null;        
        this.starch = null;        
        this.sugar = null;        
        this.VA = null;        
        this.VC = null;        
        this.VE = null;        
        this.water= null;        
        this.weight= null;        


    }
}