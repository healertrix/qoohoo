export const Corsel = ({src}) => {
  return (
    <>
      <div className=" w-40 h-40 rounded-5xl	 	mr-6 card hover:scale-125  duration-300 drop-shadow-md	 shadow-xl flex">
        <figure>
          <img src={src} />
        </figure>
      </div>
    </>
  );
};