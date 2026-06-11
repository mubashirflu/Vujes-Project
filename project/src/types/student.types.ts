export interface subject{
    id:number,
    name:String,
    grade:number,
}
export interface student{
    id:number,
    name:string,
    subjects:subject[],
}
export interface gradeResult{
    average:number,
    letter:string,
    status:"Pass" | "Fail"   
}