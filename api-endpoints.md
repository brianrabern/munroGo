
# Landing page

    * Endpoint path: /
    * Endpoint method: GET
    * Query parameters: None
    * Headers:
    * Authorization: Bearer token

    * Request shape (JSON): None
    * Response shape (JSON): A list of images for the carousel?

    ```json
    {
    “images”: []
    }
    ```

# List of munros

    * Endpoint path: /munros/
    * Endpoint method: GET
    * Query parameters: None
    * Headers:
    * Authorization: Bearer token

    * Request shape (JSON): None
    * Response shape (JSON): A list of Munros

    ```json
    {
    "munros": [{munro1}, {munro2},...]
    }
    ```

# Map of munros

    * Endpoint path: /map/
    * Endpoint method: GET
    * Query parameters: None
    * Headers:
    * Authorization: Bearer token

    * Request shape (JSON):  None
    * Response shape (JSON): data from map API?

# Detail of a munro

    * Endpoint path: /munros/{munro_id}/
    * Endpoint method: GET
    * Query parameters: None
    * Headers:
    * Authorization: Bearer token
    * Request shape (JSON): None
    * Response shape (JSON): A single Munro

    ```json
    {“id”: 0
    “hillname”: "string"
    “region”: "string"
    “meters”: 0
        “latitude”: "string"
        “longitude”: "string"
    }
    ```

# Reviews of a munro

    * Endpoint path: /munros/{munro_id}/reviews/
    * Endpoint method: GET
    * Query parameters: None
    * Headers:
    * Authorization: Bearer token
    * Request shape (JSON): None
    * Response shape (JSON): A list of reviews for the Munro

    ```json
    {
    {“munro_id”: [review1, review2,...]}
    }
    ```

# Review form

    * Endpoint path: /munros/{munro_id}/reviews/
    * Endpoint method: POST
    * Query parameters: None
    * Headers:
    * Authorization: Bearer token
    * Request shape (JSON):

    ```json
    {
    “comment”: "string",
    “rating”: 0,
    }
    ```
    * Response shape (JSON): None

# User dashboard

    * Endpoint path: /users/{user_id}/dashboard/
    * Endpoint method: GET
    * Query parameters: None
    * Headers:
    * Authorization: Bearer token
    * Request shape (JSON): None
    * Response shape (JSON): The user's dashboard data

    ```json
    {
    “user_id”: 0
    “user_name”: "string"
    “completed”: true
    “Stats”: ???
    }
    ```

# User munro list

    * Endpoint path: /users/{user_id}/munros/
    * Endpoint method: GET
    * Query parameters: None
    * Headers:
    * Authorization: Bearer token
    * Request shape (JSON): None
    * Response shape (JSON): The user's dashboard data

        ```json
        {
        "munros_completed": [munro1, munro2,...]
        “rank”: 0
        }
        ```

# Journal entries list

    * Endpoint path: /users/{user_id}/journal/
    * Endpoint method: GET
    * Query parameters: None
    * Headers:
    * Authorization: Bearer token
    * Request shape (JSON): None
    * Response shape (JSON): The user's journal entries

        ```json
        {
        {“user_id”: [entry1, entry2,...]}
        }
        ```

# Journal add entry

    * Endpoint path: /users/{user_id}/journal/
    * Endpoint method: POST
    * Query parameters: None
    * Headers:
    * Authorization: Bearer token
    * Request shape (JSON):

        ```json
        {
            “title”: "string",
            “date”: "string",
            “body”: "string",
        }
    ```
    *Response shape (JSON): None

# Journal entry detail

    * Endpoint path: /users/{user_id}/journal/{entry_id}/
    * Endpoint method: GET
    * Query parameters: None
    * Headers:
    * Authorization: Bearer token
    * Request shape (JSON): None
    * Response shape (JSON):

        ```json
        {
            “title”: "string",
            “date”: "string",
            “body”: "string",
        }
        ```

# Signup modal

    * Endpoint path: /signup
    * Endpoint method: POST
    * Query parameters: None
    * Headers:
    * Authorization: Bearer token
    * Request shape (JSON):

        ```json
        {
            “username”: "string",
            “email”: "string",
            “password”: "string",
        }
        ```
    * Response shape (JSON): A new user

# Login

* Endpoint path: /login
* Endpoint method: POST
* Query parameters: None
* Headers:
* Authorization: Bearer token
* Request shape (JSON):

    ```json
    {
    “username”: "string",
    “password”: "string",
    }
    ```

*Response shape (JSON): None

# Logout

* Endpoint path: /token
* Endpoint method: DELETE
* Query parameters: None
* Headers:
* Authorization: Bearer token
* Request shape (JSON):
*Response shape (JSON): None
