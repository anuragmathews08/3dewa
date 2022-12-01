import { useRouter } from "next/router";

export const ModalInfo = ({ title, description }) => {
  const router = useRouter();
  return (
    <div className="font-primary">
      <button
        className="text-xl font-medium border-2 border-blue-700 px-8 py-3 flex items-center gap-1"
        onClick={() => router.back()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Back to Modals Page
      </button>
      <h1 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
        {title}
      </h1>
      <p className="font-medium text-lg">{description}</p>
      <button className="text-2xl bg-blue-800 px-8 py-2 w-[90%] hover:bg-blue-900 shadow-xl text-white mt-5">
        Download
      </button>
    </div>
  );
};
