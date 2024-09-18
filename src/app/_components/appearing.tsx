import React, { PropsWithChildren } from 'react'
import { motion, MotionProps } from "framer-motion";

export type AppearingProps = {
      order?: number;
      delay?: number
  } & MotionProps & React.HTMLProps<HTMLDivElement>


export class Appearing {
      public static Sequentiel ({children} : PropsWithChildren ) {
            
      }
}

export default Appearing
