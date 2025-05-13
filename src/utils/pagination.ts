export interface Pagination<T> {
    items: Array<T>,
    page: number,
    size: number,
    totalItems: number,
    totalPages: number,
    hasNextPage: boolean,
    hasPreviousPage: boolean,
}