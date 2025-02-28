export type FilterState<T extends Record<string, any> = {}> = T & {
  status: string[],
  searchString?: string;
  singleDate?: Date;
  dateRange?: { startDate?: Date; endDate?: Date };
};

// type LeadFilter = FilterState<{ status?: string[]; assignedTo?: string }>;
// type ProductFilter = FilterState<{ category?: string[]; priceRange?: [number, number] }>;

