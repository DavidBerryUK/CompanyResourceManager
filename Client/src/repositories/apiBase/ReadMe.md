# Repository

Top Level of the repository that provides the following functions
* activate             - restore a record from being archived
* deactivate           - archive a record
* getActiveList        - get a list of active records, key value only
* getAllAsSummary      - get a list of all records ( summary model version )
* getById              - get single record ( extended model version )
* getFilteredList      - get a list of filtered records ( summary model version )
* save                 - save a record ( extended model version )

This calls lower level functions on the ApiBase class, which in turn
calls very low level classes for each of the functions above.
The low level classes de-couple the application from the network package
used to connect to the server, it also provides a common wrapper to
add a layer of application functionallity that is available by default
for all modules requiring API functions.