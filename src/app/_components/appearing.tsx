import { motion, MotionProps } from "framer-motion";
import { createContext, PropsWithChildren } from "react";
import { ValueContext } from "@/app/_lib/valueContext";




const context = createContext(new ValueContext(0))

export type AppearingProps = {
    order?: number;
    delay?: number
} & MotionProps & React.HTMLProps<HTMLDivElement>

export class Appearing {

    public static Sequential({ children }: PropsWithChildren) {
        const value = new ValueContext(0)
        return (
            <context.Provider value={value}>
                {children}
            </context.Provider>
        )
    }

    public static Animate(props: AppearingProps) {
        return (
            <context.Consumer>
                {
                    delay => {
                        const dv = props.delay ?? 0.1;
                        if (!props.order) {
                            delay.set(delay.get() + dv)
                        }
                        const d = props.order ? props.order * dv : delay.get()
                        return (
                            <motion.div
                                transition={{ delay: d, duration: 0.3 }}
                                {...props}>
                                {
                                    props.children
                                }
                            </motion.div>
                        )
                    }}
            </context.Consumer>
        )
    }

    public static Pop(props: AppearingProps) {
        return <Appearing.Animate 
            initial={{ scale: 0, opacity: 0, }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
        {...props}></Appearing.Animate>
    }

    public static FromBottomProps: AppearingProps = {
        initial: { y: 40, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true }
    }

    public static FromBottom(props: AppearingProps) {
        return <Appearing.Animate {...Appearing.FromBottomProps}
        {...props}></Appearing.Animate>
    }

    public static FromRightProps: AppearingProps = {
        initial: { x: "100%", opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        viewport: { once: true }
    }

    public static FromRight(props: AppearingProps) {
        return <Appearing.Animate {...Appearing.FromRightProps}
        {...props}></Appearing.Animate>
    }

    public static FromLeftProps: AppearingProps = {
        initial: { x: "-100%", opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        viewport: { once: true }
    }

    public static FromLeft(props: AppearingProps) {
        return <Appearing.Animate {...Appearing.FromLeftProps}
        {...props}></Appearing.Animate>
    }
}