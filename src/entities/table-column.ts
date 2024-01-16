import { Person } from "./person-type";

export interface TableColumn {
  key: keyof Person | "city";
  label: string;
}
