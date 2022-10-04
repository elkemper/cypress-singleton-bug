export class ExoStatic {
    public static First = new ExoStatic('troy')
    private constructor(param: string){
        this.param=param
    }
    public param: string
}