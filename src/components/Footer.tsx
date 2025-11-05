import GitHubIcon from "../assets/github-mark-white.svg";

export const Footer: React.FC = () => {
  return (
    <footer className="footer flex justify-end text-base-content px-4 mb-4">
      <a
        href="https://github.com/qiyamtimes/qiyamtimes.github.io"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:opacity-80"
      >
        <div className="text-xs">
          May Allah accept your prayers. This page is intended as a convenience;
          always follow your local mosque or community guidance when in doubt.
        </div>
        <img
          src={GitHubIcon}
          alt="GitHub"
          className="w-6 transition duration-200"
        />
      </a>
    </footer>
  );
};
