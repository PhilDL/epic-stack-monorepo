# Example package for client hints

This packages contains `client-hints` and `request-info` utils that were in the
utils folder of the original Epic stack app. Refactoring done:

- Original app now imports from this package
- Some hook like `useHints` or `useRequestInfo` were refactored to take "loader"
  as generics (typycally the root loader).
