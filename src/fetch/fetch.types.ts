import type {Method} from "axios";
import type {AxiosRequestConfig} from "axios";

export type FetchConfig<Data = unknown> = AxiosRequestConfig<Data> & {
  url: string;
  method: Method
}

export type Fetch = <Data = unknown>(config: FetchConfig<Data>) => Promise<Data>