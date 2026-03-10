# Customization Guide - Replace Placeholder Data

This guide shows you exactly where to find and replace all placeholder data with your actual information.

---

## 1. Hero Section (`/src/app/components/Hero.tsx`)

### Lines to Update:

**Your Name (Line 12):**

```tsx
<h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#3776ab] to-[#10b981] bg-clip-text text-transparent">
  Tareq Anam // ← REPLACE WITH YOUR NAME
</h1>
```

**Your Title (Line 15):**

```tsx
<p className="text-2xl md:text-3xl text-muted-foreground mb-6">
  Senior Python Software Developer // ← REPLACE WITH YOUR TITLE
</p>
```

**Your Tagline (Line 24):**

```tsx
<p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
  Building scalable microservices & banking platforms // ←
  REPLACE WITH YOUR TAGLINE
</p>
```

**CTA Buttons (Lines 34-62):**

- **Resume Download**: Add actual PDF link or download handler
- **GitHub**: Replace `'https://github.com'` with `'https://github.com/YOUR_USERNAME'`
- **LinkedIn**: Replace `'https://linkedin.com'` with `'https://linkedin.com/in/YOUR_PROFILE'`
- **Email**: Replace `'mailto:tareq@example.com'` with `'mailto:YOUR_EMAIL@example.com'`

---

## 2. About Section (`/src/app/components/About.tsx`)

### Lines 14-31:

Replace the entire professional summary (3 paragraphs) with your own story:

```tsx
<p className="text-foreground/80 leading-relaxed mb-6">
  // ← REPLACE WITH YOUR FIRST PARAGRAPH
  I'm a Senior Python Software Developer with extensive experience...
</p>
<p className="text-foreground/80 leading-relaxed mb-6">
  // ← REPLACE WITH YOUR SECOND PARAGRAPH
  My expertise spans across the entire backend stack...
</p>
<p className="text-foreground/80 leading-relaxed">
  // ← REPLACE WITH YOUR THIRD PARAGRAPH
  Throughout my career, I've delivered critical solutions...
</p>
```

---

## 3. Skills Section (`/src/app/components/Skills.tsx`)

### Lines 5-29 - Update the `skillGroups` array:

```tsx
const skillGroups = [
  {
    title: "Backend", // ← Keep or modify category
    icon: Code2,
    color: "from-[#3776ab] to-blue-600",
    skills: [
      "Python",
      "Django",
      "FastAPI",
      "Flask",
      "REST APIs",
    ], // ← REPLACE WITH YOUR SKILLS
  },
  {
    title: "Messaging & Async", // ← Keep or modify category
    icon: MessageSquare,
    color: "from-[#10b981] to-emerald-600",
    skills: ["Celery", "RabbitMQ", "Redis", "Async Processing"], // ← REPLACE WITH YOUR SKILLS
  },
  // ... Add/remove/modify skill groups as needed
];
```

**Tips:**

- Add new skill groups by copying the pattern
- Remove groups you don't need
- Change icons from lucide-react library
- Modify gradient colors

---

## 4. Experience Section (`/src/app/components/Experience.tsx`)

### Lines 4-40 - Update the `experiences` array:

```tsx
const experiences = [
  {
    company: "Tech Banking Corp", // ← REPLACE WITH COMPANY NAME
    role: "Senior Python Software Developer", // ← REPLACE WITH YOUR ROLE
    duration: "Jan 2021 - Present", // ← REPLACE WITH DURATION
    highlights: [
      "Architected and deployed microservices...", // ← REPLACE WITH YOUR ACHIEVEMENTS
      "Designed Customer 360 Search system...",
      "Led development of Global Search Module...",
      "Implemented CI/CD pipelines...",
    ],
  },
  {
    company: "FinTech Solutions Ltd", // ← REPLACE WITH COMPANY NAME
    role: "Python Backend Developer", // ← REPLACE WITH YOUR ROLE
    duration: "Mar 2018 - Dec 2020", // ← REPLACE WITH DURATION
    highlights: [
      "Built Merchant Transaction Portal...", // ← REPLACE WITH YOUR ACHIEVEMENTS
      "Developed asynchronous processing pipelines...",
      // ... add more
    ],
  },
  // Add or remove experience entries as needed
];
```

---

## 5. Projects Section (`/src/app/components/Projects.tsx`)

### Lines 5-58 - Update the `projects` array:

```tsx
const projects = [
  {
    title: "Banking Microservices Platform", // ← REPLACE WITH PROJECT NAME
    description: "Architected a cloud-native microservices...", // ← REPLACE WITH DESCRIPTION
    techStack: [
      "Python",
      "Django",
      "FastAPI",
      "Docker",
      "RabbitMQ",
    ], // ← YOUR TECH STACK
    gradient: "from-blue-500 to-cyan-500", // ← Optional: change color
  },
  // Add more projects or remove ones you don't need
];
```

---

## 6. Education Section (`/src/app/components/Education.tsx`)

### Lines 5-21 - Update `education` array:

```tsx
const education = [
  {
    degree: "Bachelor of Science in Computer Science", // ← YOUR DEGREE
    institution: "University of Technology", // ← YOUR UNIVERSITY
    year: "2011 - 2015", // ← YOUR YEARS
    highlights: [
      "Focus on Software Engineering and Database Systems", // ← YOUR DETAILS
      "GPA: 3.8/4.0",
    ],
  },
  // Add more degrees or remove if needed
];
```

### Lines 23-43 - Update `certifications` array:

```tsx
const certifications = [
  {
    title: "AWS Certified Solutions Architect", // ← YOUR CERTIFICATION
    issuer: "Amazon Web Services", // ← ISSUER
    year: "2022", // ← YEAR
  },
  // Add/remove certifications as needed
];
```

---

## 7. Awards Section (`/src/app/components/Awards.tsx`)

### Lines 5-23 - Update `awards` array:

```tsx
const awards = [
  {
    title: "Banking Innovation Award 2023", // ← YOUR AWARD
    organization: "FinTech Excellence Forum", // ← ORGANIZATION
    description: "Recognized for pioneering Customer 360...", // ← DESCRIPTION
  },
  // Add/remove awards
];
```

### Lines 25-38 - Update `publications` array:

```tsx
const publications = [
  {
    title:
      "Machine Learning Applications in Banking Fraud Detection", // ← YOUR PUBLICATION
    venue: "International Journal of FinTech Research", // ← VENUE
    year: "2023", // ← YEAR
    description: "Co-authored research paper...", // ← DESCRIPTION
  },
  // Add/remove publications
];
```

---

## 8. Contact Section (`/src/app/components/Contact.tsx`)

### Update Contact Information:

**Email (Lines 19-20 and 33):**

```tsx
href="mailto:tareq.anam@example.com"  // ← Line 19: REPLACE WITH YOUR EMAIL
<p className="text-sm text-muted-foreground">tareq.anam@example.com</p>  // ← Line 33: REPLACE
```

**LinkedIn (Lines 38-47):**

```tsx
href="https://linkedin.com/in/tareqanam"  // ← Line 39: REPLACE WITH YOUR LINKEDIN
<p className="text-sm text-muted-foreground">linkedin.com/in/tareqanam</p>  // ← Line 47: REPLACE
```

**GitHub (Lines 51-60):**

```tsx
href="https://github.com/tareqanam"  // ← Line 52: REPLACE WITH YOUR GITHUB
<p className="text-sm text-muted-foreground">github.com/tareqanam</p>  // ← Line 60: REPLACE
```

**Location (Lines 64-73):**

```tsx
<p className="text-sm text-muted-foreground">
  San Francisco, CA
</p> // ← Line 71: REPLACE WITH YOUR LOCATION
```

**Footer Name (Line 84):**

```tsx
© {currentYear} Tareq Anam. Built with React, TypeScript, and Tailwind CSS.  // ← REPLACE NAME
```

---

## 9. Resume Download Button

To make the "Download Resume" button work, you have two options:

### Option A: Host PDF on GitHub

1. Add your resume PDF to `/public/resume.pdf`
2. Update Hero.tsx line 34:

```tsx
<Button
  size="lg"
  className="gap-2 bg-[#3776ab] hover:bg-[#3776ab]/90"
  onClick={() => window.open("/resume.pdf", "_blank")} // ← Add onClick
>
  <Download className="w-5 h-5" />
  Download Resume
</Button>
```

### Option B: External Link (Google Drive, Dropbox, etc.)

```tsx
<Button
  size="lg"
  className="gap-2 bg-[#3776ab] hover:bg-[#3776ab]/90"
  onClick={() => window.open("YOUR_RESUME_URL_HERE", "_blank")}
>
  <Download className="w-5 h-5" />
  Download Resume
</Button>
```

---

## Quick Checklist

Before deployment, make sure you've updated:

- [ ] Your name in Hero.tsx
- [ ] Your title and tagline in Hero.tsx
- [ ] All CTA button links (GitHub, LinkedIn, Email)
- [ ] About Me professional summary (3 paragraphs)
- [ ] Skills in all 5 categories (or add/remove categories)
- [ ] All work experiences (company, role, duration, achievements)
- [ ] All projects (at least 3-6 projects with descriptions)
- [ ] Education details (degree, institution, years)
- [ ] Certifications (add all your certs)
- [ ] Awards and publications (or remove section if none)
- [ ] Contact information (email, LinkedIn, GitHub, location)
- [ ] Resume download button functionality
- [ ] Footer copyright with your name

---

## Need to Add/Remove Sections?

### To Remove a Section:

1. Delete the component file from `/src/app/components/`
2. Remove the import and component from `/src/app/App.tsx`

### To Add a New Section:

1. Create a new component in `/src/app/components/YourSection.tsx`
2. Import and add it to `/src/app/App.tsx`
3. Add navigation link in `/src/app/components/Navbar.tsx`

---

## Color Customization

If you want different accent colors, edit `/src/styles/theme.css`:

```css
:root {
  --python-blue: #3776ab; /* ← Change to your preferred blue */
  --soft-green: #10b981; /* ← Change to your preferred green */
}
```

Then search and replace the hex codes in all component files.