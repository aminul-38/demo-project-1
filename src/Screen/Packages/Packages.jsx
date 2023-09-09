import data from "../../data.json";

const Packages = () => {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            {data.Books.map((Book) => (
              <div className="col-md-6 my-2">
                <div className="card product">
                  <img src={Book.image} className="card-img-top card-image" />
                  <div className="card-body">
                    <h5 className="card-title">{Book.title}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <h4>Price : {Book.price}</h4>
                    <a href="#" className="btn btn-primary">
                      Order Now !
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <div className="card my-3 p-3">
            <h3 className="text-center">Cart</h3>
            <hr />
            <h4>QTR : 1</h4>
            <h4>Subtotal : 100$</h4>
            <h4>Delivary Charge : 2$</h4>
            <h4>Total prince : 102$</h4>
            <div className="btn btn-info">Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Packages;
