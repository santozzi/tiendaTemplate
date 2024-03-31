import dotenv from 'dotenv'
dotenv.config();
export interface TokenSecurity{
    secretKey:string;
 
}
export function confgToken():TokenSecurity{
   const {SECRET_KEY} = process.env
    if(!SECRET_KEY)
      throw  new Error ("SECRET_KEY fail env");
    
    const config:TokenSecurity = {
       secretKey: SECRET_KEY
 } 
    return config;

}