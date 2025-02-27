import { motion } from "framer-motion";

const images = [
  "/gallery/ab.webp", "/gallery/ab1.webp", "/gallery/ab2.webp", 
  "/gallery/demo1.webp", "/gallery/action.webp", "/gallery/ar.webp",
  "/gallery/ar1.webp", "/gallery/bme.webp", "/gallery/codigo11.webp", 
  "/gallery/ipla.webp", "/gallery/iplauction.webp", "/gallery/iplauction11.webp",
  "/gallery/byte.webp",  "/gallery/cat11.webp", "/gallery/pp.webp", 
  "/gallery/cat22.webp", "/gallery/catt.webp", "/gallery/cc1.webp", 
  "/gallery/cc11.webp", "/gallery/codigo12.webp", "/gallery/mindmatrix.webp", 
  "/gallery/crono.webp", "/gallery/flashm.webp",  "/gallery/funmania1.webp", 
  "/gallery/mindmatrix1.webp", "/gallery/pp2.webp", "/gallery/iplauction.webp", 
  "/gallery/mindmatrix2.webp", "/gallery/iplauction11.webp", "/gallery/mm1.webp",
  "/gallery/pp.webp", "/gallery/sher2.webp", "/gallery/sherlock.webp", 
  "/gallery/sherlock3.webp"
];

const titles = [
  "AlphaByte", "AlphaByte", "AlphaByte", "Anantya2k24", "Action Replay",
  "Action Replay", "Action Replay", "Byte Me", "Codigo", "IPL Auction",
  "IPL Auction", "IPL Auction", "Byte Me", "CAT", "Poster Presentation",
  "CAT", "CAT " , "ChronoClash", "ChronoClash", "Codigo", "MindMatrix", "ChronoClash", "Flashmob", "FunMania", 
   "MindMatrix", "Poster Presentation", "IPL Auction", "MindMatrix", "MindMatrix", "Poster Presentation",
   "SherLock", "SherLock","SherLock"
];

// Define varying grid sizes for each image
const gridSizes = [
  "col-span-2 row-span-1", "col-span-1 row-span-1", "col-span-3 row-span-1", "col-span-2 row-span-2", "col-span-1 row-span-1",
  "col-span-3 row-span-1", "col-span-2 row-span-2", "col-span-2 row-span-1", "col-span-2 row-span-1", "col-span-2 row-span-2",
  "col-span-2 row-span-1", "col-span-2 row-span-1", "col-span-3 row-span-1", "col-span-3 row-span-2", "col-span-3 row-span-2",
  "col-span-3 row-span-1", "col-span-2 row-span-2", "col-span-2 row-span-1", "col-span-2 row-span-1", "col-span-2 row-span-2", 
  "col-span-2 row-span-3", "col-span-2 row-span-2",
];

export default function AnimatedGallery() {
  return (
    <div className="relative p-8">
      {/* Responsive grid structure */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {images.map((src, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.1 , zIndex: 50 }}
            transition={{ duration: 0.3 }}
            className={`relative rounded-lg overflow-hidden shadow-lg ${gridSizes[i % gridSizes.length]}`}
          >
            <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
            <motion.div 
              className="absolute inset-0 bg-black opacity-0 flex items-center justify-center text-white text-lg font-bold"
              whileHover={{ opacity: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              {titles[i % titles.length]}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
