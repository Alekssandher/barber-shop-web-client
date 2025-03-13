# Appointment Scheduling System

A comprehensive client management and appointment scheduling application built with Angular and Spring Boot.

## Overview

This application provides a user-friendly interface for managing client information and scheduling appointments. The system features:

- Client management (registration, listing, and editing)
- Calendar-based appointment scheduling
- Time selection for appointments
- Client-appointment association
- Monthly calendar view

## Tech Stack

### Frontend
- Angular
- Angular Material UI components
- RxJS for reactive programming
- DI token pattern for service management

### Backend
- Spring Boot
- RESTful API structure
- Gradle build system

## Project Structure

The application follows a modular architecture:

- **Commons Components**: Reusable UI elements like card headers, menu bars, and dialog boxes
- **Services**: API clients, dialog managers, and notification services
- **Scheduling Module**: Calendar components and scheduling interfaces
- **Client Module**: Client management components

## Setup Instructions

### Prerequisites
- Node.js (v16+)
- Angular CLI
- Java JDK 17+
- Git

### Installation

1. Clone the main repository:
   ```
   git clone https://github.com/your-username/appointment-scheduler.git
   cd appointment-scheduler
   ```

2. Install the backend submodule:
   ```
   git submodule init
   git submodule update
   ```

3. Install frontend dependencies:
   ```
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   ./gradlew bootRun
   ```
   The API will be available at http://localhost:8080/

2. In a separate terminal, start the frontend application:
   ```
   ng serve
   ```
   The application will be available at http://localhost:4200/

### Backend Configuration

For detailed instructions on how to configure the backend, please refer to:
https://github.com/Alekssandher/barber-shop-api

## Key Features

### Client Management
- Add new clients with name, email, and phone
- View list of all clients
- Update existing client information
- Delete clients

### Scheduling
- Interactive calendar interface
- Time picker for appointment start/end times
- Client selection for appointments
- Daily appointment listing
- Delete appointments with confirmation dialog

## API Integration

The application communicates with the backend through RESTful API endpoints:

- `/clients` - Client management endpoints
- `/schedule` - Appointment scheduling endpoints

## Development Notes

- The application uses Angular Material for UI components
- Service interfaces are provided through DI tokens
- Reactive forms and template-driven forms are used
- Dialog and snackbar managers provide user notifications
- Environment configuration for API URLs

## License
This project is licensed under the MIT License - see the LICENSE file for details.
