## How to start coding?

Fork the project, and after clone

```
git clone -b desenvolvimento URL_DO_REPOSITORIO
```


## Starting the project 

First go to the "my-monitor" folder, and install the dependencies:

```
npm install
```

After, create a file in the "my-monitor" folder called ".env.local" and place this inside

```
NEXT_PUBLIC_URL_LOGIN=https://to-do-mountains.onrender.com/auth/login
NEXT_PUBLIC_URL_REGISTER=https://to-do-mountains.onrender.com/auth/register
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=TimaMym2023@
```
After, run the development server:

```bash
npm run dev
```
