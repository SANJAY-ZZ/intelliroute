# IntelliRoute - Smart Traffic System 🚦

A modern, AI-powered traffic management system built for hackathons. IntelliRoute optimizes traffic flow, reduces congestion, and creates smarter cities through intelligent traffic light management and real-time monitoring.

## Features ✨

- **AI-driven traffic light optimization** - Smart algorithms that adapt traffic signals in real-time
- **Real-time congestion monitoring** - Live traffic data analysis with predictive insights
- **Emergency vehicle route prioritization** - Automatic green wave creation for emergency vehicles
- **Data-driven traffic insights** - Comprehensive analytics and reporting for city planners
- **Modern, responsive UI** - Built with Next.js and Tailwind CSS
- **Secure authentication** - Powered by Supabase Auth

## Tech Stack 🛠️

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (Authentication & Database)
- **Deployment**: Vercel-ready

## Getting Started 🚀

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd intelliroute
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to Settings > API
   - Copy your Project URL and anon public key

4. **Configure environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure 📁

```
intelliroute/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── dashboard/       # Protected dashboard page
│   │   ├── login/          # Login page
│   │   ├── signup/         # Signup page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Landing page
│   ├── components/         # Reusable components
│   │   └── AuthForm.tsx    # Authentication form
│   └── lib/
│       └── supabase.ts     # Supabase client
├── public/                 # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Pages & Features 📄

### Landing Page (`/`)
- Hero section with compelling messaging
- Feature highlights with animations
- Call-to-action buttons
- Fully responsive design

### Authentication (`/login`, `/signup`)
- Email/password authentication via Supabase
- Form validation and error handling
- Loading states and user feedback
- Automatic redirect to dashboard

### Dashboard (`/dashboard`)
- Protected route (requires authentication)
- Welcome message with user email
- Traffic analytics cards
- Quick action buttons
- Recent activity feed
- Logout functionality

## Supabase Setup 🔧

1. **Create a new Supabase project**
2. **Enable Authentication**
   - Go to Authentication > Settings
   - Enable email authentication
3. **Configure email templates** (optional)
   - Customize signup and password reset emails

## Deployment 🚀

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Customization 🎨

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Content
- Update text content in page components
- Modify feature descriptions in `src/app/page.tsx`
- Customize dashboard cards in `src/app/dashboard/page.tsx`

### Styling
- Global styles in `src/app/globals.css`
- Component-specific styles using Tailwind classes
- Custom animations in `tailwind.config.js`

## Contributing 🤝

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License 📄

This project is open source and available under the [MIT License](LICENSE).

## Support 💬

For questions or support:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for Hackathon Innovation**

*IntelliRoute - Optimizing Roads, Empowering Cities*
