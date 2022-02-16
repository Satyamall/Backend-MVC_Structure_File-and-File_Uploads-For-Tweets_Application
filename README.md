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

 
