export type FilterState<T extends Record<string, any> = {}> = T & {
  status: string[],
  searchString?: string;
  singleDate?: Date;
  dateRange?: { startDate?: Date; endDate?: Date };
};

// type LeadFilter = FilterState<{ status?: string[]; assignedTo?: string }>;
// type ProductFilter = FilterState<{ category?: string[]; priceRange?: [number, number] }>;

export interface Filter {
  field?: string;
  operator: string;
  value: string[];
}

export interface QueryState {
  filters: Filter[];
  logic: "AND";
  pagination: {
    page: number;
    limit: number;
  };
}

