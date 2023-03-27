# Landing page

    * Endpoint path: /
    * Endpoint method: GET
    * Query parameters: None
    * Headers:
    * Authorization: Bearer token

    * Request shape (JSON):  None
    * Response shape (JSON): data from map API?

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
    "munros": [
        {
            "name": "str",
            "region": "str",
            "altitude": float
        }
    ]
    }
    ```

# Detail of a munro

    * Endpoint path: /munros/{munro_id}/
    * Endpoint method: GET
    * Query parameters: None
    * Headers:
    * Authorization: Bearer token
    * Request shape (JSON): None
    * Response shape (JSON): A single Munro

    ```json
    {
        "id": str,
        "hillname": str,
        "region": str,
        "weather": float,
        "description": str,
        "image": {
            "url": str
        },
        "meters": {
            "latitude": str,
            "longitude": str
        },
        // "reviews": str
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
        "munro": [
            {
                "user": str,
                "title": str,
                "rating": float,
                "comment": str
            }
        ]
    }
    ```

# Review form

    * Endpoint path: /munros/{munro_id}/reviews/
    * Endpoint method: PUT
    * Query parameters: None
    * Headers:
    * Authorization: Bearer token
    * Request shape (JSON):

    ```json
    {
        "comment": str,
        "rating": float
    }
    ```
    * Response shape (JSON): None

# User dashboard

    * Endpoint path: /dashboard
    * Endpoint method: GET
    * Query parameters: None
    * Headers:
    * Authorization: Bearer token
    * Request shape (JSON): None
    * Response shape (JSON): The user's dashboard data

    ```json
    {
        "username": str,
        // "map": ??,
        // "completed": bool,
        "rank": str,
        "Stats": {
            "climbed": int,
            "miles": float
        }
    }
    ```

# User munro list

    * Endpoint path: /dashboard/munros/
    * Endpoint method: GET
    * Query parameters: None
    * Headers:
    * Authorization: Bearer token
    * Request shape (JSON): None
    * Response shape (JSON): The user's dashboard data

        ```json
        {
            "completed": [
                {
                    "name": str,
                    "altitude": float,
                    "distance": float
                }
            ],

        }
        ```

<!--
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
        ``` -->

# Signup modal

    * Endpoint path: /token
    * Endpoint method: POST
    * Query parameters: None
    * Headers:
    * Authorization: Bearer token
    * Request shape (JSON):

        ```json
        {
            "name": str,
            "username": str,
            "email": str,
            "password": str
        }
        ```
    * Response shape (JSON): A new user

# Login modal

- Endpoint path: /token
- Endpoint method: POST
- Query parameters: None
- Headers:
- Authorization: Bearer token
- Request shape (JSON):

  ```json
  {
    "username": str,
    "password": str
  }
  ```

\*Response shape (JSON): None

# Logout modal

- Endpoint path: /token
- Endpoint method: DELETE
- Query parameters: None
- Headers:
- Authorization: Bearer token
- Request shape (JSON): None

\*Response shape (JSON): None
