"use client";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const Card = ({
  card,
}: {
  card: Card;
}) => {
  return (
    <div className="relative  h-60 w-60 md:h-60 md:w-96">
        <motion.div
            key={card.id}
            className="absolute bg-white h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200  shadow-black/[0.1] flex flex-col justify-between"
            style={{
                transformOrigin: "top center",
            }}
        >
            <div className="font-normal text-neutral-700">
                {card.content}
            </div>
            <div>
                <p className="text-neutral-500 font-medium">
                {card.name}
                </p>
                <p className="text-neutral-400 font-normal">
                {card.designation}
                </p>
            </div>
        </motion.div>
    </div>
  );
};
