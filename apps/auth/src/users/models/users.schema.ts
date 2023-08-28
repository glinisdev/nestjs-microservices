import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class UserDocument extends AbstractDocument {
  @Prop({ type: String }) email: string;
  @Prop({ type: String }) password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
