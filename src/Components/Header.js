import React from 'react'

function Header(props) {
    console.warn("Header props", props.data);
    console.warn(props.data.length);
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img src="https://thumbs.dreamstime.com/b/shopping-cart-icon-vector-eps-trolley-logo-web-icons-shop-button-182252657.jpg" />
            </div>
        </div>
    )
}

export default Header;