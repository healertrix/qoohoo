export const Card = () => {
    return (
      <>
        <div className="card w-35 bg-base-80 shadow-xl m-2 card-side	">
          <figure>
            <img
              src="https://media.istockphoto.com/photos/pair-of-stylish-sneakers-isolated-on-white-background-white-casual-picture-id1248566148?k=20&m=1248566148&s=170667a&w=0&h=Lom1xUV8pfz2kFmzepcEzn52mlEzWj5d2TMDFKlhOsc="
              alt="Shoes"
              width="60"
              height="60"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">$87</h2>
            <p>Air Jordans</p>
          </div>
        </div>
      </>
    );
}