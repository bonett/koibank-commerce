import React from "react";
import { IconInterface } from "../models/icon.model";
import { Colors } from "../constants"


const HomeIcon = ({ color = Colors.gray100, height = 24, width = 24, fill = 'none' }: IconInterface) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} data-name="Layer 1" viewBox="0 0 48 48"><path fill={fill} stroke={color} d="M44.62 20.22l-18.75-15a3 3 0 0 0-3.74 0l-18.75 15a1 1 0 1 0 1.24 1.56L8 19.08V41a3 3 0 0 0 3 3h7a1 1 0 0 0 1-1V25a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3V43a1 1 0 0 0 1 1h7a3 3 0 0 0 3-3V19.08l3.38 2.7A1 1 0 0 0 44 22a1 1 0 0 0 .78-.38A1 1 0 0 0 44.62 20.22zM38.38 13.7A1 1 0 0 0 40 12.92V8a1 1 0 0 0-1-1H32.85a1 1 0 0 0-.62 1.78z" /></svg>
    );
};

export default HomeIcon;