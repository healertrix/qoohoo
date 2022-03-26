export const Card = () => {
    return (
      <>
        <div className="card w-44 glass">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <p>Half dome palover</p>
            <h2 className="card-title">$87</h2>
          </div>
        </div>
      </>
    );
}