import axios from "axios";

interface Todo{
      id:number;
      title:string;
      completed:boolean;
}

axios.get('https://jsonplaceholder.typicode.com/todos/2')
      .then(function (response) {
            // handle success
            console.log(response);
            const todo =  response.data as Todo;
            const id = todo.id;
            const title = todo.title;
            const finish = todo.completed;
         logTodo(id,title,finish);
      })
      .catch(function (error) {
            // handle error
            console.log(error);
      })
      .then(function () {
            // always executed
      });

const logTodo = (id:number, title:string, finished:boolean) => {

      console.log(`
             The Todo with ID: ${id}
             Title is: ${title}
             Finished : ${finished}
            `);

};