### Connect to MySQL DB server using Node.js

#### Step-1: Clone this repository

```bash
git clone url
cd mysql-express-api
```

#### Step-2: Create .env file in the same directory and add following data

```
MYSQL_USERNAME    =     your_mysql_db_username
MYSQL_PASSWORD    =     your_mysql_db_password
MYSQL_HOST        =     your_hostname
MYSQL_DATABASE    =     your_database_name
MYSQL_PORT        =     port_number_for_api_server_(ex:5000)
```

#### Step-3: Install node packages

```nodejs
npm install
```

#### Step-4: Start Node API server

```nodejs
npm run start
```

#### Note: If you are facing authorization issues, please run below queries in mysql workbench. (Add as per your details accordingly)

```
ALTER USER 'USERNAME'@'<localhost>|<CONNECTION_URL>' IDENTIFIED WITH mysql_native_password BY '<PASSWORD>';

flush privileges;
```
