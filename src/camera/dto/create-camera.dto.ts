export class CreateCameraDto {
  readonly id: string;
  readonly name: string;
  readonly color: string;
  readonly sms?: boolean;
  readonly email?: boolean;
}
