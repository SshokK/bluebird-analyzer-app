export type SportSchema = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export type FetchSportsPayload = [params?: {
  limit?: number;
  offset?: number;
  sortField?: keyof SportSchema;
  sortOrder?: string;
}]
export type FetchSportsResponse = SportSchema[];
export type FetchSports = (...args: FetchSportsPayload) => Promise<FetchSportsResponse>


export type FetchSportPayload = [sportId: number];
export type FetchSportResponse = SportSchema;
export type FetchSport = (...args: FetchSportPayload) => Promise<FetchSportResponse>