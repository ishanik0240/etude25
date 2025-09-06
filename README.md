# StudySphere - Personalized Learning Platform

StudySphere is a student-focused learning app that provides a personalized and inclusive educational experience. Built with Next.js and designed for accessibility, it offers multiple learning methods and community support to make education effective for every student.

## Features

### 🎓 Core Learning Features
- **Personalized Dashboard** - Curated course recommendations and progress tracking
- **Multiple Learning Methods** - AI-generated notes, interactive flashcards, practice quizzes, and audio narration
- **Course Management** - Easy enrollment and structured learning paths
- **Progress Analytics** - Track learning progress and performance metrics

### ♿ Inclusivity & Accessibility
- **Special Needs Support** - Tailored courses for Autism, Down Syndrome, and Dyslexia
- **Audio Narration** - Professional voice-over for all content
- **Visual Learning Aids** - Enhanced visual elements and structured layouts
- **Adjustable Interface** - Customizable text sizes, playback speeds, and navigation options
- **Screen Reader Support** - Full compatibility with assistive technologies

### 👥 Community & Support
- **Ticket System** - Direct communication with subject-specific teachers
- **Expert Educators** - Access to qualified teachers and specialists
- **Family Dashboard** - Parent/guardian progress monitoring (Family Plan)
- **Community Forum** - Connect with other learners and families

### 💰 Flexible Pricing
- **Free Explorer** - Try StudySphere with limited access
- **Student Plus** - Full access for individual learners ($9.99/month)
- **Family Plan** - Up to 4 accounts with family features ($19.99/month)
- **School Edition** - Custom solutions for educational institutions

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd StudySphere
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── auth/                     # Authentication pages
│   │   ├── login/               # Login page
│   │   └── signup/              # Registration page
│   ├── courses/                 # Course-related pages
│   │   ├── create/              # Course creation
│   │   ├── [id]/               # Individual course pages
│   │   └── page.tsx            # My courses overview
│   ├── dashboard/               # Main dashboard
│   ├── inclusive-learning/      # Accessibility features
│   ├── onboarding/             # User onboarding flow
│   ├── pricing/                # Pricing plans
│   ├── support/                # Support system
│   │   └── tickets/            # Ticket management
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Landing page
├── components/                  # Reusable UI components
│   └── ui/                     # Base UI components
│       ├── button.tsx
│       └── input.tsx
├── lib/                        # Utility functions
│   └── utils.ts
└── types/                      # TypeScript type definitions
```

## Key Pages & Features

### Authentication Flow
- **Landing Page** (`/`) - Welcome screen with sign up/login options
- **Login** (`/auth/login`) - User authentication with social login options
- **Signup** (`/auth/signup`) - User registration with validation
- **Onboarding** (`/onboarding`) - Profile creation and preferences setup

### Learning Experience
- **Dashboard** (`/dashboard`) - Course exploration and recommendations
- **My Courses** (`/courses`) - Enrolled courses and progress tracking
- **Learning Methods** (`/courses/[id]/learn`) - Multiple learning approaches
- **Inclusive Learning** (`/inclusive-learning`) - Specialized accessibility features

### Support & Community
- **Support Tickets** (`/support/tickets`) - Direct teacher communication
- **Pricing** (`/pricing`) - Subscription plans and billing options

## Accessibility Features

StudySphere is built with accessibility as a core principle:

- **WCAG 2.1 AA Compliance** - Meets web accessibility standards
- **Keyboard Navigation** - Full functionality without mouse
- **Screen Reader Support** - Semantic HTML and ARIA labels
- **High Contrast Mode** - Enhanced visibility options
- **Adjustable Text Sizes** - Customizable typography
- **Audio Descriptions** - Voice narration for visual content
- **Simplified Navigation** - Clear, consistent interface patterns

## Inclusive Learning Support

### Autism Spectrum Disorders
- Structured, predictable layouts
- Visual cues and sensory-friendly design
- Clear instructions and minimal distractions

### Dyslexia Support
- Dyslexia-friendly fonts (OpenDyslexic option)
- Adjustable reading speed and spacing
- Phonetic support and audio assistance

### Down Syndrome
- Simplified language and step-by-step guides
- Repetitive practice opportunities
- Visual learning aids and real-world examples

### Visual Impairments
- High contrast themes
- Screen reader optimization
- Audio-first learning options

## Contributing

We welcome contributions to make StudySphere even more inclusive and effective. Please read our contributing guidelines and code of conduct.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For technical support or questions about accessibility features:
- Email: support@studysphere.edu
- Phone: 1-800-STUDY-HELP
- Live Chat: Available 9 AM - 6 PM EST

## Deployment

This app is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

The app will be available at your custom Vercel domain.

---

**StudySphere** - Making quality education accessible to every student, regardless of their learning needs or abilities.
