import { IsBoolean, IsNotEmpty, IsNumber, IsNumberString, IsString, MaxLength, MinLength } from "class-validator";

export class CreateServiceDto {

    @IsString()
    @IsNotEmpty()
    @MinLength( 3 , {message : "should not be less than 3 characters"})
    name : String ;

    @IsString()
    @IsNotEmpty()
    locationId : String;

    @IsNumberString()
    @IsNotEmpty()
    contact : string ;

    @IsString()
    @IsNotEmpty()
    description : String ;

}

