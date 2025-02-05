import { InputNumber } from "../input-number/input-number.models.js";

export interface ListButton {
  label: string;
  hasInputNumber?: boolean;
  inputNumber?: InputNumber;
  disabled?: boolean;
  sublabel?: string;
  subcontent?: string;
  count: number;
}
