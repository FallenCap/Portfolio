import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const GithubCalander = () => {
    return (
        <React.Fragment>
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionHeadText2} `}>Github Contributions.</h2>
            </motion.div>
            <div className='flex justify-center items-center'>

                <GitHubCalendar username='FallenCap' />
            </div>
        </React.Fragment>
    )
}

export default SectionWrapper(GithubCalander, "");
