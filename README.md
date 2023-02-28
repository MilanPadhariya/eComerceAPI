# eComerceAPI

•	Server.js is the entry point of app which establishes the server and connects to the database(it is mongodb database hosted on cloud)

•	App.js: it contains the express setup app and middlewares for routing and other middlewares such as morgan(it helps to log the request in the console) and body parser to parse the request body.

•	Routes: the files in this folder contains express routers.

•	Modals: the files in this folder contains modals of the orders, products, categories and order_product.

•	Controller

  	catrgoryController: contains functions which adds and gets the categories
  
  	orderController: contains a function which takes an array of product Ids and places the order
  
  	productController: it contains functions which adds the product to the database and another function gets the product of specified category.
  
  APIs:
  
  ![image](https://user-images.githubusercontent.com/90509023/221912754-89a59b0d-059d-45de-9cb4-d6f8904ea60f.png)
![image](https://user-images.githubusercontent.com/90509023/221912828-3213b893-8e1c-4e6b-943e-423456a534ce.png)
![image](https://user-images.githubusercontent.com/90509023/221912884-5423be25-42a3-400d-ac72-f0316cbed8d8.png)
![image](https://user-images.githubusercontent.com/90509023/221912929-57c5ee91-016d-4379-9f19-42e48fdd0abe.png)
![image](https://user-images.githubusercontent.com/90509023/221912981-47336cc7-ab71-4e8d-afde-df814f4df4d6.png)

