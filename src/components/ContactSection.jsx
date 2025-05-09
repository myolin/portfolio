import { Facebook, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        import.meta.VITE_SERVICE_ID, 
        import.meta.VITE_TEMPLATE_ID, 
        e.target, 
        import.meta.VITE_PUBLIC_KEY
      )
      .then((result)=> {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });  
        setFormData({name: "", email: "", message: ""});
        setIsSubmitting(false);
        console.log(result);
      })
      .catch(() => {
        toast({
          title: "Oops! Something went wrong!",
          description: "Please try again.",
        });
      });
  }

  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-8 text-center'>
          Get In Touch With Me
        </h2>

        <div className='grid gird-cols-1 md:grid-cols-2 gap-12'>
          <div className='space-y-8'>
            <h3 className='text-2xl font-semibold mb-6'> Contact Information</h3>

            <div className='space-y-6 justify-center'>
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Mail className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-medium'> Email</h4>
                  <a 
                    href='mailto:myozlin27@gmail.com' 
                    className='text-muted-foreground hover:text-primary transition-colors'
                  > 
                    myozlin27@gmail.com
                  </a>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Phone className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-medium'> Phone</h4>
                  <a 
                    href='tel:+12245047822' 
                    className='text-muted-foreground hover:text-primary transition-colors'
                  > 
                    (224) 504-7822
                  </a>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <MapPin className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-medium'> Location</h4>
                  <a className='text-muted-foreground hover:text-primary transition-colors'> 
                    IL, USA
                  </a>
                </div>
              </div>
            </div>

            <div className='pt-8'>
              <h4 className='font-medium mb-4'>Connect With Me</h4>
              <div className='flex space-x-4 justify-center'>
                <a 
                  href='https://www.linkedin.com/in/myo-zaw-lin' 
                  target='_blank'
                  className='hover:text-primary transition-colors duration-300'
                >
                  <Linkedin />
                </a>
                <a 
                  href='#' 
                  target='_blank'
                  className='hover:text-primary transition-colors duration-300'
                >
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          <div className='bg-card p-8 rounded-lg shadow-xs'>
            <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <input 
                  type='text' 
                  id='name' 
                  name='name'
                  required 
                  value={formData.name}
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden'
                  placeholder='Name'
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <input 
                  type='email' 
                  id='email' 
                  name='email'
                  required
                  value={formData.email} 
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden'
                  placeholder='Email'
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <textarea 
                  id='message' 
                  name='message'
                  required
                  value={formData.message}
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden resize-none'
                  placeholder='Type your message here'
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button 
                type='submit'
                disabled={isSubmitting} 
                className={cn(
                  'cosmic-button w-full flex items-center justify-center gap-2'
                )}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection
