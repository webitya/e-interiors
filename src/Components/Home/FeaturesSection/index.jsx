import { motion } from "framer-motion";
import { Truck, Headphones, CheckCircle } from "lucide-react";

export default function CompactFeaturesSection() {
  return (
    <section className="py-8 bg-gray-50 text-zinc-700">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Icons Row */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Fast Delivery */}
          <div className="flex flex-col items-center">
            <Truck className="w-10 h-10 text-red-500 mb-2" />
            <h3 className="text-base font-semibold">Fast Delivery</h3>
            <p className="text-sm">Quick and reliable delivery services.</p>
          </div>

          {/* 24/7 Support */}
          <div className="flex flex-col items-center">
            <Headphones className="w-10 h-10 text-red-500 mb-2" />
            <h3 className="text-base font-semibold">24/7 Support</h3>
            <p className="text-sm">We’re here for you, anytime.</p>
          </div>

          {/* Best Quality */}
          <div className="flex flex-col items-center">
            <CheckCircle className="w-10 h-10 text-red-500 mb-2" />
            <h3 className="text-base font-semibold">Best Quality</h3>
            <p className="text-sm">Only the finest products delivered.</p>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-8 flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="#delivery"
            className="inline-flex items-center px-6 py-2 text-white bg-[#e23744] hover:bg-[#cc1f35] font-medium rounded-full shadow-md transition duration-300"
          >
            <Truck className="w-5 h-5 mr-2" />
            Get Delivery Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
