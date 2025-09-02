
export interface ApiResponse<T> {
    documents: T[];
    total: number;
}

export interface ApiError {
    message: string;
    code: number;
    type: string;
    version: string;
}

export interface PaginationParams {
    page?: number;
    limit?: number;
    cursor?: string;
    cursorDirection?: 'before' | 'after';
}

export interface SearchParams {
    query: string;
    fields?: string[];
}

export interface SortParams {
    field: string;
    order: 'ASC' | 'DESC';
}