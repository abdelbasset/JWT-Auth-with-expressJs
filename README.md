**JSON Web Token Authentication using Express**

To test, we will need to use POSTMAN.

Go to POSTMAN, and send a post request with the following JSON object in its body.
localhost:8888/login
```ruby
{
  "username": "clarkKent",
  "password": "superman",
}
```
Now start the server by running the "node ." command.

Set some other PORT for the api.js file with the command:
```ruby
$ export API_PORT=5555
```

Run the "node api.js" command in your terminal. 
To check if the authentication works as it should, go to POSTMAN and run the GET request on localhost:5555/asset. 

Then run the GET request on localhost:5555/asset/secret

To solve the problem, go to the Authentication tab in POSTMAN (localhost:8888/login), and select the Type as Bearer Token. 

Then enter the value of Token as the one that we had received in the previous sections (localhost:5555/asset/secret).
