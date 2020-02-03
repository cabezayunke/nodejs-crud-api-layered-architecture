# nodejs-crud-api-layered-architecture
NodeJS REST API example with a layered architecture

### Technologies:
* mongodb
* nodejs
* docker (for local dev and test environments)

### Main packages:
* koa (web server)
* joi (validation)
* mongoose (mongodb ORM)
* jest (testing)

### Layered Architecture

We have different layers with different responsibilities.
Business logic is decoupled from the controller.

> Router
> - validates input (same file)
> - calls controller (same file)
>
> Service
> - business logic
> - calls DAL(Data Access Layer) and works with DB Model
>
> Data Access Layer
> - DAO (Data Access Object, uses DB Model)
> - DB Model (connects to DB hand handles reads and writes)


### TODO:

* decouple validation logic from Router and add it to business logic layer:

Having the validation coupled to the controller makes it difficult to test validation logic in isolation or swap the implementation.

* decouple DB models from business logic

DAL still coupled to business logic given that mongoose objects are returned from DAO functions to service functions.
This makes it difficult to test the DAL in isolation as well as changing the implementation given that we would have to make changes in the business logic layer too (we should only need to make changes in the DAO layer).

To sum up: controllers should know nothing about Joi and the business layer should know nothing about Mongoose.

### Next

See these improvements in https://github.com/cabezayunke/nodejs-crud-api-hexagonal
