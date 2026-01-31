import banner from "./assets/images/illustration-article.svg";
import avatar from "./assets/images/image-avatar.webp";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-white w-70  p-5 rounded-xl border shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <img
              src={banner}
              alt="illustration-article"
              className="rounded-xl"
            />
            <div className="bg-[hsl(47,88%,63%)] mt-5 w-16 p-1 text-xs font-black text-center rounded-sm">
              <p>Learning</p>
            </div>
            <p className="text-gray-800 text-xs my-3 font-semibold">
              Published 21 Dec 2023
            </p>
            <h2 className="font-bold text-xl">HTML & CSS foundations</h2>
            <p className="text-gray-500 py-4 text-sm">
              These languages are the backbone of every website, defining
              structure, content, and presentation
            </p>
            <div className="flex gap-1">
              <img src={avatar} alt="user-avatar" className="w-5" />
              <p className="flex items-center font-bold text-sm">Greg Hooper</p>
            </div>
          </div>
        </div>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    </>
  );
}

export default App;
