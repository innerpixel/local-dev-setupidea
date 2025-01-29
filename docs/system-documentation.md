# System Documentation - Local Development Environment

## System Overview

### Architecture
The system is composed of several microservices:

1. **Web Frontend**
   - Served by Nginx on ports 80/443
   - SSL/TLS enabled
   - Static files in `/var/www/local-dev.test/html`
   - HTTPS enforced with automatic HTTP to HTTPS redirection

2. **Authentication Service**
   - Port: 3001
   - Location: `/var/www/local-dev.test/auth`
   - Handles:
     - User registration
     - Authentication
     - Email verification
     - Password management

3. **API Service**
   - Port: 3000
   - Location: `/var/www/local-dev.test/api`
   - Handles business logic and data management

4. **Mail Service**
   - Postfix for SMTP
     - Port 25 (SMTP)
     - Port 465 (SMTPS)
     - Port 587 (Submission)
   - IMAP access
     - Port 143 (IMAP)
     - Port 993 (IMAPS)
   - Local mail delivery only (loopback interface)
   - Maildir format for mail storage

## Service Details

### 1. Nginx Configuration
```nginx
# Main site (local-dev.test)
- HTTP to HTTPS redirection
- Static file serving
- API proxy
- SSL/TLS with modern cipher configuration

# Auth subdomain (auth.local-dev.test)
- Dedicated authentication service
- Enhanced security headers
- CORS configuration
- Separate logging
```

### 2. Authentication Service
- **Framework**: Express.js
- **Database**: MongoDB
- **Security Features**:
  - JWT-based authentication
  - Password hashing (bcrypt)
  - Email verification
  - Rate limiting
  - CORS protection
  - Helmet security headers

**API Endpoints**:
- `POST /register` - New user registration
- `POST /login` - User authentication
- `GET /me` - Current user profile
- `POST /verify-email` - Email verification
- `POST /reset-password` - Password reset

### 3. API Service
- **Framework**: Express.js
- **Database**: MongoDB
- **Protected Routes**:
  - `GET /users` - List users (admin only)
  - `GET /users/:id` - Get user details
  - `PUT /users/:id` - Update user
  - `DELETE /users/:id` - Delete user

### 4. Mail System
- **MTA**: Postfix
- **Configuration**:
  ```
  mydomain = local-dev.test
  myhostname = local-dev.test
  inet_interfaces = loopback-only
  home_mailbox = Maildir/
  ```
- **Security**:
  - TLS enabled
  - SASL authentication
  - Modern TLS protocols only

## Development Environment

### Directory Structure
```
/var/www/local-dev.test/
├── api/                 # Main API service
│   ├── src/            # Source code
│   ├── tests/          # Test files
│   └── config/         # Configuration
├── auth/               # Authentication service
│   ├── src/
│   ├── config/
│   └── logs/
├── html/               # Static web files
├── mail/               # Mail configuration
├── docs/               # Documentation
└── www/               # Web root
```

### Configuration Files
1. **API Service**
   - `.env` - Environment variables
   - `package.json` - Dependencies
   - `config/` - Service configuration

2. **Auth Service**
   - `.env` - Environment variables
   - `package.json` - Dependencies
   - `config/` - Service configuration

3. **Nginx**
   - `local-dev.conf` - Main site configuration
   - `local-dev-auth.conf` - Auth site configuration

### Security Measures
1. **SSL/TLS**
   - Modern cipher configuration
   - TLS 1.2/1.3 only
   - Strong cipher preferences

2. **Application Security**
   - JWT authentication
   - Password hashing
   - Email verification
   - Rate limiting
   - CORS protection
   - Security headers

3. **Mail Security**
   - Local-only mail delivery
   - TLS encryption
   - SASL authentication

## Testing Environment

### Available Test Users
- User: zero-innerpizel (configured for neomutt)

### Test URLs
- Main site: https://local-dev.test
- Auth service: https://auth.local-dev.test
- API service: https://api.local-dev.test

### Mail Testing
- Local mail delivery
- Mail client: neomutt
- Mail storage: Maildir format

### SSL Certificates
- Self-signed certificates for development
- Located in:
  - `/etc/nginx/ssl/` (web services)
  - `/etc/postfix/ssl/` (mail service)

## Deployment Notes

### Prerequisites
1. Node.js and npm
2. MongoDB
3. Nginx
4. Postfix
5. SSL certificates

### Service Dependencies
- MongoDB for data storage
- Postfix for email functionality
- Nginx for web serving and reverse proxy

### Environment Variables
Required environment variables for each service:
1. **API Service**
   - `PORT`
   - `MONGODB_URI`
   - `JWT_SECRET`

2. **Auth Service**
   - `PORT`
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `SMTP_HOST`
   - `SMTP_PORT`

## Monitoring and Logging

### Log Locations
1. **Nginx Logs**
   - Access logs: `/var/log/nginx/access.log`
   - Error logs: `/var/log/nginx/error.log`

2. **Auth Service Logs**
   - `/var/www/local-dev.test/auth/logs/`

3. **API Service Logs**
   - `/var/www/local-dev.test/api/logs/`

4. **Mail Logs**
   - Postfix logs in system mail log

### Health Checks
- API service: `GET /health`
- Auth service: `GET /health`
- Mail: SMTP port checks

## Backup and Maintenance

### Backup Locations
1. MongoDB data: `/var/www/local-dev.test/api/data/`
2. Mail data: User Maildir directories
3. Configuration files: `/etc/nginx/`, `/etc/postfix/`

### Regular Maintenance Tasks
1. Log rotation
2. SSL certificate renewal
3. Database backups
4. Security updates

## Development Workflow

### Local Development
1. Clone repository
2. Install dependencies
3. Configure environment variables
4. Start services
5. Access via https://local-dev.test

### Testing
1. Unit tests in `/api/tests/`
2. API tests using Postman/curl
3. Mail testing with local mail client

### Debugging
1. Service logs in respective `/logs` directories
2. Nginx error logs
3. Mail logs in system mail log
