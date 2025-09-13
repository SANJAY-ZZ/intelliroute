# IntelliRoute - Smart Traffic Management System 🚦

A modern, AI-powered traffic management platform built with Next.js, Supabase, and Tailwind CSS for hackathon innovation.

## 🚀 Features

- **Landing Page**: Modern hero section with animated features showcase
- **Authentication**: Secure login/signup with Supabase Auth
- **Dashboard**: Interactive traffic management dashboard
- **Responsive Design**: Fully optimized for mobile and desktop
- **Modern UI**: Hackathon-ready design with animations and emojis

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Backend**: Supabase (Authentication + Database)
- **Deployment**: Vercel-ready

## 📋 Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier available)

## 🚀 Quick Setup

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone <your-repo-url>
cd intelliroute

# Install dependencies
npm install
```

### 2. Set Up Supabase

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Create a new project
3. Go to Settings → API
4. Copy your Project URL and anon/public key

### 3. Environment Configuration

```bash
# Copy the example environment file
cp env.example .env.local

# Edit .env.local with your Supabase credentials
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🎨 Customization

### Colors
The app uses a custom primary color palette defined in `tailwind.config.js`. You can modify the colors in the `primary` object.

### Animations
Custom animations are defined in `src/app/globals.css`. Key animations include:
- `floating`: Gentle up-and-down movement
- `pulse-glow`: Glowing effect for important elements
- `fade-in-up`: Smooth entrance animations

### Components
- `src/app/page.tsx`: Landing page
- `src/components/AuthForm.tsx`: Authentication form
- `src/app/dashboard/page.tsx`: User dashboard
- `src/lib/supabase.ts`: Supabase client configuration

## 📱 Pages Overview

### Landing Page (`/`)
- Hero section with animated background
- Feature showcase with hover effects
- Call-to-action sections
- Fully responsive navigation

### Authentication (`/login`, `/signup`)
- Clean, modern form design
- Real-time validation
- Smooth animations
- Automatic redirects

### Dashboard (`/dashboard`)
- Protected route (requires authentication)
- Traffic analytics cards
- Quick action buttons
- Recent activity feed
- User welcome message

## 🔐 Authentication Flow

1. User visits landing page
2. Clicks "Get Started" → redirects to signup
3. Creates account → email confirmation (if enabled)
4. Signs in → redirects to dashboard
5. Dashboard shows personalized content
6. Logout → redirects to landing page

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

```
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_supabase_anon_key
```

## 🎯 Hackathon Features

- **Modern Design**: Glass morphism effects, smooth animations
- **Emoji Integration**: Fun, engaging visual elements
- **Responsive**: Works perfectly on all devices
- **Fast Performance**: Optimized for speed
- **Easy Setup**: Quick deployment ready

## 🐛 Troubleshooting

### Common Issues

1. **Supabase Connection Error**
   - Verify your environment variables
   - Check if your Supabase project is active

2. **Authentication Not Working**
   - Ensure email confirmation is disabled in Supabase (for demo)
   - Check browser console for errors

3. **Styling Issues**
   - Run `npm run build` to check for build errors
   - Clear browser cache

## 📄 License

This project is built for hackathon purposes. Feel free to use and modify as needed.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Built with ❤️ for Smart City Innovation**
