import { UrlSerializer } from "@angular/router";
import { generate } from "rxjs";

export interface languageResult {
  data: language[];
  meta: Meta;
}

export interface Meta {
  page: number;
}

export interface language {
  id: number;
  name: string;
  description: string;
  year: number;
}