import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Log extends Document {
  @Prop({
    required: true,
  })
  type: string;

  @Prop()
  action!: string;

  @Prop({
    required: true,
  })
  companyCode!: string; // Comment

  // Zone Editing
  @Prop({
    required: true,
  })
  loginId!: string; // Comment

  @Prop()
  cameraId!: string;

  @Prop()
  engine!: string[];

  // Status
  @Prop()
  detectionId!: string; // Comment

  @Prop()
  alertId!: string; // Comment

  @Prop()
  from!: string;

  @Prop()
  to!: string;

  @Prop()
  duration!: number;

  @Prop()
  comment!: string;

  @Prop({})
  timestamp: number; // Comment

  @Prop()
  upTime!: number; // Errors

  @Prop()
  downTime!: number; // Errors

  @Prop()
  errorType!: string; // Errors
}

export const LogSchema = SchemaFactory.createForClass(Log);
