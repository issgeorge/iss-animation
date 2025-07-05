import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NameAnimation() {
  const [step, setStep] = useState(0);
  const [ignatius, setIgnatius] = useState("");
  const [santosh, setSantosh] = useState("");

  useEffect(() => {
    const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

    async function run() {
      await sleep(1500);
      const ign = "Ignatius";
      for (let i = 0; i < ign.length; i++) {
        setIgnatius((prev) => prev + ign[i]);
        await sleep(100);
      }
      await sleep(400);
      setStep(1);
      await sleep(400);
      const san = "Santosh";
      for (let i = 0; i < san.length; i++) {
        setSantosh((prev) => prev + san[i]);
        await sleep(100);
      }
      await sleep(600);
      setStep(2);
    }

    run();
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 flex items-center justify-center font-sans">
      <div className="flex flex-col items-center text-3xl space-y-1">
        <motion.div
          animate={step >= 2 ? { y: -32 } : { y: 0 }}
          transition={{ type: "spring", stiffness: 70 }}
        >
          {ignatius}
          <span className="animate-pulse">{step < 1 ? "|" : ""}</span>
        </motion.div>

        <AnimatePresence>
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0 }}
            >
              Stanis
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          animate={step >= 2 ? { y: 32 } : { y: 0 }}
          transition={{ type: "spring", stiffness: 70 }}
        >
          {santosh}
        </motion.div>
      </div>
    </div>
  );
}
