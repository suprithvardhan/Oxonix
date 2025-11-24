import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS, WHATSAPP_NUMBER } from '../constants';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Zap, Battery, Clock, Gauge, Star, User } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);

  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <button onClick={() => navigate('/products')} className="text-primary hover:underline">Back to Products</button>
        </div>
      </div>
    );
  }

  const galleryImages = product.gallery || [product.image];

  const openEnquiry = () => {
    // Enhanced pre-filled message
    const msg = `Hello Oxonix Team, I am interested in the ${product.name} (Model ID: ${product.id}). Could you please share more details about the pricing and installation process?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // Mock Reviews
  const reviews = [
    { id: 1, name: "Rajesh Kumar", rating: 5, date: "2 months ago", comment: "The pickup is incredible. It feels better than when I bought it new. The team was very professional." },
    { id: 2, name: "Sneha Patil", rating: 4, date: "1 month ago", comment: "Good range for city commute. I'm saving about 3000 rupees a month on petrol." },
    { id: 3, name: "Amit Verma", rating: 5, date: "3 weeks ago", comment: "Installation was quick. The app connectivity feature is very useful to track battery health." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white pt-10 pb-20 transition-colors duration-300">
      {/* Hero Image Section */}
      <div className="relative">
        <div className="h-[50vh] w-full relative overflow-hidden bg-gray-200 dark:bg-surface">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-black to-transparent z-10"></div>
          <motion.img
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={activeImage}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => navigate('/products')}
            className="absolute top-8 left-6 z-20 bg-white/10 backdrop-blur p-2 rounded-full text-white hover:bg-white/20 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
        </div>

        {/* Gallery Thumbnails - Floating */}
        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2 overflow-x-auto px-4 pb-2">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(img)}
              className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${activeImage === img ? 'border-primary scale-110' : 'border-white/50 opacity-70 hover:opacity-100'}`}
            >
              <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-8 relative z-20">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <div className="bg-white dark:bg-surface p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-xl mb-12">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-primary font-bold tracking-wider text-sm uppercase">{product.category}</span>
                  <h1 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">{product.name}</h1>
                  <p className="text-2xl font-mono text-gray-600 dark:text-gray-400">{product.priceEstimate} <span className="text-sm text-gray-400">(Estimated)</span></p>
                </div>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="mb-8">
                <h3 className="font-bold text-xl mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="p-4 bg-gray-50 dark:bg-black/50 rounded-lg border border-gray-100 dark:border-white/5">
                    <Battery className="text-primary mb-2" />
                    <p className="text-xs text-gray-500 uppercase">Battery Capacity</p>
                    <p className="font-bold">{product.specs.batteryCapacity || 'N/A'}</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-black/50 rounded-lg border border-gray-100 dark:border-white/5">
                    <Gauge className="text-primary mb-2" />
                    <p className="text-xs text-gray-500 uppercase">Top Speed</p>
                    <p className="font-bold">{product.specs.speed}</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-black/50 rounded-lg border border-gray-100 dark:border-white/5">
                    <Clock className="text-primary mb-2" />
                    <p className="text-xs text-gray-500 uppercase">Charge Time</p>
                    <p className="font-bold">{product.specs.chargingTime}</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-black/50 rounded-lg border border-gray-100 dark:border-white/5">
                    <Zap className="text-primary mb-2" />
                    <p className="text-xs text-gray-500 uppercase">Motor Power</p>
                    <p className="font-bold">{product.specs.motorPower}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white dark:bg-surface p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-xl">
              <h3 className="font-display text-2xl font-bold mb-6">Customer Reviews</h3>
              <div className="space-y-8">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 dark:border-white/5 last:border-0 pb-8 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center">
                          <User size={20} className="text-gray-500 dark:text-gray-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">{review.name}</h4>
                          <span className="text-xs text-gray-500">{review.date}</span>
                        </div>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-gray-300 dark:text-gray-600"} />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed pl-14">"{review.comment}"</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sticky Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-fit md:sticky md:top-24"
          >
            <div className="bg-primary p-8 rounded-2xl text-black shadow-lg">
              <h3 className="font-display text-2xl font-bold mb-4">Interested?</h3>
              <p className="mb-6 text-black/80">
                Get a custom quote for your specific vehicle model. Installation slots are filling up fast.
              </p>
              <button
                onClick={openEnquiry}
                className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-900 transition-colors shadow-lg mb-4"
              >
                Enquire Now
              </button>
              <p className="text-xs text-center opacity-70">
                *Prices may vary based on battery capacity selection and local taxes.
              </p>
            </div>

            <div className="mt-6 bg-white dark:bg-surface p-6 rounded-2xl border border-gray-200 dark:border-white/10">
              <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Warranty Included</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {product.specs.warranty} comprehensive warranty on Battery and Motor components.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;