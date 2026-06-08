import { useRef, useEffect, useState } from "react";
import { ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

function getPrimaryColor() {
  return getComputedStyle(document.documentElement).getPropertyValue('--primary').trim()
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '77, 150, 255'
}

function DotMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const routes = [
    { start: { x: 100, y: 150, delay: 0 }, end: { x: 200, y: 80, delay: 2 } },
    { start: { x: 200, y: 80, delay: 2 }, end: { x: 260, y: 120, delay: 4 } },
    { start: { x: 50, y: 50, delay: 1 }, end: { x: 150, y: 180, delay: 3 } },
    { start: { x: 280, y: 60, delay: 0.5 }, end: { x: 180, y: 180, delay: 2.5 } },
  ];

  const generateDots = (width: number, height: number) => {
    const dots = [];
    const gap = 12;

    for (let x = 0; x < width; x += gap) {
      for (let y = 0; y < height; y += gap) {
        const isInMapShape =
          ((x < width * 0.25 && x > width * 0.05) && (y < height * 0.4 && y > height * 0.1)) ||
          ((x < width * 0.25 && x > width * 0.15) && (y < height * 0.8 && y > height * 0.4)) ||
          ((x < width * 0.45 && x > width * 0.3) && (y < height * 0.35 && y > height * 0.15)) ||
          ((x < width * 0.5 && x > width * 0.35) && (y < height * 0.65 && y > height * 0.35)) ||
          ((x < width * 0.7 && x > width * 0.45) && (y < height * 0.5 && y > height * 0.1)) ||
          ((x < width * 0.8 && x > width * 0.65) && (y < height * 0.8 && y > height * 0.6));

        if (isInMapShape && Math.random() > 0.3) {
          dots.push({ x, y, opacity: Math.random() * 0.5 + 0.2 });
        }
      }
    }
    return dots;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeObserver = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      setDimensions({ width, height });
      canvas.width = width;
      canvas.height = height;
    });

    resizeObserver.observe(canvas.parentElement as Element);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const dots = generateDots(dimensions.width, dimensions.height);
    let animationFrameId: number;
    let startTime = Date.now();

    function drawDots() {
      if (!ctx) return;
      const primary = getPrimaryColor()
      const rgb = hexToRgb(primary)
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      dots.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${dot.opacity})`;
        ctx.fill();
      });
    }

    function drawRoutes() {
      if (!ctx) return;
      const primary = getPrimaryColor()
      const rgb = hexToRgb(primary)
      const currentTime = (Date.now() - startTime) / 1000;

      routes.forEach(route => {
        const elapsed = currentTime - route.start.delay;
        if (elapsed <= 0) return;

        const duration = 3;
        const progress = Math.min(elapsed / duration, 1);

        const x = route.start.x + (route.end.x - route.start.x) * progress;
        const y = route.start.y + (route.end.y - route.start.y) * progress;

        ctx.beginPath();
        ctx.moveTo(route.start.x, route.start.y);
        ctx.lineTo(x, y);
        ctx.strokeStyle = primary;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(route.start.x, route.start.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = primary;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = primary;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, 0.3)`;
        ctx.fill();

        if (progress === 1) {
          ctx.beginPath();
          ctx.arc(route.end.x, route.end.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = primary;
          ctx.fill();
        }
      });
    }

    function animate() {
      drawDots();
      drawRoutes();

      const currentTime = (Date.now() - startTime) / 1000;
      if (currentTime > 15) {
        startTime = Date.now();
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [dimensions]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}

export default function ContactCard() {
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  function validate(name: string, email: string, message: string) {
    const newErrors: typeof errors = {}

    if (!name.trim()) newErrors.name = 'Please enter your name'
    if (!email.trim()) newErrors.email = 'Email is required'
    else if (!emailRegex.test(email)) newErrors.email = 'Please enter a valid email address'
    if (!message.trim()) newErrors.message = "Don't forget your message"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function clearError(field: keyof typeof errors) {
    setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  return (
    <div className="flex w-full h-full items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl overflow-hidden rounded-2xl flex bg-card shadow-xl"
      >
        <div className="hidden md:flex w-1/2 relative overflow-hidden border-r border-border flex-col items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10">
            <DotMap />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mb-6"
              >
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                  <ArrowRight className="text-primary-foreground h-6 w-6" />
                </div>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-3xl font-bold mb-2 text-center text-foreground"
              >
                Let's Connect
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-sm text-center text-muted-foreground max-w-xs"
              >
                I'm always open to discussing data analysis projects, new opportunities, or just a good conversation.
              </motion.p>
              <div className="mt-4 space-y-3 w-full max-w-xs">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/80">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <svg className="h-4 w-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground">yasserallaam00@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/80">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <svg className="h-4 w-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-medium text-foreground">Egypt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center bg-card">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-1 text-foreground">
              Let's talk for
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              Something special
            </h2>

            <form
              onSubmit={async (e) => {
                e.preventDefault()
                const form = e.currentTarget
                const formData = new FormData(form)
                const name = formData.get('name') as string
                const email = formData.get('email') as string
                const message = formData.get('message') as string

                if (!validate(name, email, message)) return

                setIsSubmitting(true)

                const time = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }) + ' ' + new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })

                try {
                  await emailjs.send(
                    import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
                    import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
                    { name, email, message, time },
                    import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
                  )

                  toast('Message sent!', {
                    description: "Thanks for reaching out. I'll get back to you soon.",
                  })
                  form.reset()
                } catch {
                  toast("Couldn't send message", {
                    description: 'Please try again later or email me directly.',
                  })
                } finally {
                  setIsSubmitting(false)
                }
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className={`dark:bg-black ${errors.name ? 'border-red-500' : ''}`}
                  onChange={() => clearError('name')}
                />
                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className={`dark:bg-black ${errors.email ? 'border-red-500' : ''}`}
                  onChange={() => clearError('email')}
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project or idea..."
                  onChange={() => clearError('message')}
                  className={`flex w-full rounded-md border bg-background dark:bg-black px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary focus-visible:ring-primary focus-visible:ring-[1px] disabled:cursor-not-allowed disabled:opacity-50 resize-none ${errors.message ? 'border-red-500' : 'border-input'}`}
                />
                {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
              </div>
              <Button type="submit" className="w-full gap-2 text-white" disabled={isSubmitting}>
                <Send className="h-4 w-4" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>

            <div className="mt-6 space-y-3 md:hidden">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <svg className="h-4 w-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-xs font-medium text-foreground">yasserallaam00@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <svg className="h-4 w-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-xs font-medium text-foreground">Egypt</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
