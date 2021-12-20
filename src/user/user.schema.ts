import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User extends Document {
  @Prop()
  userid: number;

  @Prop()
  username: string;

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
  token: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
