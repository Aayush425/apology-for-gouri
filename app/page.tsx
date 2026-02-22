"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Utensils } from "lucide-react";

export default function ApologyPage() {
  const [step, setStep] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const moveNo = () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    setNoPos({ x, y });
  };

  const screens = [
    // STEP 0: THE INTRO
    {
      content: (
        <div className="text-center">
          <motion.img 
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHJreXpueGZ4bm9oYXBpYnh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/OPU6wUKARAyRUIAKIU/giphy.gif"
          />
          <h1 className="text-4xl font-bold text-rose-600 mb-2 font-dancing">Hi Babyyy... </h1>
          <p className="text-rose-400 mb-8">I made something for you.. Gouri..😘 </p>
          <button onClick={() => setStep(1)} className="bg-white p-6 rounded-full shadow-xl border-2 border-rose-100 hover:scale-110 transition-transform">
            <Heart className="w-12 h-12 text-rose-500 fill-current" />
          </button>
        </div>
      )
    },
    // STEP 1: THE REASONS
    {
      content: (
        <div className="max-w-md bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl text-center border-2 border-rose-100">
          <motion.img 
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHJreXpueGZ4bm9oYXBpYnh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/ISOckXUybVfQ4/giphy.gif"
            className="w-40 h-40 mx-auto mb-4 rounded-xl"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">I'm so sorry...</h2>
          <ul className="text-left space-y-3 text-gray-600 mb-6 italic">
            <li>✨ I hate it when we're not okay.</li>
            <li>✨ You deserve the absolute best version of me.💖 </li>
            <li>✨ I promise to make it up to you with all my heart and lots of kissies next time we meet... 🥰</li>
          </ul>
          <button onClick={() => setStep(2)} className="w-full bg-rose-500 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-rose-600 transition-colors">
            Keep reading? 👉
          </button>
        </div>
      )
    },
    // NEW STEP 2: THE LONG PARAGRAPH
    {
      content: (
        <div className="max-w-md bg-white p-8 rounded-3xl shadow-2xl border-2 border-rose-100">
          <div className="flex justify-center mb-4 text-rose-400">
             <Sparkles size={32} />
          </div>
          <h2 className="text-xl font-bold text-rose-600 mb-4 text-center italic underline">A Little message for my wifeyy</h2>
          <div className="max-h-60 overflow-y-auto pr-2 mb-6 text-gray-700 leading-relaxed text-sm scrollbar-thin scrollbar-thumb-rose-200">
            {/* YOU CAN REPLACE THIS TEXT WITH YOUR ACTUAL PARAGRAPH */}
            <p className="mb-4">
              Gouri, my love.. what i did yesterday was really bad and i know it hurt you a lot. i can't even begin to express how much sorry i am for making you feel that way. you mean the world to me and the last thing i ever want to do is cause u pain. i know i messed up last night... mujhe insensitive hone ki jagah tumhari feelings ko samajhna chahiye tha i know i promised u that i would be more understanding... i failed.. but please know that i am truly sorry and i will do everything in my power to make it up to you. what happened yesterday was a moment of my weakness.. i was stressed because of my loses in the trades and i took it out on you, which is completely unfair.. 
            </p>
            <p className="mb-4">
              i know u dont deserve to be treated that way and im so ashamed of myself... really.. bubuuuu please forgive me for being such an idiot.. i will never say such things which remind u of my past and make u feel jealous again. i promise to be more mindful of your feelings about my past and to reassure you that you are the obly one i care about.. this paragraph is going to be never ending so i will stop here but please know that im truly sorry.. for yesterday.
            </p>
            <p>
              Thank you for being so patient with me and for always being by my side. I love you more than words can express! 💖
            </p>
          </div>
          <button onClick={() => setStep(3)} className="w-full bg-rose-500 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-rose-600">
            Hehe u are on the right track
          </button>
        </div>
      )
    },
    // STEP 3: THE FORGIVENESS
    {
      content: (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-rose-600 mb-10">Forgive me?</h2>
          <div className="flex gap-6 justify-center items-center">
            <button onClick={() => setStep(4)} className="bg-green-500 text-white px-10 py-4 rounded-2xl text-xl font-bold shadow-lg hover:scale-110 transition-transform">
              Yes.. hubbyy!! 😚
            </button>
            <motion.button 
              animate={{ x: noPos.x, y: noPos.y }}
              onMouseEnter={moveNo}
              className="bg-gray-400 text-white px-10 py-4 rounded-2xl text-xl font-bold cursor-not-allowed"
            >
              hard work required ❌
            </motion.button>
          </div>
        </div>
      )
    },
    // STEP 4: THE REWARD
    {
      content: (
        <div className="text-center">
          <motion.img 
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHJreXpueGZ4bm9oYXBpYnh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/l41lTfuxV5R8fA24/giphy.gif"
            className="w-56 h-56 mx-auto mb-6 rounded-3xl shadow-2xl"
          />
          <h1 className="text-4xl font-bold text-rose-600 mb-2">YAY! ❤️</h1>
          <p className="text-gray-600 mb-6">thanks my wifeyy...i know u love me a lot😚😚.</p>
          <div className="bg-white p-4 rounded-2xl border-2 border-dashed border-rose-300 flex items-center justify-center gap-2 text-rose-500 font-bold">
            <Utensils size={20} /> you are my sweetheart!!💋
          </div>
        </div>
      )
    }
  ];

  return (
    <main className="h-screen w-full flex items-center justify-center bg-rose-50 p-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.1, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {screens[step].content}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
