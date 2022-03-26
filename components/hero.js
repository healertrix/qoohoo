import {Card} from "./card"
export const Hero = () => {
  return (
    <>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse ">
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            class="max-w-md rounded-lg shadow-2xl"
          />
          <img src="/plus.svg" alt="" />
          <p className="text-5xl"> Yellow Hoodie</p>
        </div>
      </div>
      <Card/>
    </>
  );
};
