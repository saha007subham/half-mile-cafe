import { motion } from 'framer-motion';

const ReservationSection = () => {
  return (
    <section id="reservation" className="py-32 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20">

          {/* Info Side (Left) */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="font-poppins text-sm font-medium tracking-[0.2em] text-secondary uppercase mb-6">Reservation</h2>
              <h3 className="font-playfair text-5xl md:text-6xl text-primary leading-[1.1] mb-8">
                Secure your <br />
                <span className="italic text-secondary">table.</span>
              </h3>
              <p className="font-poppins text-secondary text-lg font-light leading-relaxed mb-12">
                Whether it's an intimate date, a casual meetup, or a quiet space to work, booking ahead ensures the perfect experience awaits you upon arrival.
              </p>

              <div className="bg-main p-8 rounded-3xl border border-primary/5">
                <h4 className="font-playfair text-2xl text-primary mb-2">Need a larger space?</h4>
                <p className="font-poppins text-secondary font-light text-sm">
                  For parties larger than 8, or private events, please contact us directly at <span className="font-medium">hello@2halfmile.com</span>.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Form Side (Right) */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="bg-main p-10 md:p-14 rounded-[3rem] shadow-sm"
            >
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-poppins text-sm font-medium text-primary mb-3">Name</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full px-5 py-4 rounded-xl border border-primary/10 bg-card font-poppins font-light text-primary placeholder:text-secondary/50 focus:outline-none focus:border-mint transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins text-sm font-medium text-primary mb-3">Phone</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-5 py-4 rounded-xl border border-primary/10 bg-card font-poppins font-light text-primary placeholder:text-secondary/50 focus:outline-none focus:border-mint transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <label className="block font-poppins text-sm font-medium text-primary mb-3">Date</label>
                    <input
                      type="date"
                      className="w-full px-5 py-4 rounded-xl border border-primary/10 bg-card font-poppins font-light text-primary focus:outline-none focus:border-mint transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins text-sm font-medium text-primary mb-3">Time</label>
                    <input
                      type="time"
                      className="w-full px-5 py-4 rounded-xl border border-primary/10 bg-card font-poppins font-light text-primary focus:outline-none focus:border-mint transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins text-sm font-medium text-primary mb-3">Guests</label>
                    <select className="w-full px-5 py-4 rounded-xl border border-primary/10 bg-card font-poppins font-light text-primary focus:outline-none focus:border-mint transition-colors appearance-none">
                      <option>1 Person</option>
                      <option>2 People</option>
                      <option>3 People</option>
                      <option>4 People</option>
                      <option>5+ People</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <button className="w-full bg-mint text-primary py-5 rounded-2xl font-poppins font-medium text-lg hover:bg-peach transition-colors cursor-pointer">
                    Confirm Reservation
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
