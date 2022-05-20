import { ITodo } from '../interface';


export default class Api {

   static query(): Promise<ITodo[]> {
      return fetch(Api._url, {
         headers: {
            'Content-Type': 'application/json'
         },
         method: 'GET'
      }).then((res) => res.json());
   }

   static create(item: ITodo): Promise<ITodo> {
      return fetch(Api._url, {
         headers: {
            'Content-Type': 'application/json'
         },
         method: 'POST',
         body: JSON.stringify(item)
      }).then((res) => res.json());
   }

   static destroy(id: string): Promise<void> {
      return fetch(`${Api._url}${id}`, {
         headers: {
            'Content-Type': 'application/json'
         },
         method: 'DELETE'
      }).then((res) => res.json());
   }

   private static _url: string = 'http://localhost:3000/todos/';
}