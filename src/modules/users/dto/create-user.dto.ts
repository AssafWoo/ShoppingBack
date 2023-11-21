import { IsOptional } from "class-validator";

export class CreateUserDto {
    readonly username: string;
    readonly email: string;
    
    @IsOptional()
    readonly roles?: string[];
  
    @IsOptional() 
    readonly clerkId?: string; 

    @IsOptional() 
    readonly clerkOrganizationId?: string; 
  }