# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js and Supabase starter kit with authentication features. It's built using the App Router, TypeScript, and includes a complete authentication flow with password-based auth.

## Development Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Architecture

### Authentication Flow
- Uses Supabase SSR package for cookie-based authentication
- Client-side auth: `lib/supabase/client.ts` for browser components
- Server-side auth: `lib/supabase/server.ts` for Server Components/Actions
- Middleware: `middleware.ts` handles session refresh across all routes

### UI Components
- Built with shadcn/ui (New York style) and Tailwind CSS
- Component library located in `components/ui/`
- Custom components in `components/`
- Uses Lucide React for icons

### Route Structure
- Public routes: Authentication pages in `app/auth/`
- Protected routes: Content in `app/protected/` with shared layout
- Protected layout includes navigation and footer

### Environment Setup
- Requires `.env.local` with Supabase credentials:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Key Patterns
- Always create new Supabase server clients within functions (no globals)
- Uses TypeScript path aliases (`@/*` maps to root)
- Theme switching with next-themes
- Responsive design with Tailwind CSS classes