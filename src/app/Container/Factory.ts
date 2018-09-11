import ContainerInterface from './ContainerInterface';

export type Factory<T> = (container: ContainerInterface) => T;
