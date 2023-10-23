import React from 'react'
import '../Styles/Footer.css'

const Footer = ({ footer }) => {
    return (
        <>
            <div className="footer">
                <div className="support_col">
                    <p className="support">Support</p>

                    {
                        footer.support.map((item, index) => (
                            <a key={index} href={item.url}>{item.name}</a>
                        ))
                    }
                </div>

                <div className="shop_col">
                    <p className="shop">Shop And Learn</p>
                    {
                        footer.support.map((item, index) => (
                            <a key={index} href={item.url}>{item.name}</a>
                        ))
                    }
                </div>

                <div className="retail_col">
                    <p className="retail">Retail Store</p>
                    {
                        footer.retailStore.map((item, index) => (
                            <a key={index} href={item.url}>{item.name}</a>
                        ))
                    }
                </div>

                <div className="about_col">
                    <p className="about">About</p>
                    {
                        footer.aboutUS.map((item, index) => (
                            <a key={index} href={item.url}>{item.name}</a>
                        ))
                    }
                </div>

                <div className="contact_col">
                    <p className="shop">Contact Us</p>
                    {
                        footer.contactUs.map((item, index) => (
                            <a key={index} href={item.url}>{item.name}</a>
                        ))
                    }

                </div>

            </div>

            <div className="footer_border">
                Copyright © Mi-Store All Rights Reserved
            </div>

        </>
    )
}

export default Footer