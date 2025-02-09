import { useState } from "react";
import { ImHeart } from "react-icons/im";
import mountain from "./assets/mountain.jpg";
import halloween from "./assets/halloween.jpg";
import tree from "./assets/tree.jpg";
import paris from "./assets/paris.jpg";
import river from "./assets/river.jpg";
import hug from "./assets/hug.jpg";
import duomo from "./assets/duomo.jpg";
import como from "./assets/como.jpg";
import desert from "./assets/desert.jpg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <div className="z-10 flex-col items-center justify-center ">
            <div className="flex items-center justify-center space-x-4 pt-10 pb-10">
              <ImHeart className=" animate-pulseRotate top-10 md:left-24 left-6 md:w-40 w-28 text-red-500 h-40 pl-10" />
              <div className="text-xl md:text-xl font-bold my-4 mx-auto px-4 md:px-24 text-center w-[70vw] text-outline ">
                Happy Valentine's Day, my love! Every moment with you feels like
                a beautiful dream come true. You bring so much joy and warmth
                into my life, and I’m incredibly grateful for your love and
                kindness. I’m lucky to have you by my side, and I can’t wait to
                continue making amazing memories together. I love you!!!!!!!
              </div>
              <ImHeart className=" animate-pulseRotate top-10 md:right-24 right-6 md:w-40 w-28 text-red-500 h-40 pr-10" />
            </div>
            <div className="flex justify-center">
              <img
                className="pb-20"
                src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              />{" "}
            </div>
          </div>
          <img
            className="fixed right-[15vw] opacity-80 h-[30vw] max-h-[200px] rounded-lg animate-rotate"
            src={mountain}
            alt=""
          />
          <img
            className="fixed left-[15vw] opacity-80 h-[30vw] max-h-[200px] rounded-lg animate-rotate"
            src={halloween}
            alt=""
          />
          <img
            className="fixed top-[70vh] left-[10vw] opacity-80 h-[30vw] max-h-[200px] rounded-lg animate-rotate"
            src={duomo}
            alt=""
          />
          <img
            className="fixed top-[60vh] right-[10vw] opacity-80 h-[30vw] max-h-[200px] rounded-lg animate-rotate"
            src={hug}
            alt=""
          />
          <img
            className="fixed top-[10vh] right-[50vw] opacity-70 h-[30vw] max-h-[200px] rounded-lg animate-rotate"
            src={desert}
            alt=""
          />
          <img
            className="fixed top-[80vh] right-[40vw] opacity-80 h-[30vw] max-h-[200px] rounded-lg animate-rotate"
            src={paris}
            alt=""
          />
          <img
            className="fixed top-[0vh] right-[0vw] opacity-80 h-[30vw] max-h-[200px] rounded-lg animate-rotate"
            src={tree}
            alt=""
          />
          <img
            className="fixed top-[0vh] left-[0vw] opacity-80 h-[30vw] max-h-[200px] rounded-lg animate-rotate"
            src={como}
            alt=""
          />
          {/* <img
            className="fixed bottom-[0vh] right-[0vw] opacity-80 h-[200px] rounded-lg animate-rotate"
            src={desert}
            alt=""
          /> */}
        </>
      ) : (
        <>
          <ImHeart className="fixed animate-pulseRotate top-10 md:left-24 left-6 md:w-40 w-28 text-red-500 h-40" />
          <ImHeart className="fixed bottom-16 -z-10 animate-pulseRotateDelay md:right-24 right-10 md:w-40 w-32 text-red-500 h-40" />

          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Will you be my Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
