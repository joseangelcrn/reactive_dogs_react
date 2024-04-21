# Reactive Dogs  
##### ( React + Vite , just a play on words )

![image](https://github.com/joseangelcrn/reactive_dogs_react/assets/47973568/60611526-6458-48fd-85ee-cf9f30304f82)


## Reactive dogs is a concept app which include:

### Login

You must to log in to see protected content such as CRUD and api calling.

Credentials:

```
user : react
password : react
```

### CRUD

With this app you have a simple CRUD where you can **adopt** many dogs 

### Api communication

WHen you adopt a dog on this application you can see a random dog image powered by **https://dog.ceo/dog-api/** , that will be the dog you will adopt

### Redux + Data persistance

This application use `REDUX (Slice)` integrating 2 Slice files : `UserSlice.js` and `DogSlice.js` to manage **login and dog CRUD**.
In addition, you wont lose your adopted dogs if refresh the page and lose logged user either because application store all data in **localStorage**

-----

## How it works..

````
cd reactive_dogs_react
npm install
npm run serve
````
