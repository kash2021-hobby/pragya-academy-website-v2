import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const courses = ['Science', 'Arts', 'Commerce', 'Integrated Programme'];
const integratedSubjects = ['NEET', 'JEE', 'CUET', 'CEE'];

const Contact = () => {
  useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '', course: '', integratedSubject: '' });
  const [sending, setSending] = useState(false);

  const handleCourseChange = (value: string) => {
    setForm((prev) => ({
      ...prev,
      course: value,
      integratedSubject: value === 'Integrated Programme' ? prev.integratedSubject : '',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const courseInfo = form.course
      ? `\nCourse: ${form.course}${form.integratedSubject ? ` (${form.integratedSubject})` : ''}`
      : '';

    const subject = `Contact from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}${courseInfo}\n\nMessage:\n${form.message}`;

    const mailtoLink = `mailto:kashyapnandan2021@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');

    setTimeout(() => {
      setSending(false);
      alert('Your email client should have opened. Please send the email to complete your message.');
      setForm({ name: '', email: '', message: '', course: '', integratedSubject: '' });
    }, 500);
  };

  return (
    <>
      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3 scroll-reveal">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { key: 'name', label: 'Full Name', type: 'text' },
                  { key: 'email', label: 'Email Address', type: 'email' },
                ].map((field) => (
                  <div key={field.key} className="relative">
                    <input
                      type={field.type}
                      required
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      placeholder={field.label}
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all placeholder:text-muted-foreground"
                    />
                  </div>
                ))}

                {/* Course Dropdown */}
                <Select value={form.course} onValueChange={handleCourseChange}>
                  <SelectTrigger className="w-full px-4 py-3.5 h-auto rounded-xl border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-orange focus:ring-offset-0">
                    <SelectValue placeholder="Select Course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Integrated Programme Subject Dropdown */}
                {form.course === 'Integrated Programme' && (
                  <Select value={form.integratedSubject} onValueChange={(v) => setForm({ ...form, integratedSubject: v })}>
                    <SelectTrigger className="w-full px-4 py-3.5 h-auto rounded-xl border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-orange focus:ring-offset-0">
                      <SelectValue placeholder="Select Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {integratedSubjects.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}

                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your Message"
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all placeholder:text-muted-foreground resize-none"
                />
                <button type="submit" disabled={sending} className="btn-orange flex items-center gap-2">
                  <Send size={18} /> {sending ? 'Opening...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Info Card */}
            <div className="lg:col-span-2 scroll-reveal">
              <div className="bg-navy rounded-xl p-8 text-primary-foreground h-full">
                <h3 className="font-heading text-2xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-orange" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Address</p>
                      <p className="text-primary-foreground/70 text-sm">Baihata Chariali, Mangaldoi Road, Assam, 781381</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-orange" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Phone</p>
                      <p className="text-primary-foreground/70 text-sm">+91-9435015476</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-orange" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Email</p>
                      <p className="text-primary-foreground/70 text-sm">pragyaacademy2017@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 scroll-reveal rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Pragya Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28632.74!2d91.58!3d26.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59c!2sBaihata%20Chariali!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
