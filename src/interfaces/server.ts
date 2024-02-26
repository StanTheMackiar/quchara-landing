export interface ServerResponse<T> {
    status: 'OK' | 'ERROR' | 'NE';
    message: string;
    data?: T;
}