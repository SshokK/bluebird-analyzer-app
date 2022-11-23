import type {Method} from "axios";
import type {AxiosRequestConfig} from "axios";

export type FetchConfig<Params = unknown> = AxiosRequestConfig<Params> & {
  url: string;
  method: Method
}

export type Fetch = <Return = unknown, Params = unknown>(config: FetchConfig<Params>) => Promise<Return>