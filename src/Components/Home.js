import React from 'react'

function Home(props) {
    console.warn("Home props", props);
    return (
        <div>
            <div className="add-to-cart">
                <img src="https://thumbs.dreamstime.com/b/shopping-cart-icon-vector-eps-trolley-logo-web-icons-shop-button-182252657.jpg" />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="image-wrapper item">
                    <img src="https://media.gq-magazine.co.uk/photos/60a18ad872e426530a83d0e1/master/w_400%2Cc_limit/iphone-12-blue-select-2020.jpg" alt="iPhone" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        iPhone
                    </span><br />
                    <span>
                        Price: $1000
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={() =>
                        props.addToCartHandler({ price: 1000, name: 'iPhone 12 mini' })
                    }>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;