import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class ReservationDocument extends AbstractDocument {
  @Prop({ type: Date }) timeStamp: Date;
  @Prop({ type: Date }) startDate: Date;
  @Prop({ type: Date }) endDate: Date;
  @Prop({ type: String }) userId: string;
  @Prop({ type: String }) placeId: string;
  @Prop({ type: String }) invoiceId: string;
}

export const ReservationSchema =
  SchemaFactory.createForClass(ReservationDocument);
