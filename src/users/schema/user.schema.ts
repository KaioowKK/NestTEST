import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema ()
export class User {

    @Prop({ unique : true , required : true })
    username : string;
    
    @Prop({ required : true })
    password : string;

    @Prop({ required : false })
    characterName? : string;

    @Prop({ required : false })
    characterClass?: string;

    @Prop({ required : false })
    characterLevel? : number;
    
    @Prop({ required : false })
    accountCash? : number;
    
}

export const UserSchema = SchemaFactory.createForClass(User);