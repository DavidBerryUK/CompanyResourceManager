# Entity Factories
Entity (Model) factories are created to work around the issue that Typescript cannot create a new object of a given type. This can be quite restrictive, especially when using generics.

Each of the model factories implement the following interface. 

```typescript
export interface IModelFactory<T> {
    create(): T;
}
```

This means that an entity factory can be passed to a generics function that needs to create a new instance of an object.

This is used extensively in the repositories that receive plain java objects, but need to return strong Typescript objects.


