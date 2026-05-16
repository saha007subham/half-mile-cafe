import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryData = {
  col1: [
    { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop', type: 'portrait' } // Cafe Interior
  ],
  col2: [
    { src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1200&auto=format&fit=crop', type: 'horizontal' }, // Coffee Pour
    { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop', type: 'horizontal' }  // Cozy seating
  ],
  col3: [
    { src: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=1200&auto=format&fit=crop', type: 'horizontal' }, // Dessert
    { src: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1200&auto=format&fit=crop', type: 'horizontal' }  // Drink
  ],
  col4: [
    { src: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1200&auto=format&fit=crop', type: 'portrait' } // Drink portrait
  ]
};

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Reusable Image Card Component
  const ImageCard = ({ src, type }) => (
    <div 
      className={`relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm w-full ${
        type === 'portrait' ? 'flex-1 min-h-[300px]' : 'aspect-[4/3]'
      }`}
      onClick={() => setSelectedImage(src)}
    >
      <img 
        src={src} 
        alt="Gallery Image" 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <ZoomIn className="text-white w-10 h-10" />
      </div>
    </div>
  );

  return (
    <section id="gallery" className="py-32 bg-main">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="font-poppins text-sm font-medium tracking-[0.2em] text-secondary uppercase mb-6">Gallery</h2>
          <h3 className="font-playfair text-5xl md:text-6xl text-primary leading-[1.1]">
            Captured <span className="italic text-secondary">Moments</span>
          </h3>
        </div>

        {/* 4-Column Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Column 1: Tall Portrait */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col h-full"
          >
            {/* REPLACE THIS IMAGE URL WITH ORIGINAL CAFE PHOTO */}
            <ImageCard src={galleryData.col1[0].src} type={galleryData.col1[0].type} />
          </motion.div>

          {/* Column 2: Two Horizontals */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* REPLACE THESE IMAGE URLs WITH ORIGINAL CAFE PHOTOS */}
            <ImageCard src={galleryData.col2[0].src} type={galleryData.col2[0].type} />
            <ImageCard src={galleryData.col2[1].src} type={galleryData.col2[1].type} />
          </motion.div>

          {/* Column 3: Two Horizontals */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* REPLACE THESE IMAGE URLs WITH ORIGINAL CAFE PHOTOS */}
            <ImageCard src={galleryData.col3[0].src} type={galleryData.col3[0].type} />
            <ImageCard src={galleryData.col3[1].src} type={galleryData.col3[1].type} />
          </motion.div>

          {/* Column 4: Tall Portrait */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col h-full"
          >
            {/* REPLACE THIS IMAGE URL WITH ORIGINAL CAFE PHOTO */}
            <ImageCard src={galleryData.col4[0].src} type={galleryData.col4[0].type} />
          </motion.div>

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/90 p-6 backdrop-blur-md cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-main hover:text-mint transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] rounded-[2rem] shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
