import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";

const colors = ["oklch(97.3% 0.071 103.193)", "oklch(93.6% 0.032 17.717)", "oklch(95.6% 0.045 203.388)", "#34d399"];

const AddButton = ({ onSelectColor }: { onSelectColor: (color: string) => void }) => {
  const [showColors, setShowColors] = useState(false);

  const handleToggle = () => {
    setShowColors((prev) => !prev);
  };

  const handleSelectColor = (color: string) => {
    onSelectColor(color);
    setShowColors(false);
  };
  return (
    <div className="relative">
      <motion.button
        onClick={handleToggle}
        animate={{ rotate: showColors ? 45 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="bg-gray-900 text-white p-4 rounded-full shadow-lg mb-2"
      >
        <FaPlus size={16} />
      </motion.button>

      {showColors && (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 flex flex-col gap-3 items-center"
        >
          {colors.map((color, index) => (
            <motion.div
                key={index}
                layoutId={`note-create-${color}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 h-6 m-2 rounded-full cursor-pointer"
                style={{ backgroundColor: color }}
                onClick={() => handleSelectColor(color)}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default AddButton;
