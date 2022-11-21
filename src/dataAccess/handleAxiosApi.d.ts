import { AxiosResponse } from 'axios';
export default function handleAxiosApi<ResponseType>(axiosPromises: Promise<AxiosResponse<any>> | Promise<AxiosResponse<any>>[]): Promise<ResponseType>;
