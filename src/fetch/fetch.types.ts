import type {Method} from "axios";
import type {AxiosRequestConfig} from "axios";
import type {AxiosError} from "axios";

export type FetchConfig<Params = unknown> = AxiosRequestConfig<Params> & {
  url: string;
  method: Method
}

export type Fetch = <Return = unknown, Params = unknown>(config: FetchConfig<Params>) => Promise<Return>

export type RequestError<T = unknown> = AxiosError<T, unknown>;
export type ServerErrorResponse = { error: string }