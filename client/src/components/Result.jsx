import { MdOutlineContentCopy } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

function Result({ isError, errorMessage, shortenedUrl }) {
  const handleCopiedText = () => {
    toast.success("Copied Successfully!");
  };

  return (
    <div className="relative mt-10 bg-white rounded-md shadow-md">
      {/* Show result if there is any */}
      {(isError || shortenedUrl) && (
        <>
          <p className="p-5 text-center text-neutral-900 font-semibold">
            {isError ? errorMessage : shortenedUrl}
          </p>
          {!isError && (
            <CopyToClipboard text={shortenedUrl} onCopy={handleCopiedText}>
              <button className="absolute bottom-1/2 right-4 translate-y-1/2 text-2xl text-neutral-900">
                <MdOutlineContentCopy />
              </button>
            </CopyToClipboard>
          )}
        </>
      )}
    </div>
  );
}

export default Result;
