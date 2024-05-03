function Products(props) {
    return(
        <div className="products">
            <h1>{props.productsTitle}</h1>
            <div className="sections">
              <section className="sec-1">
                <img src="../media/plant image.jpeg" alt="plant" />
                <p>{props.secOne}</p>
              </section>
              <section className="sec-2">
                <img src="../media/plant img.jpeg" alt="plant" />
                <p>{props.secTwo}</p>
              </section>
              <section className="sec-3">
                <img src="../media/plant ing.jpeg" alt="plant" />
                <p>{props.secThree}</p>
              </section>
              <section className="sec-4">
                <img src="../media/plant pic.jpeg" alt="plant" />
                <p>{props.secFour}</p>
              </section>
            </div>
        </div>
    );
}

export default Products;