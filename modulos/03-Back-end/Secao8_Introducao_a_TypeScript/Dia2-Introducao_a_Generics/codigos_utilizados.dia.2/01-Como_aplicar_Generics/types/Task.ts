export type Task<T> = {
  name: string,
  responsible: string,
  progress: number,
  data: T,
};