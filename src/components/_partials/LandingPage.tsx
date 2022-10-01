import Button from "../core/Button";
import CreateEvent from "./CreateEvent";
import {
  BrowserRouter as Router,
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/create", { replace: true });
  };

  return (
    <div className="text-4xl font-bold leading-9 text-center text-coolestBlue-700 not-italic">
      <div className="mt-24 mx-11">
        <h1>Imagine if</h1>
        <h1
          className="text-transparent bg-clip-text"
          style={{
            background:
              "linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
          }}>
          Snapchat
        </h1>
        <h1>had events.</h1>
      </div>
      <div className="mt-4 mx-7">
        <p className="font-light text-base leading-4 text-center text-coolestGrey-300">
          Easily host and share events with your friends across any social
          media.
        </p>
      </div>
      <div className="mx-105 mt-9 flex flex-row items-center justify-center">
        <img src={"Landing_page_image.svg"}></img>
      </div>
      <div className="mb-4 mt-8">
        <Button
          buttonText="🎉 Create my event"
          extraClasses="font-bold text-base leading-4 text-white px-5 py-4"
          onClick={handleNavigate}></Button>
      </div>
      <Routes>
        <Route path="/create" element={<CreateEvent />} />
      </Routes>
    </div>
  );
}
