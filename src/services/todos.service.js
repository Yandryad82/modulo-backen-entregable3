const Todos = require('../models/todos.model');
const Users = require('../models/users.model');
const Categories = require('../models/categories.model');

class TodosService {
  static async create(newTodo){
      try {
        const todoCreated = await Todos.create(newTodo);  
        return todoCreated;
      } catch (error) {
        throw error;  
      }
  }

  static async getTodosWithUser(todoId){
      try {
        const todosWithUser = await Todos.findByPk(todoId,{
          attributes: ["title", "description", "status","category_id"],
          include: [{
            model: Users,
            attributes: ["username"]
          },
          {
            model: Categories,
            attributes: ["name"]
          }
        ]
        });
        return todosWithUser;
      } catch (error) {
        throw error;  
      }
  } 

  static async update(id, updateTodoData){
      try {
        const todoUpdated = await Todos.update(updateTodoData, {
          where: {id}
        });
        return todoUpdated;
      } catch (error) {
        throw error;  
      }
  }

  static async delete(id){
      try {
        const todoDeleted = await Todos.destroy({
          where: {id}
        });
        return todoDeleted;
      } catch (error) {
        throw error;  
      }
  }
}

module.exports = TodosService;

