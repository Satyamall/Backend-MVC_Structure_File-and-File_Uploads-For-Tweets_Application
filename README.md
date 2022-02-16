# Backend-MVC_Structure_File-and-File_Uploads-For-Tweets_Application

**Install the express, cors, nodemon, express-validator, ejs and multer**

# ejs-> It is used for html tags in the form of index.ejs, users.ejs etc.

# multer-> It is used for file upload by the help of multer. It work like a middleware.

```js
   npm i mongoose express cors express-validator ejs multer nodemon
```

**For start this aplication**
```js
  npm run start
```

# In multer for windows causes issues for file directory->
```js
 const storage = multer.diskStorage({
    filename: function(req,file, callback){
          callback(null,  new Date().toISOString() + file.originalname)
    },
    destination: function(req,file,callback){
        console.log(`destination: ${path.join(__dirname,"../uploads/")}`)
        callback(null, path.join(__dirname,"../uploads"))
    }
})
```

# what we can do for window in multer for filename. Remove `new Date().toISOString()` this part from filename.

```js
 const storage = multer.diskStorage({
    filename: function(req,file, callback){
          callback(null, file.originalname)
    },
    destination: function(req,file,callback){
        console.log(`destination: ${path.join(__dirname,"../uploads/")}`)
        callback(null, path.join(__dirname,"../uploads"))
    }
})
```

 ![Screenshot (273)](https://user-images.githubusercontent.com/80479635/154264767-9eb6bf2f-272e-4638-b874-2896b68d6ee8.png)

![Screenshot (274)](https://user-images.githubusercontent.com/80479635/154264786-69f29d17-44fb-422e-a0b8-52dbac60def3.png)

![Screenshot (275)](https://user-images.githubusercontent.com/80479635/154264839-496f47f1-92b0-483f-8603-e44e0063897f.png)
