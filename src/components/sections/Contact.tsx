
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Instagram, Mail, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
    file: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your inquiry. Lola's team will respond shortly.",
      });
      setFormData({
        name: '',
        company: '',
        email: '',
        message: '',
        file: null
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-lightgray dark:bg-darkgray">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Get in Touch</h2>
        <p className="section-subheading text-center">
          For collaborations, bookings, and inquiries
        </p>

        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-10 transition-all duration-700 ${
            inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          {/* Contact Form */}
          <div className="bg-white dark:bg-black/70 rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Your Name"
                  />
                </div>

                <div className="grid gap-3">
                  <label htmlFor="company" className="text-sm font-medium">
                    Brand/Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Your Company"
                  />
                </div>

                <div className="grid gap-3">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid gap-3">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Your inquiry or project brief"
                  />
                </div>

                <div className="grid gap-3">
                  <label htmlFor="file" className="text-sm font-medium">
                    Upload Brief (optional)
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                    className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                  <p className="text-xs text-muted-foreground">
                    Accepted file types: PDF, DOC, DOCX (max 5MB)
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary mt-2 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="mb-10">
              <h3 className="text-2xl font-playfair mb-4">Connect with Lola</h3>
              <p className="mb-6 text-muted-foreground">
                For collaboration inquiries, bookings, or more information about working with Lola, please reach out through any of the following channels:
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-gold/20 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:contact@its-loxxy.com" className="text-muted-foreground hover:text-gold">
                      contact@its-loxxy.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-gold/20 p-3 rounded-full">
                    <Instagram className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <a href="https://instagram.com/its_loxxy" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-gold">
                      @its_loxxy
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-gold/20 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-gold">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-10">
              <h3 className="text-2xl font-playfair mb-6">Response Time</h3>
              <p className="text-muted-foreground">
                All inquiries are typically responded to within 24-48 hours during business days. For urgent matters, please indicate so in your message subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
