import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5 mb-4 pt-3 fixed-bottom" align="center">
            <div>
                <h5>Student workshop at Lexicon Småland</h5>
            </div>
            <br></br>

            <div>
                <p className="mb-3">
                    Copyright &copy;
                    <span id="year">2022</span>
                    Lexicon Småland
                </p>
            </div>
        </footer>
    );
};

export default Footer;