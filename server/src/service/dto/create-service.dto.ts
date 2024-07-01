import { IsBoolean, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateServiceDto {

    @IsString()
    @IsNotEmpty()
    @MinLength( 10 , {message : "should not be less than 10 characters"})
    name : String ;

    @IsString()
    @IsNotEmpty()
    @MinLength( 3 , {message : "should not be less than 5 characters"})
    @MaxLength( 50 , {message : "should not be more than 50 characters"})
    location : String;

    @IsNumber()
    @IsNotEmpty()
    contact : number ;

    @IsString()
    @IsNotEmpty()
    description : String ;

    
    @IsBoolean()
    isAvalaible : boolean;

}

// export class UpdateServiceDto {
//     @IsString()
//     @IsNotEmpty()
//     @MinLength( 10 , {message : "should not be less than 10 characters"})
//     name : String ;

//     @IsString()
//     @IsNotEmpty()
//     @MinLength( 3 , {message : "should not be less than 5 characters"})
//     @MaxLength( 50 , {message : "should not be more than 50 characters"})
//     location : String;

//     @IsNumber()
//     @IsNotEmpty()
//     contact : number ;

//     @IsString()
//     @IsNotEmpty()
//     description : String ;
// }
