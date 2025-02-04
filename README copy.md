# Local Development Environment
# Local Development Setup Idea

## Purpose
A standardized development environment setup for collaborative work, allowing team members to:
- Set up identical local development environments
- Test email functionality in isolation
- Share a common configuration for development tools
- Ensure consistent security practices

## Core Features

### 1. Email Infrastructure
- **SMTP Server (Postfix)**
  - Port 587 with STARTTLS
  - SASL authentication
  - Local domain handling
- **IMAP Server (Dovecot)**
  - Ports 993 (SSL/TLS) and 143 (STARTTLS)
  - Secure authentication
  - Maildir format
- **Email Client (Neomutt)**
  - Terminal-based email client
  - Custom configurations
  - Local domain integration

### 2. Security
- Local SSL/TLS certificates
- Secure email communication
- SASL authentication
- Encrypted connections

### 3. Development Environment
- Local domain: local-dev.test
- Development-friendly email setup
- Isolated testing environment
- Custom SSL certificates

## Services
- Email (Postfix/Dovecot)
- Web Server (Nginx)
- SSL Certificate Management

## Documentation
Detailed configuration guides in the `docs/` directory:
- [Email Setup](docs/email-setup.md) - Complete email infrastructure configuration
- More documentation to be added...

## Requirements
- Ubuntu/Debian-based system
- Postfix
- Dovecot
- Neomutt
- OpenSSL for certificates

## Future Ideas
- [ ] Add automation scripts for quick setup
- [ ] Include additional development tools
- [ ] Document system requirements in detail
- [ ] Add backup and restore procedures
- [ ] Include monitoring and logging setup
- [ ] Document troubleshooting guides
- [ ] Add Docker containerization option
- [ ] Create setup verification scripts

## Team Collaboration
This setup ensures all team members can:
- Test email features in isolation
- Share identical development environments
- Use consistent security practices
- Easily replicate the setup on new machines

## Purpose
A comprehensive setup for a development laptop environment, providing a complete local development infrastructure with email capabilities and secure communications.

## Core Features

### 1. Email Infrastructure
- **SMTP Server (Postfix)**
  - Port 587 with STARTTLS
  - SASL authentication
  - Local domain handling
- **IMAP Server (Dovecot)**
  - Ports 993 (SSL/TLS) and 143 (STARTTLS)
  - Secure authentication
  - Maildir format
- **Email Client (Neomutt)**
  - Terminal-based email client
  - Custom configurations
  - Local domain integration

### 2. Security
- Local SSL/TLS certificates
- Secure email communication
- SASL authentication
- Encrypted connections

### 3. Development Environment
- Local domain: local-dev.test
- Development-friendly email setup
- Isolated testing environment
- Custom SSL certificates

## Documentation
Detailed configuration guides are available in the `docs/` directory:
- [Email Setup](docs/email-setup.md) - Complete email infrastructure configuration
- More documentation to be added...

## Requirements
- Ubuntu/Debian-based system
- Postfix
- Dovecot
- Neomutt
- OpenSSL for certificates

## Future Ideas
- [ ] Add automation scripts for setup
- [ ] Include additional development tools
- [ ] Document system requirements in detail
- [ ] Add backup and restore procedures
- [ ] Include monitoring and logging setup
- [ ] Document troubleshooting guides

## Contributing
Feel free to contribute ideas, improvements, or report issues.

## License
[Add your preferred license]# Local Development Setup Idea

## Purpose
A comprehensive setup for a development laptop environment, providing a complete local development infrastructure with email capabilities and secure communications.

## Core Features

### 1. Email Infrastructure
- **SMTP Server (Postfix)**
  - Port 587 with STARTTLS
  - SASL authentication
  - Local domain handling
- **IMAP Server (Dovecot)**
  - Ports 993 (SSL/TLS) and 143 (STARTTLS)
  - Secure authentication
  - Maildir format
- **Email Client (Neomutt)**
  - Terminal-based email client
  - Custom configurations
  - Local domain integration

### 2. Security
- Local SSL/TLS certificates
- Secure email communication
- SASL authentication
- Encrypted connections

### 3. Development Environment
- Local domain: local-dev.test
- Development-friendly email setup
- Isolated testing environment
- Custom SSL certificates

## Documentation
Detailed configuration guides are available in the `docs/` directory:
- [Email Setup](docs/email-setup.md) - Complete email infrastructure configuration
- More documentation to be added...

## Requirements
- Ubuntu/Debian-based system
- Postfix
- Dovecot
- Neomutt
- OpenSSL for certificates

## Future Ideas
- [ ] Add automation scripts for setup
- [ ] Include additional development tools
- [ ] Document system requirements in detail
- [ ] Add backup and restore procedures
- [ ] Include monitoring and logging setup
- [ ] Document troubleshooting guides


# This repository contains the development environment setup with the following services:

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
