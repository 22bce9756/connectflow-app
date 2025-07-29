# Overview

This is a full-stack e-commerce application for premium educational content built with React (frontend), Express.js (backend), PostgreSQL database, and Stripe for payments. The application follows a subscription-based model with shopping cart functionality, allowing users to purchase individual courses or subscribe to monthly plans.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS
- **Authentication**: Replit OAuth integration with session-based auth
- **Payment Processing**: Stripe React components for checkout flows

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Authentication**: Replit OAuth with Passport.js and express-session
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **Payment Processing**: Stripe SDK for subscription and payment handling
- **Database Provider**: Neon serverless PostgreSQL

## Key Components

### Database Schema (shared/schema.ts)
- **Users**: Stores user profiles with Stripe customer/subscription IDs
- **Products**: Course/content catalog with pricing and metadata
- **Categories**: Product categorization system
- **Cart Items**: Shopping cart persistence per user
- **Orders & Order Items**: Transaction history and order management
- **Subscription Plans**: Recurring payment plan definitions
- **Sessions**: Authentication session storage

### Authentication System
- **Provider**: Replit OAuth with OIDC discovery
- **Session Management**: Server-side sessions stored in PostgreSQL
- **Middleware**: Route protection with automatic redirect to login
- **User Management**: Automatic user creation/updates from OAuth claims

### Payment Integration
- **Stripe Integration**: Full payment processing with subscriptions
- **Checkout Flow**: Dedicated checkout pages for one-time and recurring payments
- **Cart System**: Persistent shopping cart with quantity management
- **Subscription Management**: Monthly/annual subscription plans

### UI Components
- **Design System**: Consistent component library based on Shadcn/ui
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Elements**: Shopping cart, product grids, subscription forms
- **Toast Notifications**: User feedback for actions and errors

## Data Flow

1. **Authentication**: Users authenticate via Replit OAuth, creating/updating user records
2. **Product Discovery**: Fetch products and categories from PostgreSQL via REST API
3. **Shopping Cart**: Add/remove items with real-time cart updates using React Query
4. **Checkout Process**: Stripe payment elements for secure payment processing
5. **Order Management**: Create order records and clear cart upon successful payment
6. **Subscription Handling**: Stripe webhooks manage subscription lifecycle events

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL serverless database
- **Payment Processing**: Stripe for all payment operations
- **Authentication**: Replit OAuth service
- **UI Components**: Radix UI primitives and Shadcn/ui component library

### Development Dependencies
- **Build Tools**: Vite for frontend bundling, esbuild for backend compilation
- **Database Tools**: Drizzle Kit for schema management and migrations
- **Type Safety**: TypeScript throughout the entire stack
- **Styling**: Tailwind CSS with PostCSS processing

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild compiles TypeScript server to `dist/index.js`
- **Database**: Drizzle manages schema migrations via `drizzle-kit push`

### Environment Configuration
- **Database**: `DATABASE_URL` for PostgreSQL connection
- **Authentication**: `REPL_ID`, `SESSION_SECRET`, `ISSUER_URL` for Replit OAuth
- **Payments**: `STRIPE_SECRET_KEY` and `VITE_STRIPE_PUBLIC_KEY` for Stripe integration
- **Domain**: `REPLIT_DOMAINS` for CORS and OAuth redirect configuration

### Development Setup
- **Hot Reload**: Vite dev server with HMR for frontend development
- **Type Checking**: Continuous TypeScript compilation checking
- **Database Sync**: Real-time schema synchronization with Drizzle
- **Environment**: Development/production environment detection via `NODE_ENV`

The architecture prioritizes type safety, developer experience, and scalability while maintaining a clean separation between frontend and backend concerns. The system is designed for easy deployment on Replit with minimal configuration required.