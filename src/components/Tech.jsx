import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
    return (
        <React.Fragment>
            <h2 className={`${styles.sectionHeadText} text-center p-4`}>
                Technical Skills.
            </h2>
            <div className='flex flex-row flex-wrap justify-center gap-10'>
                {technologies.map((technology) => (
                    <div className='w-28 h-28' key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};

export default SectionWrapper(Tech, "");
