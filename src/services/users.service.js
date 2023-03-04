const Users = require('../models/users.model');
const Todos = require('../models/todos.model');
const Categories = require('../models/categories.model');

class UsersService {
    static async create(newUser){
        try {
          const userCreated = await Users.create(newUser);  
          return userCreated;
        } catch (error) {
          throw error;  
        }
    }

    static async getTodosByUserId(id){
      try {
        const todosByUserId = await Users.findByPk(id,{
          attributes: ["id", "username"],
          include: [{
              model: Todos,
              attributes: ["id", "title", "description" ],
              include: {
                model: Categories,
                attributes: ["name"]
              }
          },
                      
          ]
        });
        return todosByUserId;
      } catch (error) {
        throw error;  
      }
    }  

}

module.exports = UsersService;