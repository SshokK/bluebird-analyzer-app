export type SportFamilySchema = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export type FetchSportFamiliesPayload = [params?: {
  limit?: number;
  offset?: number;
  sortField?: keyof SportFamilySchema;
  sortOrder?: string;
}]
export type FetchSportFamiliesResponse = SportFamilySchema[];
export type FetchSportFamilies = (...args: FetchSportFamiliesPayload) => Promise<FetchSportFamiliesResponse>


export type FetchSportFamilyByIdPayload = [sportId: number];
export type FetchSportFamilyByIdResponse = SportFamilySchema;
export type FetchSportFamilyById = (...args: FetchSportFamilyByIdPayload) => Promise<FetchSportFamilyByIdResponse>


export type CreateSportFamilyPayload = [body: {
  name: SportFamilySchema['name']
}];
export type CreateSportFamilyResponse = SportFamilySchema;
export type CreateSportFamily = (...args: CreateSportFamilyPayload) => Promise<CreateSportFamilyResponse>