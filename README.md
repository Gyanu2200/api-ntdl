# Not to do full stack app

This app is build with MERN stack.
...write about the app what it does...

# How to use

1. Run `git clone ..<put git Path>`
2. Run `cd <repo name>`
3. Run `npm install`
4. Run `npm run dev`. Note, you must have `nodemon`, if not run `npm i nodemon -g` first

Now your server will run at `http://localhost:8000`

## APIs

This api server handles all the task request and allow client to run `CRUD` operation.

### Task Router

Task router follow the following url path `{rootUrl}/api/v1/task`. More details as follow

| #   | PATH    | METHOD | IS PRIVATE | DESCRIPTION                                                                                                                            |
| --- | ------- | ------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | `/`     | POST   | false      | this api allows client to send taskObject and store in db. the object should be in the following structure `{task : "", hr:0, type: "" |
| 2.  | `/`     | GET    | false      | this api allows client to fetch all the task from db                                                                                   |
| 2.  | `/`     | PATCH  | false      | this api allows client to switch the task from db. Client must send data in the following structure `{_id: "sdf", type:"bad or entry"}`                                                                            |
| 2.  | `/:_id` | DELETE | false      | this api allows client to delete a task baded on the given `_id` from db                                                               |
| 2.  | `/:`    | DELETE | false      | this api allows client to send multiple `_id` of a task to delete multiple items from db                                               |
