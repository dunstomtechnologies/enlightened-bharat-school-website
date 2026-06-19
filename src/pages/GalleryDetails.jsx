import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function GalleryDetails() {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // =========================
  // FETCH SINGLE GALLERY ITEM
  // =========================

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const docRef = doc(db, "gallery", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setImage({ id: docSnap.id, ...docSnap.data() });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [id]);

  // =========================
  // LOADING STATE
  // =========================

  if (loading) {
    return (
      <div className="bg-[#061224] min-h-screen flex items-center justify-center pt-24">
        <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // =========================
  // NOT FOUND STATE
  // =========================

  if (!image) {
    return (
      <div className="bg-[#061224] min-h-screen flex flex-col items-center justify-center pt-24 px-6">
        <h2 className="text-white text-3xl font-bold mb-4">Image Not Found</h2>
        <p className="text-gray-400 mb-8">
          The gallery item you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/gallery"
          className="text-yellow-400 hover:text-yellow-300 underline underline-offset-4 duration-300"
        >
          ← Back to Gallery
        </Link>
      </div>
    );
  }

  // =========================
  // DETAIL VIEW
  // =========================

  return (
    <>
      <Helmet>
        <title>{image.title ? `${image.title} — Enlightened Bharat Gallery` : "Gallery — Enlightened Bharat"}</title>
        <meta
          name="description"
          content={image.description || "Explore our modern gurukul campus gallery at Enlightened Bharat."}
        />
      </Helmet>

      <section className="bg-[#061224] min-h-screen pt-28 pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 duration-300 text-sm font-medium tracking-wide"
            >
              <span>←</span>
              <span>Back to Gallery</span>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            className="mt-8 rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src={image.image_url}
              alt={image.title}
              className="w-full max-h-[600px] object-cover"
            />
          </motion.div>

          {/* Title & Description */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
              {image.title}
            </h1>

            {image.description && (
              <p className="text-gray-300 mt-6 text-lg leading-9">
                {image.description}
              </p>
            )}
          </motion.div>

          {/* Bottom Divider */}
          <div className="w-40 h-[2px] bg-yellow-400/40 mt-12 rounded-full"></div>

        </div>
      </section>
    </>
  );
}

export default GalleryDetails;
