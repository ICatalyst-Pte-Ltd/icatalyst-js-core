export type OmitBig5<T> = Omit<T, 'created' | 'modified' | 'createdBy' | 'modifiedBy' | 'objectVersion'>;
