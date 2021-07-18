import {createServer,Model} from 'miragejs'

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
      environment,
  
      models: {
        user: Model,
      },
  
      seeds(server) {
        server.create("user", {
            id:1,  name:'ali',family :"ahmadi",
             age:22,email:'aliahmadi@gmail.com',city:'tehran'
          })
        server.create("user",  {
            id:2,  name:'raza',family :"jafari",
             age:28,email:'rezajafari@gmail.com',city:'kerman'
          })
        server.create("user",  {
            id:3,  name:'taha',family :"khorasani"
            , age:23,email:'tahakhorasani@gmail.com',city:'rafsanjan'
          })
        server.create("user",  {
            id:4,  name:'ghasem',family :"moradi"
            , age:22,email:'ghasemmoradi@gmail.com',city:'mashhad'
          })
      },
  
      routes() {
        this.namespace = "api"
  
        this.get("/users", (schema) => {
          return schema.users.all();
        });
        this.get("/users/:id", (schema,request) => {
            let id =request.params.id
          return schema.users.find(id);
        })
      },
    })
  
    return server
  }