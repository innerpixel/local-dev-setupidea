# Local Development Environment

This repository contains the development environment setup with the following services:

## Services

1. **Web Service**
   - Static content served via Nginx
   - Location: `/html`

2. **API Service**
   - Main application API
   - Port: 3000
   - Location: `/api`

3. **Auth Service**
   - User authentication and management
   - Port: 3001
   - Location: `/auth`

4. **Mail Service**
   - Local mail server (Postfix)
   - SMTP, IMAP support
   - Integrated with user management

## Setup

1. Install dependencies:
   ```bash
   cd api && npm install
   cd ../auth && npm install
   ```

2. Configure environment:
   - Copy `.env.example` to `.env` in both api and auth directories
   - Update environment variables as needed

3. Start services:
   ```bash
   # Start API service
   cd api && npm start

   # Start Auth service
   cd auth && npm start
   ```

## Development

- API documentation available in `/docs`
- Frontend static files in `/html`
- Mail configuration in `/mail`

## Security

- SSL certificates required for HTTPS
- JWT-based authentication
- Email verification system
- Role-based access control
