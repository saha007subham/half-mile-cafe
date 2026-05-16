import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="py-32 bg-main">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="font-poppins text-sm font-medium tracking-[0.2em] text-secondary uppercase mb-6">Location</h2>
          <h3 className="font-playfair text-5xl md:text-6xl text-primary leading-[1.1]">
            Find <span className="italic text-secondary">Us</span>
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Info Cards (Left) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card p-10 rounded-[2rem] h-full"
            >
              <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-playfair text-2xl text-primary mb-4">Address</h4>
              <p className="font-poppins text-secondary font-light leading-relaxed">
                Two and a Half Mile Cafe,<br />
                Checkpoint near Bhakti Nagar<br />
                Police Station, Don Bosco Colony,<br />
                Siliguri, West Bengal.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card p-10 rounded-[2rem] h-full"
            >
              <div className="w-12 h-12 bg-peach rounded-full flex items-center justify-center mb-6">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-playfair text-2xl text-primary mb-4">Hours</h4>
              <div className="space-y-2 font-poppins text-secondary font-light">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span>10:00 AM - 11:00 PM</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full lg:w-2/3 h-[400px] lg:h-auto rounded-[2rem] overflow-hidden bg-card"
          >
            {/* Embedded Google Map using a placeholder location in Siliguri */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114068.74950893345!2d88.35414800366479!3d26.736932450371804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44114f5441d8f%3A0xbaa04c5e5332f138!2sSiliguri%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.4) contrast(0.9) opacity(0.9)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;
