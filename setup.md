# Quick Setup Guide 🚀

## 1. Install Dependencies
```bash
npm install
```

## 2. Set up Supabase
1. Go to [supabase.com](https://supabase.com) and create a new project
2. In your Supabase dashboard, go to **Settings > API**
3. Copy your **Project URL** and **anon public key**

## 3. Configure Environment
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## 4. Enable Authentication
In your Supabase dashboard:
1. Go to **Authentication > Settings**
2. Make sure **Email** is enabled under **Auth Providers**
3. Optionally configure **Site URL** to `http://localhost:3000` for development

## 5. Run the Development Server
```bash
npm run dev
```

## 6. Open Your Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎉 You're Ready!
- **Landing Page**: Beautiful hero section with features
- **Sign Up**: Create a new account
- **Login**: Access your dashboard
- **Dashboard**: Protected area with traffic management interface

## Troubleshooting
- Make sure your Supabase project is active
- Check that environment variables are correctly set
- Ensure you're using Node.js 18 or higher
- Clear browser cache if you see authentication issues

## Next Steps
- Customize the design in `tailwind.config.js`
- Add more features to the dashboard
- Deploy to Vercel for production
