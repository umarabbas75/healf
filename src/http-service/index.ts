import { AxiosRequestConfig } from 'axios';
import { UseQueryOptions, useQuery } from 'react-query';

import axiosAuth from '@/utils/axiosAuth';

type ApiGetCallProps<TData = any, TError = any> = {
  endpoint: string;
  config?: UseQueryOptions<TData, TError>;
  queryKey: readonly any[];
  axiosConfig?: AxiosRequestConfig;
};

/**
 * Facade for react-query GET requests.
 * Standardizes API calls with auth, query key management, and config options.
 * Benefits: Reduces boilerplate, ensures consistency, and simplifies error handling.
 */
export function useApiGet<TData = any, TError = any>({
  endpoint,
  config = {},
  queryKey,
  axiosConfig = {},
}: ApiGetCallProps<TData, TError>) {
  const queryOptions = {
    ...config,
  };

  const query = useQuery<TData, TError>(queryKey || [endpoint], () => axiosAuth.get(endpoint, axiosConfig), {
    ...queryOptions,
  });

  return query;
}
