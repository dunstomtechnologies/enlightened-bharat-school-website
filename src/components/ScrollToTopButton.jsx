import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed
        bottom-8
        right-8
        z-50
        w-14
        h-14
        rounded-full
        bg-gradient-to-r
        from-yellow-400
        to-orange-400
        text-black
        flex
        items-center
        justify-center
        shadow-[0_0_25px_rgba(250,204,21,0.5)]
        hover:scale-110
        transition-all
        duration-300
      "
    >
      <FaArrowUp size={18} />
    </button>
  );
}

export default ScrollToTopButton;