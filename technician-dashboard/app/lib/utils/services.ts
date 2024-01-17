'use server';

import { API_ROUTES } from '@/lib/constants';
import { Category, Service } from '@/lib/interfaces';
import { APIs } from '@/lib/services';

export const getCategories = () => APIs.get<Category[]>(API_ROUTES.CATEGORIES);

export const getServices = () => APIs.get<Service[]>(API_ROUTES.SERVICES);
