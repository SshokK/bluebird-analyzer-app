import type {QueryProviderHandlers} from "./useQueryProviderHandlers.types";

import {useState} from "react";
import {QueryClient} from "@tanstack/react-query";

export const useQueryMemoizedQueryClient = ({
  onError
}: {
  onError: QueryProviderHandlers['handleError']
}) => {
  const [queryClient] = useState(new QueryClient({
    defaultOptions: {
      queries: {
        onError
      },
      mutations: {
        onError
      }
    }
  }));

  return queryClient
}