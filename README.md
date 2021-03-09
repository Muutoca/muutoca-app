# Muutoca!

<p align="center">
  <img src="muutoca.png">
</p>

Muutoca is a food delivery platform built with Python and ReactJS. We are using Django to build the backend that will expose an API and NextJS to build the frontend application.

The purpose of this project is to put into practice our knowledge acquired about React and Next. **DO NOT USE IN PRODUCTION** (yet).

# Tech

### Backend

- Django
- Django Rest Framework
- Djoser

### Frontend

- React
- Next
- Axios
- Reactstrap

The file explorer is accessible using the button in left corner of the navigation bar. You can create a new file by clicking the **New file** button in the file explorer. You can also create folders by clicking the **New folder** button.

# Run local

> Let's assume you are using Linux, if not, use it. ;)

First, clone this repository and then enter it:

```bash
~$ git clone https://github.com/Muutoca/muutoca-web.git
~$ cd muutoca-web
```

### Backend

Create a virtual environment, activate it:

```bash
~/muutoca-web$ python -m venv venv
~/muutoca-web$ source venv/bin/activate
```

Now enter in the _backend_ directory and install the dependencies

```bash
~/muutoca-web$ cd backend
~/muutoca-web/backend$ pip install -r requirements.txt
```

Run the database migrations:

```bash
~/muutoca-web/backend$ python manage.py migrate
```

Create a Django super user:

```bash
~/muutoca-web/backend$ python manage.py createsuperuser
```

And run the backend server:

```bash
~/muutoca-web/backend$ python manage.py runserver
```

Now you can access the backend on the address: _http://localhost:8000_

### Frontend

First, enter in to frontend directory:

```bash
~/muutoca-web$ cd frontend
```

So, run the comand:

```bash
~/muutoca-web/frontend$ yarn install
```

When is done, run the comand:

```bash
~/muutoca-web/frontend$ yarn dev
```

That's all. =D

You can access the aplication on the address: http://localhost:3000

# Run local (docker)

> Coming soon

# Contribute

> Coming soon
