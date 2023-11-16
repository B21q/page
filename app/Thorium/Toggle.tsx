'use client'

import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa6';

const Toggle = () => {
  const [mostrarDiv1, setMostrarDiv1] = useState(true);

  const alternarDiv = () => {
    setMostrarDiv1(!mostrarDiv1);
  };

  return (
    <div className="flex flex-col justify-center h-screen mx-4 lg:h-max md:mx-8 lg:mx-20 xl:mx-20">
      <p className="flex justify-center text-2xl font-extrabold text-center font-open">
        All Features
      </p>
      {mostrarDiv1 ? (
        <div className="pt-4 font-open">
          <div id="first" className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>
                Various compiler flags that improve performance and target AVX
                CPU's
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>Experimental MPEG-DASH support.</h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>JPEG XL Image File Format turned on by default.</h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>Enable Live Caption (SODA) on all builds.</h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>VAAPI on Wayland Patch (Thanks AUR and @pierro78)</h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>Audio Sandbox patch.</h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>DoH (DNS over HTTPS) patches from Bromite.</h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>
                Show full URLs including trailing slashes in address bar by
                default.
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>Disable FLOC patch.</h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>Disable annoying Default Browser Infobar warning.</h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>
                Adds DuckDuckGo, Brave Search, Ecosia, Ask.com, and Yandex.com
                in US and other locales, along with the normal search engines.
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>
                Always use the local NTP (New Tab Page) regardless of search
                engine.
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-thorium">
              <FaCheck />
            </span>
            <h1>Fix icons when distilling page content in Reader Mode.</h1>
          </div>
        </div>
      ) : (
        <div className="pt-4 font-open">
          <div id="second" className="flex flex-col justify-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>
                Enable new Menu UI when right clicking the Reload button. (Adds
                'Normal Reload', 'Hard Reload', and 'Clear Cache and Hard
                Reload')
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>Home button and Chrome Labs shown by Default.</h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>Prefetch settings updated to respect privacy.</h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>Patches for GN and chrome_sandbox when building.</h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>
                Remove the addition of the Chrome APT sources.list during
                installation.
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>Widevine CDM Patch for Linux.</h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>GTK auto dark mode patch</h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>
                Various new flags either developed from scratch, or added from
                Ungoogled Chromium. See PATCHES.md
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>Enable Parallel Downloading by Default.</h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>
                Inclusion of pak a utility for packing and unpacking the *.pak
                files in Thorium or any other Chromium based browser.
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-thorium">
                <FaCheck />
              </span>
              <h1>
                Logo and Branding/Naming changed to the Thorium logo, Thorium
                name, and "Alex313031" being appended to "The Chromium Authors"
                in credits, etc.
              </h1>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-end justify-end">
        <button
          className="p-2 rounded-sm w-max bg-thorium text-bg :bg-blue-500"
          onClick={alternarDiv}
        >
          {mostrarDiv1 ? <FaArrowRight /> : <FaArrowLeft />}
        </button>
      </div>
    </div>
  );
};

export default Toggle;
