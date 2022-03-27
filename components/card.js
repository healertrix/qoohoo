export const Card = () => {
    return (
      <>
        <div className=" w-60 h-40 rounded-2xl	 	mr-2 shadow-xl flex">
          <div className="m-1 p-5 z-1">
            <p className="mt-2 text-sm ">Cool shoes</p>
            <h2 className="text-xl decoration-4	">$87</h2>
          </div>
          <figure className="z-0">
            <img src="https://media.istockphoto.com/photos/pair-of-stylish-sneakers-isolated-on-white-background-white-casual-picture-id1248566148?k=20&m=1248566148&s=170667a&w=0&h=Lom1xUV8pfz2kFmzepcEzn52mlEzWj5d2TMDFKlhOsc=" />
          </figure>
        </div>
      </>
    );
}