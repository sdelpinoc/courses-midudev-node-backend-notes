# Notes
- To start a project
    - `npm init -y` -> all to yes
    - Add "type": "module", in package.json

## Installations
- [express](https://www.npmjs.com/package/express)
    - `npm install express`

- [cors](https://www.npmjs.com/package/cors)
    - `npm install cors`

- [dotenv](https://www.npmjs.com/package/dotenv)
    - `npm install dotenv`

- Eslint(Not use, remove eslintrc.json from the root directory)
    - `npm install --save-dev eslint`
- To config eslint:
    - `./node_modules/.bin/eslint --init`
    - `npm init @eslint/config`

- Standard(Use eslint in the background)
    - `npm install --save-dev standard`
    - Then add 
    ~~~
    "eslintConfig": {
        "extends": "./node_modules/standard/eslintrc.json"
    }
    ~~~
    To package.json

- Mongoose
    - `npm install mongoose`

## Others
- To run nodemon(pre-installed globally)
    - `nodemon app.js`
- To check the script of package.json
    - `npm run`

## Vercel
- To use Vercel, you need a file in the root directory, name vercel.json with:
~~~
{
    "version": 2,
    "builds": [
        {
            "src": "index.js",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "index.js"
        }
    ]
}
~~~
- Then you yo upload the project to github and integrate with Vercel, every commit is a deploy.

## MongoDB
- Password:
    - <password>
- String connection:
    - mongodb+srv://node-backend-notes-user:<password>@cluster0.issaaxu.mongodb.net/?retryWrites=true&w=majority