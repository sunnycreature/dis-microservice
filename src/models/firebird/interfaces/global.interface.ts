export interface DataObject<K> {
  name: string;
  data: K[];
}

export interface DataResponse {
  resultCode: string;
  resultDescription?: string;
}
