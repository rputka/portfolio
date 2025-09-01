# Futuristic Portfolio Website

A modern, futuristic portfolio website built with cutting-edge technologies and featuring a stunning dark theme with cyberpunk aesthetics.

## ✨ Features

- **Modern Design**: Futuristic UI with dark theme, glass morphism effects, and neon glows
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and hover effects using Framer Motion
- **Performance**: Built with Next.js 14 for optimal performance and SEO
- **TypeScript**: Fully typed for better development experience
- **Contact Form**: Functional contact form ready for integration with email services

## 🚀 Sections

- **Hero**: Eye-catching introduction with animated background elements
- **About**: Personal information, education, location, and interests
- **Projects**: Showcase of featured and notable projects with GitHub links
- **Work**: Professional experience timeline with achievements and skills
- **Contact**: Contact form and social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Fonts**: Inter (Google Fonts)

## 🏃‍♂️ Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `components/Hero.tsx` - Your name and title
- `components/About.tsx` - Personal details, education, interests
- `components/Work.tsx` - Work experience and skills
- `components/Projects.tsx` - Your projects and GitHub links
- `components/Contact.tsx` - Contact information

### Styling
- **Colors**: Modify `tailwind.config.js` to change the color scheme
- **Animations**: Add custom animations in the CSS or Tailwind config
- **Layout**: Adjust component layouts and spacing as needed

### Email Integration
To enable the contact form, integrate with one of these services:
- [EmailJS](https://www.emailjs.com/)
- [Formspree](https://formspree.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/)

Update the `handleSubmit` function in `components/Contact.tsx` with your chosen service.

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

This project can be deployed on any platform that supports Next.js:

- **Vercel** (Recommended): `vercel --prod`
- **Netlify**: Connect your GitHub repository
- **AWS/GCP/Azure**: Use their respective deployment guides

## 📄 Resume

Place your resume file as `public/resume.pdf` to enable the download functionality.

## 🔧 Environment Variables

Create a `.env.local` file for any environment variables you need:

```env
# Email service configuration (if using EmailJS)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📱 Mobile Optimization

The website is fully responsive and optimized for:
- Mobile phones (320px and up)
- Tablets (768px and up)
- Desktop (1024px and up)
- Large screens (1440px and up)

## 🎯 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **SEO Ready**: Meta tags and structured data included
- **Progressive Enhancement**: Works without JavaScript

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, pull requests are welcome!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ and cutting-edge web technologies**