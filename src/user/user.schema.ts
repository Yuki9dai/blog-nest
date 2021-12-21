import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User extends Document {
  @Prop()
  userid: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  nickname: string;

  @Prop()
  job: string[];

  @Prop()
  introduce: string;

  @Prop()
  avatar: string;

  @Prop()
  createTime: string;

  @Prop()
  email: string;

  @Prop()
  token: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
