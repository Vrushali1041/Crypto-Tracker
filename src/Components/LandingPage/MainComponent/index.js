import React from "react";
import "./style.css";
import Button from "../../Common/Button";
import iphone from "../../../Assets/iphone.png";
import gradient from "../../../Assets/gradient.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"

function MainComponent() {
    return (
        <div className="flex-info">
            <div className="left-component">
                <motion.h1 className="crypto-heading"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }} >
                    Track Crypto
                </motion.h1>

                <motion.h1 className="real-time-heading"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}>
                    Real Time⠄
                </motion.h1>

                <motion.p className="info-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.75 }}>
                     Track crypto through a public api in real time. Visit the dashboard to do so!
                </motion.p>

                <motion.div className="btn-flex"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}>
                   <Link to="/dashboard">
                        <Button text={"Dashboard"}
                            onClick={() => console.log("Button Clicked")} />
                   </Link>
                    {/* <Button text={"Share App"} outlined={true} /> */}
                </motion.div>
            </div>
            <div className="phone-container">
                <motion.img src={iphone} className="iphone" alt=""
                initial={{ y: -12 }}
                animate={{ y: 12 }}
                transition={{
                  type: "smooth",
                  repeatType: "mirror",
                  duration: 2,
                  repeat: Infinity,
                }} />
                <img src={gradient} className="gradient" alt="" />
            </div>
        </div>
    )
}

export default MainComponent