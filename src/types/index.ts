export interface RequestType {
  body: Record<string, any>;
  params: Record<string, string>;
  query: Record<string, string>;
}

export interface ResponseType {
  status: (code: number) => ResponseType;
  json: (data: any) => void;
  send: (data: any) => void;
}
