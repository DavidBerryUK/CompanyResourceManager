# Model Mappers

Model mappers are used to convert plain JavaScript objects to strongly typed Typescript objects.

The generic ModelGenericMapper can map single objects or arrays, but it must be initialised correctly for each Typescript object type.

```typescript
export  interface IModelGenericMapper<T> {
    mapToEntity(item: any): T;
    mapToArray(dataArray: any[]): Array<T>;
}
```

The ModelMapperFactories configure the mapper for a specific class type. This approach ensures that this function is strongly typed and ensures code is not repeated.

An object factory is created for each entity. The following examples show how get obtain a mapper.

```typescript
ModelMapperFactoryAsset.createSummaryMapper();
ModelMapperFactoryAsset.createExtendedMapper();
ModelMapperFactoryPerson.createExtendedMapper();
```

These mappers are used extensively in the repository layer.