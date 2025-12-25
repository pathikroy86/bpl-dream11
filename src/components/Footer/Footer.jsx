import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className=" sm:footer-horizontal bg-neutral text-neutral-content p-10 flex flex-col items-center">
                <div className='mb-5'>
                    <img src="https://i.ibb.co.com/q3wQx89Q/logo-footer.png" alt="" />
                </div>
                <div className='footer sm:footer-horizontal justify-between px-5 mb-5 border-b-2 py-4'>
                    <nav>
                        <h6 className="footer-title">About Us</h6>
                        <p>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                    </nav>
                    <nav>
                        <h6 className="Quick links">Company</h6>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">Services</a>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Contact</a>
                    </nav>

                    <form>
                        <h6 className="footer-title">Subscribe</h6>
                        <fieldset className="w-80">
                            <label>Subscribe to our newsletter to get <br /> latest updates</label>
                            <div className="join">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered join-item" />
                                <button className="btn btn-soft btn-secondary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>

                </div>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by BPL Dream 11</p>
            </footer>
        </div>
    );
};

export default Footer;