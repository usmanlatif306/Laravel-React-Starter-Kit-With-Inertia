# Laravel 8 Inertia With React Starter Kit

Inertia is a new approach to building classic server-driven web apps. We call it the modern monolith. Inertia allows you to create fully client-side rendered, single-page apps, without much of the complexity that comes with modern SPAs. It does this by leveraging existing server-side frameworks.

This installation contain laravel auth integration with laravel ui with react. We all have need to use user panel. This instalattion will save your time to integrate authentication with user panel. This installation has build in authentication with skydash admin panel view.

## Installation

Install PHP dependencies:

```sh
composer install
```

Setup configuration:

```sh
cp .env.example .env
```

Generate application key:

```sh
php artisan key:generate
```

Run database migrations:

```sh
php artisan migrate
```

Install node dependencies:

```sh
npm install
```

Once the packages are installed, you can use the npm run dev command to compile your assets.

```sh
npm run dev
```

Run the dev server (the output will give the address):

```sh
php artisan serve
```

You're ready to go! Visit website in your browser at http://localhost:8000, and enjoy laravel authentication with react using inertia.
