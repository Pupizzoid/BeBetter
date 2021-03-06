define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/registration",
    "title": "Register new user",
    "name": "PostAuth",
    "group": "Auth",
    "parameter": {
      "examples": [
        {
          "title": "Information in body",
          "content": "{ \n\"login\": \"Developer\" , \n\"email\":\"developer@com.ua\", \n\"gender\": \"male\",\n \"password\": \"password\" \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>{ &quot;message&quot;: &quot;string&quot; }</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error-Response:",
            "description": "<p>{&quot;message&quot;: &quot;string&quot;}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/services/authService.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "Login into system",
    "name": "PostAuth",
    "group": "Auth",
    "parameter": {
      "examples": [
        {
          "title": "Information in body",
          "content": "{ \n\"login\": \"Developer\" ,\n \"password\": \"password\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>{ &quot;jwt&quot;: &quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDIwODAwLCJodHRwOi8vdG9wdGFsLmNvbS9qd3RfY2xhaW1zL2lzX2FkbWluIjp0cnVl CJjb21wYW55IjoiVG9wdGFsIiwiYXdlc29tZSI6dHJ1ZX0.yRQYnWzskCZUxPwaQupWkiUzKELZ49eM7oWxAQK_ZXw&quot; }</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error-Response:",
            "description": "<p>{&quot;message&quot;: &quot;string&quot;}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/services/authService.js",
    "groupTitle": "Auth"
  },
  {
    "type": "patch",
    "url": "/api/goals/{id}",
    "title": "Update progress user's Goal by id",
    "name": "GetGoal",
    "group": "Goals",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>goal id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "AuthHeader",
            "description": "<p>authorization jwt token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"id\": 1,\n\t\"title\": \"Goal\",\n\t\"description\": \"do goal\",\n\t\"achievements\": [\"image's path\"],\n\t\"completed\": false,\n\t\"dateCreated\": \"2020-12-20\",\n\t\"dateStarted\": \"2020-12-20\",\n\t\"progress\": 2,\n\t\"term\": 90,\n\t\"dateLastProof\": \"2020-12-22\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error-Response:",
            "description": "<p>{&quot;message&quot;: &quot;string&quot;}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/services/dataService.js",
    "groupTitle": "Goals"
  },
  {
    "type": "get",
    "url": "/api/goals",
    "title": "Get user's Goals",
    "name": "GetGoals",
    "group": "Goals",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "AuthHeader",
            "description": "<p>authorization jwt token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n\t\"id\": 1,\n\t\"title\": \"Goal\",\n\t\"description\": \"do goal\",\n\t\"achievements\": [\"image's path\"],\n\t\"completed\": false,\n\t\"dateCreated\": \"2020-12-20\",\n\t\"dateStarted\": \"2020-12-20\",\n\t\"progress\": 2,\n\t\"term\": 90,\n\t\"dateLastProof\": \"2020-12-22\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error-Response:",
            "description": "<p>{&quot;message&quot;: &quot;string&quot;}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/services/dataService.js",
    "groupTitle": "Goals"
  },
  {
    "type": "post",
    "url": "/api/goals",
    "title": "Create goal",
    "name": "PostGoal",
    "group": "Goals",
    "parameter": {
      "examples": [
        {
          "title": "Information in body",
          "content": "{\n \"tile\": \"Study\",\n\t\"description\": \"do goal\",\n\t\"dateStarted\": \"2020-12-22\",\n\t\"term\": 90\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>goal id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "AuthHeader",
            "description": "<p>authorization jwt token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"id\": 1,\n\t\"title\": \"Goal\",\n\t\"description\": \"do goal\",\n\t\"achievements\": [\"image's path\"],\n\t\"completed\": false,\n\t\"dateCreated\":\"Dec 22, 2020, 1:37:53 PM\"\n\t\"dateStarted\":\"Dec 22, 2020, 12:00:00 AM\"\n\t\"progress\": 0,\n\t\"term\": 90,\n\t\"dateLastProof\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error-Response:",
            "description": "<p>{&quot;message&quot;: &quot;string&quot;}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/services/dataService.js",
    "groupTitle": "Goals"
  },
  {
    "type": "delete",
    "url": "/users/me",
    "title": "Delete User profile",
    "name": "DeleteUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "No",
            "description": "<p>parameters</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "AuthHeader",
            "description": "<p>authorization jwt token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response:",
            "description": "<p>{&quot;message&quot;: &quot;string&quot;}</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error-Response:",
            "description": "<p>{&quot;message&quot;: &quot;string&quot;}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/services/dataService.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/goals/{id}",
    "title": "Get user's Goal by id",
    "name": "GetUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>goal id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "AuthHeader",
            "description": "<p>authorization jwt token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"id\": 1,\n\t\"title\": \"Goal\",\n\t\"description\": \"do goal\",\n\t\"achievements\": [\"image's path\"],\n\t\"completed\": false,\n\t\"dateCreated\": \"2020-12-20\",\n\t\"dateStarted\": \"2020-12-20\",\n\t\"progress\": 2,\n\t\"term\": 90,\n\t\"dateLastProof\": \"2020-12-22\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error-Response:",
            "description": "<p>{&quot;message&quot;: &quot;string&quot;}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/services/dataService.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/me",
    "title": "Get User information",
    "name": "GetUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "No",
            "description": "<p>parameters</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "AuthHeader",
            "description": "<p>authorization jwt token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"id\":1,\n\"login\":\"nick\",\n\"email\":\"123@123.123\",\n\"gender\":\"male\",\n\"points\":0,\n\"subscription\":0,\n\"followers\":0,\n\"achievements\":[]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error-Response:",
            "description": "<p>{&quot;message&quot;: &quot;string&quot;}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/services/dataService.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/{id}",
    "title": "Get User information by id",
    "name": "GetUserById",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>user id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "AuthHeader",
            "description": "<p>authorization jwt token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"id\":1,\n\"login\":\"nick\",\n\"email\":\"123@123.123\",\n\"gender\":\"male\",\n\"points\":0,\n\"subscription\":0,\n\"followers\":0,\n\"achievements\":[]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error-Response:",
            "description": "<p>{&quot;message&quot;: &quot;string&quot;}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/services/dataService.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get information about all users",
    "name": "GetUsers",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "No",
            "description": "<p>parameters</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "AuthHeader",
            "description": "<p>authorization jwt token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n\"id\":1,\n\"login\":\"nick\",\n\"email\":\"123@123.123\",\n\"gender\":\"male\",\n\"points\":0,\n\"subscription\":0,\n\"followers\":0,\n\"achievements\":[]\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error-Response:",
            "description": "<p>{&quot;message&quot;: &quot;string&quot;}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/services/dataService.js",
    "groupTitle": "Users"
  }
] });
