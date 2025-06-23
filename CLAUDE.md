# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tunny-docs is a documentation website for Tunny, a Grasshopper optimization tool. Built with Deno's Fresh framework using TypeScript/TSX and Preact.

## Development Commands

- `deno task start` - Start development server with file watching
- `deno task build` - Build the project for production  
- `deno task preview` - Preview the production build
- `deno task check` - Run formatting, linting, and type checking
- `deno task manifest` - Generate Fresh manifest file

## Architecture

### Content Structure
- `docs/` - Main documentation content (current version)
- `docs_v1/` - Legacy documentation version  
- `faqs/` - FAQ content organized by categories
- Content is organized with `toc.json` files that define navigation structure

### Key Components
- `data/*.ts` - Table of contents generation from JSON configs
- `routes/[...slug].tsx` - Dynamic documentation page routing
- `utils/markdown.ts` - Markdown processing with GitHub Flavored Markdown
- `components/` - Reusable UI components (sidebars, headers, navigation)

### Content Management
- Documentation pages are markdown files with frontmatter
- Navigation structure defined in `toc.json` files in each section
- Pages support automatic prev/next navigation
- Three main content areas: docs (current), docs_v1 (legacy), faqs

### Styling
- Uses Twind (Tailwind-in-JS) for styling via `twind.config.ts`
- GitHub Flavored Markdown styling for content rendering
- Responsive design with mobile/desktop sidebar variants

### Static Assets
- `static/` contains images, icons, and other assets
- Documentation images organized by section in `static/images/`
- Technical diagrams and plots in `static/docs/`