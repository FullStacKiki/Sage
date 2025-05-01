import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Box, Grid } from 'lucide-react'
import { GridPattern } from './components/magicui/grid-pattern'
import ImageSlider from './ImageSlider'
import { Info, HelpCircle, Mail, User } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <GridPattern className="fixed inset-0 z-0 w-full h-full" />
      
      <main className="relative z-10 px-4 py-8 md:py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-7xl mx-auto flex flex-col  lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Image Slider Section */}
          <div className="w-full lg:w-1/2">
            <ImageSlider className="mx-auto" />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl">
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Master Meal Planning,{" "}
                <span className="block mt-2">
                  <u className="text-green-600">Simplify Your Life</u>
                </span>
              </h1>
              
              <p className="text-center text-gray-700 max-w-xl mx-auto mb-8">
                Revolutionize your meal planning with Sage! Effortlessly plan your meals,
                shop smarter, and say goodbye to the stress of deciding what's for
                dinner. Eating well has never been this easy!
              </p>

              {/* App Store Button */}
              <div className="flex justify-center">
                <a
                  href="https://apps.apple.com/us/app/sage-meal-planner/id6741210077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-black/90 transition-colors"
                >
                  <svg viewBox="0 0 384 512" className="w-6 h-6">
                    <path
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                      fill="currentColor"
                    />
                  </svg>
                  <div>
                    <div className="text-xs text-left">Download on the</div>
                    <div className="text-xl font-semibold font-sans -mt-1">
                      App Store
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      
    </div>
  );
};

export default Index;
