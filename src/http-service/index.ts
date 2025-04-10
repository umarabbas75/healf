import { AxiosRequestConfig } from 'axios';
import { UseQueryOptions, useQuery } from 'react-query';

import axiosAuth from '@/utils/axiosAuth';

type ApiGetCallProps<TData = any, TError = any> = {
  endpoint: string;
  config?: UseQueryOptions<TData, TError>;
  queryKey: any[];
  axiosConfig?: AxiosRequestConfig;
};

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
